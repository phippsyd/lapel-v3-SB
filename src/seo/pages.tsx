// Static, crawlable pages generated at build time (see scripts/postbuild-seo.mjs).
// Each page is plain HTML: no JavaScript, so Google and every other crawler
// sees the full content. The interactive guides stay as they are; these pages
// link into them.
import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";
import { T } from "../theme";
import { ALL_DESTINATIONS, DESTINATION_PHOTOS, STAG_TYPES, type Destination } from "../modules/Stag";
import { STAG_GUIDES, type StagGuide } from "./content/stag";

const ORIGIN = "https://www.lapelguide.co.uk";

export type StaticPage = { path: string; html: string };

const NAV = [
  { label: "Attire", href: "/attire" },
  { label: "Rings", href: "/rings" },
  { label: "Dress Codes", href: "/dress-codes" },
  { label: "Stag", href: "/stag" },
  { label: "Speech", href: "/speech" },
  { label: "FAQ", href: "/faq" },
];

const REGION_LABEL: Record<string, string> = {
  "uk-ireland": "UK & Ireland",
  europe: "Europe",
  longhaul: "Long-haul",
};

const TYPE_LABEL: Record<string, string> = Object.fromEntries(STAG_TYPES.map(t => [t.id, t.label]));

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "…");

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,sans-serif;background:${T.paper};color:${T.ink};-webkit-font-smoothing:antialiased}
a{color:inherit}
h1,h2,h3{font-family:'DM Serif Display',serif;font-weight:400}
.wrap{max-width:1080px;margin:0 auto;padding:0 32px}
.hdr{background:${T.navy}}
.hdr .wrap{display:flex;align-items:center;justify-content:space-between;height:64px;gap:24px}
.brand{font-family:'DM Serif Display',serif;font-size:26px;color:#fff;text-decoration:none;letter-spacing:-.01em}
.nav{display:flex;gap:28px}
.nav a{font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.55);text-decoration:none}
.nav a:hover,.nav a.on{color:#fff}
.hero{background:${T.navy};padding:8px 0 56px;color:#fff}
.crumbs{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:28px}
.crumbs a{text-decoration:none;color:rgba(255,255,255,.7)}
.crumbs span{margin:0 8px}
.spread{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:center}
.hero h1{font-size:54px;line-height:1.06;letter-spacing:-.02em;margin-bottom:18px}
.rule{height:1px;background:rgba(255,255,255,.12);margin-bottom:18px}
.lede{font-size:16px;line-height:1.75;color:rgba(255,255,255,.7);max-width:520px}
.where{font-size:13px;color:rgba(255,255,255,.5);margin-top:14px}
.plate{background:#fff;padding:10px 10px 8px;box-shadow:0 10px 32px rgba(0,0,0,.28);transform:rotate(1.5deg);max-width:380px;justify-self:end;width:100%}
.plate .img{aspect-ratio:4/5;overflow:hidden;background:#EDEAE6;position:relative}
.plate img{width:100%;height:100%;object-fit:cover;display:block}
.plate .credit{position:absolute;bottom:5px;left:7px;font-size:9px;color:rgba(255,255,255,.85);text-shadow:0 1px 3px rgba(0,0,0,.6);text-decoration:none}
.plate .cap{font-size:9px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:${T.mid};text-align:center;margin-top:8px}
main .wrap{padding-top:48px;padding-bottom:64px}
.facts{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid ${T.rule};border-bottom:1px solid ${T.rule};margin-bottom:48px}
.facts div{padding:20px 20px 20px 0}
.facts dt{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${T.mid};margin-bottom:6px}
.facts dd{font-family:'DM Serif Display',serif;font-size:20px;line-height:1.25}
.cols{display:grid;grid-template-columns:200px 1fr;gap:48px;margin-bottom:48px}
.cols h2{font-size:28px;line-height:1.1}
.body p{font-size:16px;line-height:1.75;max-width:620px}
.body p+p{margin-top:14px}
.list div{padding:14px 0;border-bottom:1px solid ${T.rule}}
.list div:first-child{padding-top:0}
.list dt{font-family:'DM Serif Display',serif;font-size:19px;margin-bottom:4px}
.list dd{font-size:15px;line-height:1.7;max-width:620px}
.costs{border-collapse:collapse;max-width:620px;width:100%}
.costs th,.costs td{text-align:left;vertical-align:top;padding:12px 0;border-bottom:1px solid ${T.rule};font-size:15px;line-height:1.6}
.costs th{font-weight:600;width:38%;padding-right:16px}
.note,.checked{font-size:13px;color:${T.mid};margin-top:12px}
.checked{margin:-16px 0 32px}
.bullets{list-style:none;max-width:620px}
.bullets li{font-size:15px;line-height:1.7;padding:12px 0 12px 18px;border-bottom:1px solid ${T.rule};position:relative}
.bullets li:before{content:"";position:absolute;left:0;top:23px;width:6px;height:6px;background:${T.navy};border-radius:50%}
.cols{display:grid;grid-template-columns:220px 1fr;gap:48px;margin-bottom:48px}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
.chips span{font-size:12px;background:${T.white};border:1px solid ${T.rule};border-radius:2px;padding:6px 12px}
.cta{background:${T.white};border:1px solid ${T.rule};border-radius:6px;padding:28px;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;margin-bottom:56px}
.cta h3{font-size:24px;margin-bottom:6px}
.cta p{font-size:14px;color:${T.mid};line-height:1.6;max-width:460px}
.btns{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;padding:12px 22px;border-radius:2px}
.btn.dark{background:${T.dark};color:#fff}
.btn.line{border:1px solid ${T.ink};color:${T.ink}}
.related h2{font-size:28px;margin-bottom:20px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:${T.white};border:1px solid ${T.rule};border-radius:6px;padding:22px;text-decoration:none;display:block}
.card:hover{border-color:${T.navy}}
.card h3{font-size:20px;margin-bottom:4px}
.card .c{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:${T.mid};margin-bottom:10px}
.card p{font-size:13px;line-height:1.6;color:${T.mid}}
.ftr{border-top:1px solid ${T.rule};padding:28px 0 48px;font-size:12px;color:${T.mid}}
.ftr .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
.ftr a{text-decoration:none;margin-left:16px}
@media(max-width:768px){
 .wrap{padding:0 20px}
 .nav{display:none}
 .spread{grid-template-columns:1fr;gap:32px}
 .hero h1{font-size:38px}
 .plate{justify-self:start;max-width:220px}
 .facts{grid-template-columns:1fr 1fr}
 .cols{grid-template-columns:1fr;gap:12px}
 .grid{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){
 .hero h1{font-size:32px}
 .grid{grid-template-columns:1fr}
}`;

function Shell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <a className="brand" href="/">Lapel</a>
          <nav className="nav">
            {NAV.map(n => <a key={n.href} href={n.href} className={n.href === active ? "on" : undefined}>{n.label}</a>)}
          </nav>
        </div>
      </header>
      {children}
      <footer className="ftr">
        <div className="wrap">
          <div>Lapel is an independent guide for UK grooms.</div>
          <div>{NAV.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}</div>
        </div>
      </footer>
    </>
  );
}

function doc(opts: { path: string; title: string; desc: string; image?: string; jsonld: object[]; body: string }) {
  const url = ORIGIN + opts.path;
  const img = opts.image ?? ORIGIN + "/og-image.png";
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(opts.title)}</title>
<meta name="description" content="${esc(opts.desc)}" />
<link rel="canonical" href="${url}" />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="${T.navy}" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Lapel" />
<meta property="og:title" content="${esc(opts.title)}" />
<meta property="og:description" content="${esc(opts.desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${esc(img)}" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>${CSS}</style>
${opts.jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n")}
</head>
<body>${opts.body}</body>
</html>`;
}

const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: ORIGIN + it.path })),
});

