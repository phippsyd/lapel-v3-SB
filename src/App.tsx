import { useState, useEffect, lazy, Suspense } from "react";
import { T } from "./theme";
import type { Profile } from "./shared";
import { usePersistentState } from "./persistence";
import { decodeHandover, type HandoverPayload } from "./handover-codec";

// Route-level code splitting: each module loads only when visited, keeping
// the initial bundle small (page speed is a ranking factor).
const AttireModule = lazy(() => import("./modules/Attire").then(m => ({ default: m.AttireModule })));
const RingsModule = lazy(() => import("./modules/Rings").then(m => ({ default: m.RingsModule })));
const DressCodesModule = lazy(() => import("./modules/DressCodes").then(m => ({ default: m.DressCodesModule })));
const StagModule = lazy(() => import("./modules/Stag").then(m => ({ default: m.StagModule })));
const SpeechModule = lazy(() => import("./modules/Speech").then(m => ({ default: m.SpeechModule })));
const FAQModule = lazy(() => import("./modules/FAQ").then(m => ({ default: m.FAQModule })));
const ProfileModule = lazy(() => import("./modules/Profile").then(m => ({ default: m.ProfileModule })));
const ImageAuditModule = lazy(() => import("./modules/ImageAudit").then(m => ({ default: m.ImageAuditModule })));
const HandoverView = lazy(() => import("./modules/Handover").then(m => ({ default: m.HandoverView })));

// Homepage hero photo (licensed Unsplash, credit required) — inlined rather
// than imported from Stag so the Stag chunk stays out of the initial load.
const HERO_STAG_PHOTO = {
  imageUrl: "https://images.unsplash.com/photo-1553355202-f869c36581ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900",
  photographer: "Philipp Trubchenko",
  photographerUrl: "https://unsplash.com/@seresigo",
};

const MODULES = [
  {
    id: "attire",
    label: "Attire",
    desc: "The suit decisions you didn't know you'd have to make — lapel to cuffs — before your first fitting.",
    tag: "Guide",
    time: "Browse",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <path d="M11 7 Q8 9 6 13 L5 28 L27 28 L26 13 Q24 9 21 7" stroke={T.navy} strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M11 7 L9 12 L12 15 L16 13 L20 15 L23 12 L21 7" stroke={T.navy} strokeWidth="1.8" strokeLinejoin="round" fill={T.navyLight} />
        <ellipse cx="16" cy="5" rx="4" ry="4" stroke={T.navy} strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: "rings",
    label: "Rings",
    desc: "Every option, from platinum to rubber to a ring tattoo. The complete picture.",
    tag: "Guide",
    time: "5 min",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <ellipse cx="16" cy="18" rx="11" ry="4" stroke={T.navy} strokeWidth="1.8" fill="none" />
        <ellipse cx="16" cy="14" rx="11" ry="4" stroke={T.navy} strokeWidth="1.8" fill={T.navyLight} />
        <line x1="5" y1="14" x2="5" y2="18" stroke={T.navy} strokeWidth="1.8" />
        <line x1="27" y1="14" x2="27" y2="18" stroke={T.navy} strokeWidth="1.8" />
        <path d="M9 11 Q16 8 23 11" stroke={T.navy} strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "dresscodes",
    label: "Dress Codes",
    desc: "Every dress code explained. What to wear, what to avoid, and why.",
    tag: "Reference",
    time: "Browse",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <rect x="7" y="6" width="18" height="22" rx="2" stroke={T.green} strokeWidth="1.8" fill="#D6D2CC" />
        <path d="M11 11 L21 11 M11 15 L21 15 M11 19 L17 19" stroke={T.green} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13 6 Q16 4 19 6" stroke={T.green} strokeWidth="1.4" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "stag",
    label: "Stag",
    desc: "Every type of stag, nearly 200 destinations worldwide. Filtered to your group.",
    tag: "Guide",
    time: "5 min",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <circle cx="16" cy="16" r="10" stroke={T.navy} strokeWidth="1.8" fill="none" />
        <path d="M16 8 L16 6 M11 10 L9 8 M21 10 L23 8" stroke={T.navy} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" stroke={T.navy} strokeWidth="1.5" fill={T.navyLight} />
        <path d="M16 13 L16 8" stroke={T.navy} strokeWidth="1.2" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "speech",
    label: "Speech",
    desc: "How to write one, or write yours now.",
    tag: "Builder",
    time: "Your pace",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <rect x="5" y="6" width="22" height="16" rx="2" stroke={T.amber} strokeWidth="1.8" fill={T.amberLight} />
        <path d="M9 12 L23 12 M9 16 L18 16" stroke={T.amber} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 22 L16 26 L22 22" stroke={T.amber} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "faq",
    label: "FAQ",
    desc: "Every question you were too embarrassed to ask. UK-specific.",
    tag: "Reference",
    time: "Browse",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <circle cx="16" cy="16" r="11" stroke={T.green} strokeWidth="1.8" fill="#D6D2CC" />
        <path d="M13 13 C13 10 19 10 19 13 C19 15 16 15.5 16 18" stroke={T.green} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="21" r="1.2" fill={T.green} />
      </svg>
    ),
  },
] as const;

