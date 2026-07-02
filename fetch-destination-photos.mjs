// fetch-destination-photos.mjs
//
// Pulls one representative Unsplash photo for every destination in Stag.tsx
// and writes the results (id, photo URL, photographer credit, profile link)
// to destination-photos.json.
//
// USAGE:
//   1. Get a free Unsplash Access Key: https://unsplash.com/developers
//   2. Run from your terminal (Node 18+, has built-in fetch):
//        UNSPLASH_KEY=your_access_key_here node fetch-destination-photos.mjs
//   3. Check destination-photos.json once it finishes.
//   4. Tell Claude to merge destination-photos.json into Stag.tsx.
//
// The key is read from an environment variable, never hardcoded here,
// so it's safe to commit this script to your repo if you want to.
//
// Rate limits: free/demo Unsplash apps get 50 requests/hour. With ~200
// destinations this script will need to be run in 2-3 batches across an
// hour, or you can request a production key from Unsplash (5,000/hour)
// once your app is reviewed.

import fs from "fs";

const UNSPLASH_KEY = process.env.UNSPLASH_KEY;
if (!UNSPLASH_KEY) {
  console.error("Missing UNSPLASH_KEY. Run as: UNSPLASH_KEY=xxx node fetch-destination-photos.mjs");
  process.exit(1);
}

// Path to your Stag.tsx file - adjust if running from a different folder
const STAG_TSX_PATH = process.env.STAG_TSX_PATH || "./src/modules/Stag.tsx";
const OUTPUT_PATH = "./destination-photos.json";
const REQUEST_DELAY_MS = 1200; // be polite, avoid hammering the rate limit

// Load any already-fetched results so re-running the script resumes
// rather than starting over (handy across rate-limit batches).
let existing = {};
if (fs.existsSync(OUTPUT_PATH)) {
  try {
    existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"));
    console.log(`Resuming - ${Object.keys(existing).length} destinations already fetched.`);
  } catch {
    existing = {};
  }
}

function extractDestinations(tsxContent) {
  // Matches: { id: "krakow", label: "Krakow", country: "Poland", type: ["city-party", ...
  const regex = /\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)",\s*country:\s*"([^"]+)",\s*type:\s*\[([^\]]+)\]/g;
  const out = [];
  let m;
  while ((m = regex.exec(tsxContent)) !== null) {
    const types = m[4].split(",").map(t => t.trim().replace(/"/g, ""));
    out.push({ id: m[1], label: m[2], country: m[3], types });
  }
  return out;
}

// Picks a more accurate scene keyword based on the destination's tagged
// types, instead of always searching "cityscape" (which returns poor
// results for ski resorts, golf courses, beaches, and nature spots).
function sceneKeywordFor(types) {
  if (types.includes("ski")) return "ski resort mountain snow";
  if (types.includes("golf")) return "golf course landscape";
  if (types.includes("beach")) return "beach coastline aerial";
  if (types.includes("hiking") || types.includes("adventure")) return "mountain landscape nature";
  return "cityscape";
}

// Cleans up compound/non-place labels ("Park City / Utah", "Algarve East
// (Faro/Tavira)", "Tignes / Val d'Isère") down to the first clean place
// name, so the search query isn't confused by slashes and parentheses.
function cleanLabel(label) {
  return label
    .split("/")[0]
    .replace(/\([^)]*\)/g, "")
    .trim();
}

async function fetchPhotoFor(label, country, types) {
  const cleanedLabel = cleanLabel(label);
  const scene = sceneKeywordFor(types);
  const query = encodeURIComponent(`${cleanedLabel} ${country} ${scene}`);
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=1&orientation=landscape`;

  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  if (res.status === 403) {
    throw new Error("RATE_LIMIT");
  }
  if (!res.ok) {
    console.warn(`  ! Request failed for "${label}" (${res.status})`);
    return null;
  }

  const data = await res.json();
  const photo = data.results?.[0];
  if (!photo) {
    console.warn(`  ! No results for "${label}"`);
    return null;
  }

  return {
    imageUrl: photo.urls.regular, // good size for cards; swap for .small / .full if needed
    thumbUrl: photo.urls.small,
    photographer: photo.user.name,
    photographerUrl: photo.user.links.html,
    unsplashUrl: photo.links.html,
    downloadLocation: photo.links.download_location, // required ping per Unsplash guidelines if you ever treat a view as a "download"
  };
}

async function main() {
  const tsx = fs.readFileSync(STAG_TSX_PATH, "utf8");
  const destinations = extractDestinations(tsx);
  console.log(`Found ${destinations.length} destinations in ${STAG_TSX_PATH}`);

  const results = { ...existing };
  let fetchedThisRun = 0;

  for (const dest of destinations) {
    if (results[dest.id]) continue; // already have it from a previous run

    try {
      console.log(`Fetching: ${dest.label}, ${dest.country}...`);
      const photo = await fetchPhotoFor(dest.label, dest.country, dest.types);
      if (photo) {
        results[dest.id] = { label: dest.label, country: dest.country, ...photo };
        fetchedThisRun++;
      }
      // Save progress after every photo, so a crash or rate-limit doesn't lose work
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        console.log("\nHit Unsplash's hourly rate limit.");
        console.log(`Fetched ${fetchedThisRun} new photos this run (${Object.keys(results).length} total saved).`);
        console.log("Wait an hour and re-run the same command - it will resume where it left off.\n");
        process.exit(0);
      }
      console.warn(`  ! Error fetching "${dest.label}": ${err.message}`);
    }

    await new Promise(r => setTimeout(r, REQUEST_DELAY_MS));
  }

  console.log(`\nDone. ${fetchedThisRun} new photos fetched, ${Object.keys(results).length} total in ${OUTPUT_PATH}.`);
}

main();