function relatedFor(d: Destination): Destination[] {
  return ALL_DESTINATIONS
    .filter(o => o.id !== d.id && o.region === d.region)
    .map(o => ({ o, score: o.type.filter(t => d.type.includes(t)).length + o.vibe.filter(v => d.vibe.includes(v)).length * 0.5 }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(x => x.o);
}

const PUBLISHED = ALL_DESTINATIONS.filter(d => STAG_GUIDES[d.id]);

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cols">
      <h2>{title}</h2>
      <div className="body">{children}</div>
    </section>
  );
}

const paras = (ps: string[]) => ps.map((p, i) => <p key={i}>{p}</p>);

function DestinationPage({ d, g }: { d: Destination; g: StagGuide }) {
  const photo = DESTINATION_PHOTOS[d.id];
  const related = relatedFor(d);
  const facts = Object.entries(d.meta).slice(0, 4);
  const goodFor = d.type.map(t => TYPE_LABEL[t]).filter(Boolean);
  return (
    <Shell active="/stag">
      <section className="hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Lapel</a><span>/</span><a href="/stag">Stag</a><span>/</span><a href="/stag/destinations">Destinations</a><span>/</span>{d.label}</div>
          <div className={photo ? "spread" : undefined}>
            <div>
              <h1>{d.label} stag do</h1>
              <div className="rule" />
              <p className="lede">{d.desc}</p>
              <p className="where">{d.country} · {REGION_LABEL[d.region] ?? d.region}{d.tag ? ` · ${d.tag}` : ""}</p>
            </div>
            {photo && (
              <figure className="plate">
                <div className="img">
                  <img src={photo.imageUrl} alt={`${d.label}, ${d.country}`} loading="lazy" />
                  <a className="credit" href={photo.photographerUrl} rel="noopener noreferrer">Photo: {photo.photographer}</a>
                </div>
                <figcaption className="cap">{d.label}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>
      <main>
        <div className="wrap">
          {facts.length > 0 && (
            <dl className="facts">
              {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
          <Section title={`Why ${d.label}`}>{paras(g.intro)}</Section>
          <Section title="Do locals mind stags?">{paras(g.locals)}</Section>
          <Section title="Getting into bars">{paras(g.gettingIn)}</Section>
          <Section title="Where to drink">
            <dl className="list">{g.areas.map(a => <div key={a.name}><dt>{a.name}</dt><dd>{a.text}</dd></div>)}</dl>
          </Section>
          <Section title="What to do">
            <dl className="list">{g.doing.map(a => <div key={a.name}><dt>{a.name}</dt><dd>{a.text}</dd></div>)}</dl>
          </Section>
          <Section title="A weekend plan">
            <dl className="list">{g.plan.map(a => <div key={a.day}><dt>{a.day}</dt><dd>{a.text}</dd></div>)}</dl>
          </Section>
          <Section title="Where to stay">{paras(g.stay)}</Section>
          <Section title="What it costs">
            <table className="costs"><tbody>{g.costs.map(c => <tr key={c.item}><th>{c.item}</th><td>{c.amount}</td></tr>)}</tbody></table>
            {g.costNote && <p className="note">{g.costNote}</p>}
          </Section>
          <Section title="Worth knowing">
            <ul className="bullets">{g.watchOuts.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </Section>
          {goodFor.length > 0 && (
            <Section title="Best for">
              <div className="chips">{goodFor.map(x => <span key={x}>{x}</span>)}</div>
            </Section>
          )}
          <p className="checked">Facts on this page were last checked in {g.checked}. Venue policies and prices change, so check before you book.</p>
          <section className="cta">
            <div>
              <h3>Planning {d.label}?</h3>
              <p>Compare it against nearly 200 destinations filtered to your group size, budget and the kind of stag he actually wants.</p>
            </div>
            <div className="btns">
              <a className="btn line" href={d.aff.url} rel="sponsored noopener">{d.aff.label}</a>
              <a className="btn dark" href="/stag">Plan your stag &rarr;</a>
            </div>
          </section>
          {related.length > 0 && (
            <section className="related">
              <h2>Similar stag destinations</h2>
              <div className="grid">
                {related.map(r => (
                  <a key={r.id} className="card" href={`/stag/${r.id}`}>
                    <h3>{r.label}</h3>
                    <div className="c">{r.country}</div>
                    <p>{clip(r.desc, 110)}</p>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Shell>
  );
}

function IndexPage() {
  const regions = ["uk-ireland", "europe", "longhaul"];
  return (
    <Shell active="/stag">
      <section className="hero">
        <div className="wrap">
          <div className="crumbs"><a href="/">Lapel</a><span>/</span><a href="/stag">Stag</a><span>/</span>Destinations</div>
          <h1>Stag do destinations</h1>
          <div className="rule" />
          <p className="lede">Honest guides to the places stag groups actually go, from how locals feel about you to which bars will let a big group in.</p>
        </div>
      </section>
      <main>
        <div className="wrap">
          {regions.map(r => {
            const list = PUBLISHED.filter(d => d.region === r);
            if (!list.length) return null;
            return (
              <section className="related" key={r} style={{ marginBottom: 48 }}>
                <h2>{REGION_LABEL[r]}</h2>
                <div className="grid">
                  {list.map(d => (
                    <a key={d.id} className="card" href={`/stag/${d.id}`}>
                      <h3>{d.label}</h3>
                      <div className="c">{d.country}</div>
                      <p>{clip(d.desc, 110)}</p>
                    </a>
                  ))}
                </div>
              </section>
            );
          })}
          <section className="cta">
            <div>
              <h3>Not sure where to go?</h3>
              <p>Answer a few questions about the group and the groom, and Lapel will narrow nearly 200 destinations down to the ones that fit.</p>
            </div>
            <div className="btns"><a className="btn dark" href="/stag">Plan your stag &rarr;</a></div>
          </section>
        </div>
      </main>
    </Shell>
  );
}

export function renderPages(): StaticPage[] {
  const pages: StaticPage[] = PUBLISHED.map(d => {
    const g = STAG_GUIDES[d.id];
    const path = `/stag/${d.id}`;
    const photo = DESTINATION_PHOTOS[d.id];
    return {
      path,
      html: doc({
        path,
        title: `${d.label} Stag Do Guide: Bars, Activities & Local Tips | Lapel`,
        desc: clip(`Planning a ${d.label} stag do? ${g.intro[0]}`, 155),
        image: photo?.imageUrl,
        jsonld: [breadcrumbLd([{ name: "Lapel", path: "/" }, { name: "Stag", path: "/stag" }, { name: "Destinations", path: "/stag/destinations" }, { name: d.label, path }])],
        body: renderToStaticMarkup(<DestinationPage d={d} g={g} />),
      }),
    };
  });
  if (PUBLISHED.length) {
    pages.push({
      path: "/stag/destinations",
      html: doc({
        path: "/stag/destinations",
        title: "Stag Do Destinations: Honest UK & European Guides | Lapel",
        desc: "Honest stag do guides: how locals feel about stag groups, which bars let big groups in, what to do, where to stay and what it costs.",
        jsonld: [breadcrumbLd([{ name: "Lapel", path: "/" }, { name: "Stag", path: "/stag" }, { name: "Destinations", path: "/stag/destinations" }])],
        body: renderToStaticMarkup(<IndexPage />),
      }),
    });
  }
  return pages;
}