type ModuleId = (typeof MODULES)[number]["id"] | "profile" | "imageaudit";

// ── ROUTING + SEO ─────────────────────────────────────────────────────────
// Each module is a real URL so Google can index every guide separately.
// PATHS/SEO here must stay in sync with scripts/postbuild-seo.mjs, which
// bakes the same titles into per-route static HTML at build time.
const PATHS: Record<ModuleId, string> = {
  attire: "/attire", rings: "/rings", dresscodes: "/dress-codes", stag: "/stag",
  speech: "/speech", faq: "/faq", profile: "/profile", imageaudit: "/image-audit",
};
const ROUTES: Record<string, ModuleId> = Object.fromEntries(
  Object.entries(PATHS).map(([id, p]) => [p, id as ModuleId])
);
const SEO: Record<"home" | ModuleId, { title: string; desc: string }> = {
  home: { title: "Lapel — The Groom's Complete Wedding Guide", desc: "Every decision a groom actually has to make — attire, rings, stag, speech and dress codes. Comprehensive, UK-specific, free." },
  attire: { title: "Wedding Suit Guide for Grooms — Every Decision Explained | Lapel", desc: "Lapels, cuffs, colours, hire vs buy — every suit decision a groom faces, explained before the fitting. Build your fitting sheet." },
  rings: { title: "Men's Wedding Rings — Every Option Compared | Lapel", desc: "Platinum to tungsten to silicone to a ring tattoo — every men's wedding ring option compared, with where to buy in the UK." },
  dresscodes: { title: "UK Wedding Dress Codes Explained — Black Tie to Smart Casual | Lapel", desc: "Every UK wedding dress code decoded — white tie, black tie, morning dress, lounge suit and more, with honest guidance on what to wear." },
  stag: { title: "Stag Do Ideas — Nearly 200 Destinations Compared | Lapel", desc: "Plan the stag properly: every type of stag do and nearly 200 destinations, filtered by group, budget and vibe, with booking links." },
  speech: { title: "The Groom's Speech — How to Write and Deliver It | Lapel", desc: "How to write a groom's speech that lands: structure, thank-yous, jokes that work, and a builder to write yours now." },
  faq: { title: "Groom Questions, Answered Honestly | Lapel", desc: "Which buttons to fasten, how much cuff to show, when to take the jacket off — every question grooms are too embarrassed to ask." },
  profile: { title: "My Profile | Lapel", desc: "Your wedding details and saved guides on Lapel." },
  imageaudit: { title: "Image Audit | Lapel", desc: "Internal image audit." },
};
const pathToModule = (pathname: string): ModuleId | null => {
  const clean = ("/" + pathname.replace(/^\/+|\/+$/g, "")).toLowerCase();
  return clean === "/" ? null : ROUTES[clean] ?? null;
};

