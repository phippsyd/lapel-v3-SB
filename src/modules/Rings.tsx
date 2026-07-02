import { useState } from "react";
import { T } from "../theme";
import { IntroScreen, Journey, type Answers, type Question } from "../shared";

const questions: Question[] = [
  { key: "match", question: "Do you want to match her ring?", sub: "Most couples do not realise this is even a decision until they are ring shopping.", education: "Her engagement ring is likely platinum or white gold. Yellow gold beside platinum will contrast — some couples love this, others prefer to coordinate. Decide before you start looking at metals.",
    options: [
      { id: "match", label: "Match her metal", desc: "Coordinated and intentional. Looks deliberate in photographs." },
      { id: "contrast", label: "Contrast is fine", desc: "I will choose what suits me. Contrasting metals are increasingly common." },
      { id: "unsure", label: "Not sure yet", desc: "I will explore all options and decide after seeing what is available." },
    ],
    groomsSay: [
      { quote: "Her ring is platinum, I went platinum too. Glad we matched — I notice it every day.", author: "u/ringmatch" },
      { quote: "She has white gold, I went yellow gold. Looks intentional, like we each chose what suited us.", author: "u/contrast" },
    ],
  },
  { key: "material", question: "Which material?", sub: "Every option is valid. Here is the honest breakdown of all of them.", education: "There is no correct answer here — the right material is the one that suits your lifestyle, budget, and aesthetic. Do not let anyone tell you one option is more legitimate than another.",
    options: [
      { id: "platinum", label: "Platinum", price: "£600-£1,800", tag: "Most prestigious", pros: ["Naturally white, never needs replating", "Most durable precious metal", "Hypoallergenic"], cons: ["Most expensive", "Heavier than gold"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at Beaverbrooks", url: "https://www.beaverbrooks.co.uk/wedding-rings/mens" } },
      { id: "white-gold-18", label: "18ct White Gold", price: "£350-£900", tag: "Best value", pros: ["Looks like platinum", "Lighter and more affordable"], cons: ["Needs rhodium replating every 2-5 years (~£40-80)"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at Steven Stone", url: "https://www.stevenstone.co.uk/mens-wedding-rings" } },
      { id: "yellow-gold-18", label: "18ct Yellow Gold", price: "£300-£800", pros: ["Classic and timeless", "Low maintenance", "Never needs replating"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at F.Hinds", url: "https://www.fhinds.co.uk/wedding-rings/mens" } },
      { id: "yellow-gold-9", label: "9ct Yellow Gold", price: "£100-£300", tag: "Budget option", pros: ["Most affordable gold option", "Still a genuine gold ring"], cons: ["Less pure than 18ct (37.5% vs 75% gold)", "Less prestigious"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at H.Samuel", url: "https://www.hsamuel.co.uk/wedding-rings/mens" } },
      { id: "rose-gold", label: "Rose Gold", price: "£280-£750", pros: ["Warm, distinctive colour", "Increasingly popular", "Works well with copper or brown tones"], cons: ["Not everyone's taste", "Can look more feminine to some"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at Ernest Jones", url: "https://www.ernestjones.co.uk/wedding-rings/mens" } },
      { id: "silver", label: "Sterling Silver", price: "£30-£150", pros: ["Very affordable", "Clean bright look", "Works well with matte or hammered finishes"], cons: ["Tarnishes over time — needs occasional polishing", "Softer than gold, scratches more easily"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+silver+wedding+ring" } },
      { id: "palladium", label: "Palladium", price: "£300-£700", pros: ["Naturally white like platinum", "Lighter than platinum", "Does not need replating"], cons: ["Less well known — harder to find in shops"], img: "/images/RINGS/ring-polished.png", aff: { label: "Browse at Beaverbrooks", url: "https://www.beaverbrooks.co.uk/wedding-rings/mens" } },
      { id: "titanium", label: "Titanium", price: "£60-£250", pros: ["Extremely lightweight", "Very hard-wearing", "Hypoallergenic"], cons: ["Cannot be resized", "Harder to engrave"], img: "/images/RINGS/ring-matte-brushed.png", aff: { label: "Browse on Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+titanium+wedding+ring" } },
      { id: "tungsten", label: "Tungsten", price: "£50-£200", tag: "Most hard-wearing", pros: ["Incredibly scratch resistant", "Very affordable", "Modern, heavy feel"], cons: ["Cannot be resized", "Cannot be cut off in medical emergency — important if you work with hands or machinery"], img: "/images/RINGS/ring-matte-brushed.png", aff: { label: "Browse on Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+tungsten+wedding+ring" } },
      { id: "carbon-fibre", label: "Carbon Fibre", price: "£80-£300", pros: ["Extremely lightweight", "Distinctive technical look", "Very strong"], cons: ["Not traditional", "Limited jeweller support if damaged"], img: "/images/RINGS/ring-matte-brushed.png", aff: { label: "Browse on Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+carbon+fibre+ring" } },
      { id: "silicone", label: "Silicone / Rubber", price: "£10-£50", tag: "For active lifestyles", pros: ["Safe for manual work, sport, and medical environments", "Will not catch on machinery", "Can be worn in any situation"], cons: ["Not a traditional wedding ring — many grooms buy as a secondary 'work ring' and wear gold at home"], img: "/images/RINGS/ring-silicone.png", aff: { label: "Browse Groove Life on Amazon UK", url: "https://www.amazon.co.uk/s?k=silicone+wedding+ring+mens" } },
      { id: "wood", label: "Wood inlay", price: "£80-£300", pros: ["Truly unique", "Natural and warm look", "Each one is different"], cons: ["Less durable than metal", "Cannot get very wet repeatedly"], img: "/images/RINGS/ring-wood-inlay.png", aff: { label: "Browse on Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+wood+wedding+ring" } },
      { id: "meteorite", label: "Meteorite inlay", price: "£200-£600", pros: ["Genuinely unique — each ring is formed from actual meteorite", "Striking Widmanstatten pattern"], cons: ["Expensive for an inlay", "Requires care to prevent rusting"], img: "/images/RINGS/ring-meteorite-inlay.png", aff: { label: "Browse on Etsy UK", url: "https://www.etsy.com/uk/search?q=mens+meteorite+wedding+ring" } },
      { id: "tattoo", label: "Ring tattoo", price: "£40-£150", pros: ["Permanent — impossible to lose", "Zero ongoing cost", "Completely personal design"], cons: ["Permanent — research your artist carefully", "Not universally accepted as a substitute for a ring", "Can fade and blur over time"], img: "/images/RINGS/ring-tattoo.png", aff: { label: "Find tattoo artists on Tattoodo", url: "https://www.tattoodo.com/find?type=tattoo&q=ring+tattoo" } },
      { id: "none", label: "No ring", price: "£0", pros: ["Completely valid choice", "Some professions, sports, or preferences make ring-wearing impractical or unwanted"], cons: ["Worth discussing with your partner in advance — some partners feel strongly about this"] },
    ],
    groomsSay: [
      { quote: "Went platinum. I will wear it every day for the rest of my life — £800 felt fine.", author: "u/platgroom" },
      { quote: "Tungsten at £80. I am a carpenter, it takes a beating. Looks great.", author: "u/practicalgroom" },
      { quote: "Ring tattoo. Could not wear metal at work anyway. Looks incredible and I will never lose it.", author: "u/ringtattoo" },
      { quote: "Silicone for work, proper gold ring at home and for going out. Best of both worlds.", author: "u/dualring" },
      { quote: "Silver with a hammered finish. Less than £100 on Etsy, more comments than anyone else's ring at the wedding.", author: "u/silverring" },
    ],
  },
  { key: "width", question: "How wide?", sub: "Width changes the look completely. Most men have no idea until they try some on.", education: "As a rough guide: slim hands suit 2-4mm, average hands suit 4-6mm, larger hands suit 6-8mm. Narrower looks modern. Wider looks more traditional and bold. Try a few on before deciding.",
    options: [
      { id: "2mm", label: "2mm", tag: "Slim", desc: "Almost invisible on the finger. Very clean and minimal." },
      { id: "4mm", label: "4mm", tag: "Most popular", desc: "The sweet spot. Noticeable without being heavy." },
      { id: "6mm", label: "6mm", desc: "A proper statement. Works well with yellow gold and traditional styles." },
      { id: "8mm", label: "8mm", desc: "Bold and traditional. Works with larger hands." },
    ],
    groomsSay: [
      { quote: "Tried on 2mm first, looked like nothing was there. 4mm was the right call.", author: "u/widthmatters" },
      { quote: "Went 6mm yellow gold. Looks exactly like what a wedding ring should look like.", author: "u/classicwidth" },
    ],
  },
  { key: "finish", question: "Which finish?", sub: "The surface treatment changes the whole character of the ring.", education: "Polished is shiny and shows scratches more over time. Matte has a soft satin sheen and hides everyday wear well. Hammered has a textured surface with real character — no two look alike.",
    options: [
      { id: "polished", label: "Polished", tag: "Classic", desc: "High shine and reflective. Timeless and clean.", img: "/images/RINGS/ring-polished.png" },
      { id: "matte", label: "Matte / Brushed", tag: "Modern", desc: "Soft satin sheen. Hides scratches well. Suits a contemporary aesthetic.", img: "/images/RINGS/ring-matte-brushed.png" },
      { id: "hammered", label: "Hammered", tag: "Distinctive", desc: "Textured surface with real character. No two look alike. Suits yellow gold especially well.", img: "/images/RINGS/ring-hammered.png" },
      { id: "court", label: "Court (rounded inside)", desc: "The inside of the ring is curved for comfort. You would not normally see this but you feel it all day. Most grooms prefer court over flat court." },
    ],
    groomsSay: [
      { quote: "Matte finish. After three years it still looks new because you cannot see the wear.", author: "u/mattegroom" },
      { quote: "Hammered yellow gold. People always comment on it. Glad I went for something different.", author: "u/hammeredfan" },
    ],
  },
  { key: "budget", question: "What is your budget?", sub: "Real UK prices with honest context.", education: "The average UK groom spends £300-£500 on a wedding band. You can get a genuinely beautiful ring for under £100 or spend £2,000+ on premium platinum. Independent jewellers often offer better quality and personalisation than chains at the same price point. Do not let anyone make you feel bad about any budget.",
    options: [
      { id: "under100", label: "Under £100", desc: "Silver, silicone, tungsten, titanium. Genuinely good rings in this range.", aff: { label: "Browse Etsy UK jewellers", url: "https://www.etsy.com/uk/search?q=mens+wedding+ring" } },
      { id: "100-300", label: "£100-£300", desc: "9ct gold, quality silver, good titanium and tungsten. Plenty of excellent options.", aff: { label: "Browse at H.Samuel", url: "https://www.hsamuel.co.uk/wedding-rings/mens" } },
      { id: "300-600", label: "£300-£600", tag: "Most grooms", desc: "18ct gold, palladium. Good independent jewellers and chains.", aff: { label: "Browse at F.Hinds", url: "https://www.fhinds.co.uk/wedding-rings/mens" } },
      { id: "600-1200", label: "£600-£1,200", desc: "Platinum or premium 18ct gold. Good independent jewellers.", aff: { label: "Browse at Steven Stone", url: "https://www.stevenstone.co.uk/mens-wedding-rings" } },
      { id: "1200plus", label: "£1,200+", desc: "Premium platinum, bespoke, or made-to-order. Visit an independent jeweller.", aff: { label: "Browse at Beaverbrooks", url: "https://www.beaverbrooks.co.uk/mens/wedding-rings" } },
    ],
    groomsSay: [
      { quote: "Went to an independent jeweller in Manchester. £380 for a beautiful band, better than anything in the chains.", author: "u/indiejeweller" },
      { quote: "Spent £150 on Etsy. Local maker, beautiful ring, and I knew the story behind it.", author: "u/etsyring" },
    ],
  },
  { key: "engraving", question: "Will you engrave it?", sub: "The inside of the ring — seen only by you.", education: "Most rings allow up to 20-25 characters inside. Common choices: the wedding date, initials, coordinates of where you met, a short phrase. Some grooms regret not doing it. Very few regret doing it. Costs nothing extra at most jewellers.",
    options: [
      { id: "date", label: "Yes — the wedding date", tag: "Most popular", desc: "Clean, simple, and always meaningful. Format like 19.06.27." },
      { id: "initials", label: "Yes — initials", desc: "Her initials, yours, or both. Classic and elegant." },
      { id: "phrase", label: "Yes — a short phrase", desc: "Something meaningful to you both. Keep it short — character limits are real." },
      { id: "coordinates", label: "Yes — coordinates", desc: "Where you met, got engaged, or will marry. A detail only you two understand." },
      { id: "none", label: "No engraving", desc: "Clean inside. Some grooms prefer the simplicity." },
    ],
    groomsSay: [
      { quote: "Engraved the date. Look at it every day. Costs nothing extra at most jewellers.", author: "u/engravedring" },
      { quote: "Put her initials inside. She cried when she found out. I recommend it.", author: "u/initialgroom" },
      { quote: "Coordinates of where we got engaged. Nobody else would ever know what they mean.", author: "u/coordinatesring" },
    ],
  },
];

const MAT_LINKS: Record<string, { label: string; url: string }[]> = {
  platinum: [{ label: "Beaverbrooks", url: "https://www.beaverbrooks.co.uk/wedding-rings/mens" }, { label: "Ernest Jones", url: "https://www.ernestjones.co.uk/wedding-rings/mens" }],
  "white-gold-18": [{ label: "Steven Stone", url: "https://www.stevenstone.co.uk/mens-wedding-rings" }, { label: "Beaverbrooks", url: "https://www.beaverbrooks.co.uk/mens/wedding-rings" }],
  "yellow-gold-18": [{ label: "F.Hinds", url: "https://www.fhinds.co.uk/wedding-rings/mens" }, { label: "Beaverbrooks", url: "https://www.beaverbrooks.co.uk/mens/wedding-rings" }],
  "yellow-gold-9": [{ label: "H.Samuel", url: "https://www.hsamuel.co.uk/wedding-rings/mens" }, { label: "F.Hinds", url: "https://www.fhinds.co.uk/wedding-rings/mens" }],
  "rose-gold": [{ label: "Ernest Jones", url: "https://www.ernestjones.co.uk/wedding/rings/mens-wedding-rings/c/6611000000" }, { label: "Beaverbrooks", url: "https://www.beaverbrooks.co.uk/mens/wedding-rings" }],
  silver: [{ label: "Etsy UK (search: mens silver wedding ring)", url: "https://www.etsy.com/uk/search?q=mens+silver+wedding+ring" }, { label: "H.Samuel", url: "https://www.hsamuel.co.uk/wedding-rings/mens" }],
  palladium: [{ label: "Beaverbrooks", url: "https://www.beaverbrooks.co.uk/mens/wedding-rings" }, { label: "F.Hinds", url: "https://www.fhinds.co.uk/wedding-rings/mens" }],
  titanium: [{ label: "Etsy UK (search: mens titanium ring)", url: "https://www.etsy.com/uk/search?q=mens+titanium+wedding+ring" }],
  tungsten: [{ label: "Etsy UK (search: mens tungsten ring)", url: "https://www.etsy.com/uk/search?q=mens+tungsten+wedding+ring" }],
  "carbon-fibre": [{ label: "Etsy UK (search: carbon fibre ring)", url: "https://www.etsy.com/uk/search?q=mens+carbon+fibre+ring" }],
  silicone: [{ label: "Amazon UK (search: Groove Life ring)", url: "https://www.amazon.co.uk/s?k=silicone+wedding+ring+mens" }],
  wood: [{ label: "Etsy UK (search: wood wedding ring mens)", url: "https://www.etsy.com/uk/search?q=mens+wood+wedding+ring" }],
  meteorite: [{ label: "Etsy UK (search: meteorite ring mens)", url: "https://www.etsy.com/uk/search?q=mens+meteorite+wedding+ring" }],
  tattoo: [{ label: "Find artists on Tattoodo", url: "https://www.tattoodo.com/find?type=tattoo&q=ring+tattoo" }, { label: "Search Instagram: ring tattoo UK", url: "https://www.instagram.com/explore/search/keyword/?q=ring+tattoo+uk" }],
};

export const ringsAuditGroups = questions.map(q => ({ section: "Rings — " + q.question, options: q.options }));

export function RingsModule() {
  const [phase, setPhase] = useState<"intro" | "journey" | "result">("intro");
  const [answers, setAnswers] = useState<Answers>({});

  if (phase === "intro") return (
    <IntroScreen eyebrow="Rings · Decision guide" title="Every ring option. No external searching required."
      description="From platinum to rubber to a ring tattoo — this guide covers every single option available to a groom in the UK. Make your decision with the complete picture, not a curated shortlist. About 5 minutes."
      steps={["Match or contrast", "Material", "Width", "Finish", "Budget", "Engraving"]}
      quote="I went into three jewellers and none of them mentioned silicone, titanium, or tungsten. I only found out about them online. This is what I wish I had read first."
      quoteAuthor="u/ringnewbie"
      illustration={undefined}
      onStart={() => setPhase("journey")} />
  );

  if (phase === "journey") return <Journey questions={questions} onComplete={(a) => { setAnswers(a); setPhase("result"); }} />;

  const links = MAT_LINKS[answers.material] || [];
  return (
    <div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink, marginBottom: 6 }}>Your ring.</div>
      <div style={{ fontSize: 14, color: T.mid, marginBottom: 24 }}>Based on your choices, here is exactly where to find it.</div>
      <div style={{ background: T.white, border: "1px solid " + T.rule, borderRadius: 4, overflow: "hidden", marginBottom: 32 }}>
        {Object.entries(answers).map(([k, v], i, arr) => (
          <div key={k} style={{ display: "flex", gap: 20, padding: "14px 24px", borderBottom: i < arr.length - 1 ? "1px solid " + T.rule : "none" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid, minWidth: 120 }}>{k}</div>
            <div style={{ fontSize: 14, color: T.ink, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>
      {links.length > 0 && (
        <>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: T.ink, marginBottom: 20 }}>Where to find this ring</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
            {links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: T.white, border: "1px solid " + T.rule, borderRadius: 4, padding: "18px 24px", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = T.navy}
                onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: T.ink }}>{link.label}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.navy }}>Visit &rarr;</div>
              </a>
            ))}
          </div>
        </>
      )}
      <button onClick={() => { setPhase("intro"); setAnswers({}); }} style={{ background: "none", border: "1px solid " + T.rule, color: T.mid, padding: "12px 20px", fontSize: 12, fontWeight: 600, cursor: "pointer", borderRadius: 2 }}>Start over</button>
    </div>
  );
}
