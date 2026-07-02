// fetch-dresscode-photos.mjs
//
// Pulls one representative Unsplash photo for each of the 11 dress codes
// in DressCodes.tsx and writes results to dresscode-photos.json.
//
// USAGE:
//   UNSPLASH_KEY=your_access_key_here node fetch-dresscode-photos.mjs
//
// Run from the same folder as Stag.tsx / fetch-destination-photos.mjs.
// Same resume-on-rerun behaviour as the destination script.

import fs from "fs";

const UNSPLASH_KEY = process.env.UNSPLASH_KEY;
if (!UNSPLASH_KEY) {
  console.error("Missing UNSPLASH_KEY. Run as: UNSPLASH_KEY=xxx node fetch-dresscode-photos.mjs");
  process.exit(1);
}

const OUTPUT_PATH = "./dresscode-photos.json";
const REQUEST_DELAY_MS = 1200;

// Hand-tuned search queries per dress code - generic searches like
// "garden party" or "smart casual" alone return very mixed results
// (often women's fashion or unrelated photos), so each one is tied
// to "men's" and a more specific visual cue.
const DRESS_CODE_QUERIES = {
  "white-tie": "white tie tailcoat formal menswear",
  "black-tie": "black tie tuxedo groom formal",
  "black-tie-optional": "tuxedo dark suit formal evening menswear",
  "formal": "formal suit menswear wedding guest",
  "morning-dress": "morning dress grey tailcoat wedding",
  "lounge-suit": "navy suit menswear wedding guest",
  "cocktail-attire": "cocktail attire suit evening menswear",
  "smart-casual": "smart casual blazer menswear",
  "garden-party": "garden party summer suit menswear",
  "festive-winter": "winter wedding suit tweed menswear",
  "beach-destination": "linen suit beach wedding menswear",
  "highland": "kilt highland dress scottish wedding",
};

let existing = {};
if (fs.existsSync(OUTPUT_PATH)) {
  try {
    existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"));
    console.log(`Resuming - ${Object.keys(existing).length} dress codes already fetched.`);
  } catch {
    existing = {};
  }
}

async function fetchPhotoFor(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;

  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  if (res.status === 403) throw new Error("RATE_LIMIT");
  if (!res.ok) {
    console.warn(`  ! Request failed (${res.status})`);
    return null;
  }

  const data = await res.json();
  const photo = data.results?.[0];
  if (!photo) {
    console.warn(`  ! No results for "${query}"`);
    return null;
  }

  return {
    imageUrl: photo.urls.regular,
    photographer: photo.user.name,
    photographerUrl: photo.user.links.html,
    unsplashUrl: photo.links.html,
  };
}

async function main() {
  const ids = Object.keys(DRESS_CODE_QUERIES);
  console.log(`Fetching photos for ${ids.length} dress codes...`);

  const results = { ...existing };
  let fetchedThisRun = 0;

  for (const id of ids) {
    if (results[id]) continue;

    const query = DRESS_CODE_QUERIES[id];
    try {
      console.log(`Fetching: ${id} ("${query}")...`);
      const photo = await fetchPhotoFor(query);
      if (photo) {
        results[id] = photo;
        fetchedThisRun++;
      }
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));
    } catch (err) {
      if (err.message === "RATE_LIMIT") {
        console.log("\nHit Unsplash's hourly rate limit.");
        console.log(`Fetched ${fetchedThisRun} new photos this run (${Object.keys(results).length} total saved).`);
        console.log("Wait an hour and re-run the same command.\n");
        process.exit(0);
      }
      console.warn(`  ! Error fetching "${id}": ${err.message}`);
    }
    await new Promise(r => setTimeout(r, REQUEST_DELAY_MS));
  }

  console.log(`\nDone. ${fetchedThisRun} new photos fetched, ${Object.keys(results).length} total in ${OUTPUT_PATH}.`);
}

main();