export default function Lapel() {
  const [profile, setProfile] = usePersistentState<Profile>("profile", { groomName: "", partnerName: "", weddingDate: "", venue: "" });
  const [active, setActiveState] = useState<ModuleId | null>(() => pathToModule(window.location.pathname));
  const [handover, setHandover] = useState<HandoverPayload | null>(() => {
    const h = window.location.hash;
    if (h.startsWith("#handover=")) return decodeHandover(h.slice("#handover=".length));
    return null;
  });

  // Navigation updates the URL so every guide is a real, shareable address.
  const navigate = (id: ModuleId | null) => {
    setActiveState(id);
    const path = id ? PATHS[id] : "/";
    if (window.location.pathname !== path) window.history.pushState(null, "", path);
    window.scrollTo(0, 0);
  };
  const setActive = navigate;

  // Browser back/forward buttons drive the app state.
  useEffect(() => {
    const onPop = () => setActiveState(pathToModule(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Per-route title + meta description (mirrors the static HTML the
  // postbuild script generates, keeping tab titles right during SPA nav).
  useEffect(() => {
    const meta = SEO[active ?? "home"];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.desc);
  }, [active]);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const displayProfile = profile;
  const weddingDate = displayProfile.weddingDate ? new Date(displayProfile.weddingDate) : null;
  const daysLeft = weddingDate ? Math.ceil((weddingDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : null;

  const renderModule = () => {
    switch (active) {
      case "attire": return <AttireModule />;
      case "rings": return <RingsModule />;
      case "dresscodes": return <DressCodesModule />;
      case "stag": return <StagModule groomName={displayProfile.groomName || undefined} />;
      case "speech": return <SpeechModule />;
      case "faq": return <FAQModule />;
      case "imageaudit": return <ImageAuditModule />;
      case "profile": return <ProfileModule profile={displayProfile} onSave={(p) => setProfile(p)} />;
      default: return null;
    }
  };

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif", background: T.paper, minHeight: "100vh", color: T.ink }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::placeholder { color: #B5B1AC; }
        textarea:focus, input:focus { border-color: #616E64 !important; outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #B5B1AC; border-radius: 2px; }
        .module-card { transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .module-card:hover { border-color: ${T.navy} !important; box-shadow: 0 4px 16px rgba(85,83,65,0.10) !important; transform: translateY(-2px); }
        .module-card:hover .start-lbl { color: ${T.navy} !important; }
        .nav-btn { transition: color 0.15s; }
        .nav-btn:hover { color: rgba(255,255,255,0.8) !important; }
        .back-btn:hover { color: ${T.ink} !important; }
        button { transition: filter 0.15s ease; }
        button:hover { filter: brightness(0.88); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .module-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-title { font-size: 38px !important; }
          .content-pad { padding: 20px 20px 48px !important; }
          .header-pad { padding: 0 20px !important; }
          .option-illus { display: none !important; }
          .intro-illus { display: none !important; }
          .hero-meta { display: none !important; }
        }
        @media (max-width: 480px) {
          .module-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 30px !important; }
        }
      `}</style>

      {/* Header */}
      <div style={{
        borderBottom: "none",
        background: T.navy,
        position: "sticky", top: 0, zIndex: 100,
        transition: "box-shadow 0.3s",
        boxShadow: (scrolled && active) ? "0 1px 12px rgba(0,0,0,0.12)" : "none",
      }}>
        <div className="header-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <button onClick={() => { if (handover) { history.replaceState(null, "", window.location.pathname); setHandover(null); } setActive(null); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'DM Serif Display', serif", fontSize: 26, color: "white", letterSpacing: "-0.01em", flexShrink: 0 }}>
            Lapel
          </button>
          <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {MODULES.map(m => (
              <button key={m.id} onClick={() => { if (handover) { history.replaceState(null, "", window.location.pathname); setHandover(null); } setActive(m.id); }} className="nav-btn"
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: active === m.id ? "white" : "rgba(255,255,255,0.5)", borderBottom: active === m.id ? "1.5px solid white" : "1.5px solid transparent", paddingBottom: 2, fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
                {m.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0, marginLeft: 16 }}>
            {daysLeft !== null && daysLeft > 0 && (
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "white", lineHeight: 1 }}>{daysLeft.toLocaleString()}</div>
                <div style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>days</div>
              </div>
            )}
            <button onClick={() => { if (handover) { history.replaceState(null, "", window.location.pathname); setHandover(null); } setActive("profile"); }}
              style={{ background: active === "profile" ? "rgba(255,255,255,0.15)" : "none", border: "1px solid rgba(255,255,255,0.3)", color: active === "profile" ? "white" : "rgba(255,255,255,0.7)", padding: "6px 16px", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, fontFamily: "Inter, sans-serif", whiteSpace: "nowrap", transition: "all 0.15s" }}>
              {displayProfile.groomName ? displayProfile.groomName : "My profile"}
            </button>
          </div>
        </div>
      </div>

      {handover ? (
        <Suspense fallback={<div style={{ padding: "64px 24px", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid }}>Loading&hellip;</div>}><HandoverView
          payload={handover}
          onExplore={() => {
            history.replaceState(null, "", window.location.pathname);
            setHandover(null);
            setActive("stag");
            window.scrollTo(0, 0);
          }}
        /></Suspense>
      ) : !active ? (
        <div>
          {/* Hero */}
          <div style={{ background: T.navy, padding: "28px 32px 56px" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", width: "100%" }}>
              <div className="intro-spread">
                <div style={{ maxWidth: 560 }}>
                  <h1 className="hero-title" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 54, color: "white", lineHeight: 1.06, marginBottom: 18, letterSpacing: "-0.02em", textAlign: "left" }}>
                    {displayProfile.groomName
                      ? <>Every decision you actually<br />have to make, {displayProfile.groomName}.</>
                      : <>Every decision a groom<br />actually has to make.</>
                    }
                  </h1>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.12)", marginBottom: 18 }} />
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 520, margin: 0, textAlign: "left" }}>
                    Attire, rings, stag, speech — covered properly. No fluff.
                    {daysLeft !== null && daysLeft > 0 && (
                      <> {displayProfile.venue ? displayProfile.venue : "The big day"} is in <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{daysLeft.toLocaleString()} days</strong>.</>
                    )}
                  </p>
                </div>
                <div className="intro-plates" style={{ position: "relative", height: 340, minWidth: 0 }}>
                  {[
                    { img: "https://images.unsplash.com/photo-1506072590044-75de1b7b7806?q=80&w=900&auto=format&fit=crop", caption: "The attire", credit: { name: "Soroush Karimi", url: "https://unsplash.com/@soroushkarimi" } },
                    { img: HERO_STAG_PHOTO.imageUrl, caption: "The stag", credit: { name: HERO_STAG_PHOTO.photographer, url: HERO_STAG_PHOTO.photographerUrl } },
                  ].filter(p => p.img).map((p, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      ...(i === 0
                        ? { top: 0, right: 12, width: "54%", transform: "rotate(1.5deg)", zIndex: 1 }
                        : { bottom: 0, left: 6, width: "46%", transform: "rotate(-2deg)", zIndex: 2 }),
                      background: "#FFFFFF", border: "1px solid rgba(255,255,255,0.25)", padding: "10px 10px 8px",
                      boxShadow: "0 10px 32px rgba(0,0,0,0.28)",
                    }}>
                      <div style={{ width: "100%", aspectRatio: "4 / 5", overflow: "hidden", background: "#EDEAE6", position: "relative" }}>
                        <img src={p.img} alt={p.caption} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        {p.credit && p.credit.name && (
                          <a href={p.credit.url} target="_blank" rel="noopener noreferrer"
                            style={{ position: "absolute", bottom: 5, left: 7, fontSize: 9, color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.6)", textDecoration: "none", fontFamily: "Inter, sans-serif" }}>
                            Photo: {p.credit.name}
                          </a>
                        )}
                      </div>
                      <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6B6863", textAlign: "center", marginTop: 8 }}>
                        {p.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Module grid and footer on paper background */}
          <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 32px 64px" }}>
            <div className="module-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {MODULES.map(m => (
                <div key={m.id} onClick={() => setActive(m.id)} className="module-card"
                  style={{ background: T.white, border: "1px solid " + T.rule, borderRadius: 6, padding: "28px 28px 24px", cursor: "pointer", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 4, background: T.paper, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {m.icon}
                    </div>
                    <div style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                      color: m.tag === "Builder" ? T.amber : m.tag === "Reference" ? T.green : T.navy,
                      background: m.tag === "Builder" ? T.amberLight : m.tag === "Reference" ? T.navyLight : T.navyLight,
                      padding: "3px 10px", borderRadius: 2,
                    }}>{m.tag}</div>
                  </div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.ink, marginBottom: 8 }}>{m.label}</div>
                  <div style={{ fontSize: 13, color: T.mid, lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{m.desc}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid " + T.rule, paddingTop: 16 }}>
                    <div className="start-lbl" style={{ fontSize: 12, fontWeight: 700, color: T.ink, letterSpacing: "0.1em", textTransform: "uppercase" }}>Start &rarr;</div>
                    <div style={{ fontSize: 11, color: T.mid }}>{m.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid " + T.rule, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <div style={{ fontSize: 12, color: T.mid, lineHeight: 1.6 }}>
                Lapel is an independent guide for UK grooms. No fluff. No ads. Real information.
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                {!displayProfile.groomName && (
                  <button onClick={() => setActive("profile")}
                    style={{ background: T.dark, color: "white", border: "none", padding: "10px 24px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, transition: "opacity 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    Set up your profile &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "26px 48px 64px" }}>
          <button onClick={() => setActive(null)} className="back-btn"
            style={{ background: "none", border: "none", fontSize: 11, fontWeight: 600, color: T.navy, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", marginBottom: 22, display: "flex", alignItems: "center", gap: 6, fontFamily: "Inter, sans-serif" }}>
            <span style={{ fontSize: 14 }}>&larr;</span> Back to guides
          </button>
          <Suspense fallback={<div style={{ padding: "64px 0", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid }}>Loading&hellip;</div>}>{renderModule()}</Suspense>
        </div>
      )}
    </div>
  );
}
