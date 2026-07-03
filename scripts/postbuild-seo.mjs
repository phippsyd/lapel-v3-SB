// Runs automatically after `npm run build` (via the npm "postbuild" hook).
// Takes the built dist/index.html and writes a copy for each route with its
// own <title>, meta description, OG tags and canonical URL baked in — so
// Google, WhatsApp and iMessage receive correct HTML for every guide
// without executing any JavaScript.
//
// Keep the routes and copy here in sync with the SEO map in src/App.tsx.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const ORIGIN = "https://www.lapelguide.co.uk";

const ROUTES = [
  {
    slug: "attire",
    title: "Wedding Suit Guide for Grooms — Every Decision Explained | Lapel",
    desc: "Lapels, cuffs, colours, hire vs buy — every suit decision a groom faces, explained before the fitting. Build your fitting sheet.",
  },
  {
    slug: "rings",
    title: "Men's Wedding Rings — Every Option Compared | Lapel",
    desc: "Platinum to tungsten to silicone to a ring tattoo — every men's wedding ring option compared, with where to buy in the UK.",
  },
  {
    slug: "dress-codes",
    title: "UK Wedding Dress Codes Explained — Black Tie to Smart Casual | Lapel",
    desc: "Every UK wedding dress code decoded — white tie, black tie, morning dress, lounge suit and more, with honest guidance on what to wear.",
  },
  {
    slug: "stag",
    title: "Stag Do Ideas — Nearly 200 Destinations Compared | Lapel",
    desc: "Plan the stag properly: every type of stag do and nearly 200 destinations, filtered by group, budget and vibe, with booking links.",
  },
  {
    slug: "speech",
    title: "The Groom's Speech — How to Write and Deliver It | Lapel",
    desc: "How to write a groom's speech that lands: structure, thank-yous, jokes that work, and a builder to write yours now.",
  },
  {
    slug: "faq",
    title: "Groom Questions, Answered Honestly | Lapel",
    desc: "Which buttons to fasten, how much cuff to show, when to take the jacket off — every question grooms are too embarrassed to ask.",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const base = readFileSync(join(DIST, "index.html"), "utf8");

for (const r of ROUTES) {
  const url = `${ORIGIN}/${r.slug}`;
  let html = base;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(r.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(r.desc)}$2`);

  const dir = join(DIST, r.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`  seo: wrote /${r.slug}/index.html`);
}

console.log(`seo: ${ROUTES.length} route pages generated.`);
