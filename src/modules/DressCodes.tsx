import { useState } from "react";
import { T } from "../theme";
import { Tag, AffLink, GoodToKnow } from "../shared";

type DressCode = {
  id: string;
  label: string;
  formalityTag: string;
  summary: string;
  occasion: string;
  whatToWear: string[];
  whatNotToWear: string[];
  goodToKnow: string;
  links: { label: string; url: string }[];
  imageUrl?: string;
  photoCredit?: { name: string; url: string };
};

const DRESS_CODE_PHOTOS: Record<string, { imageUrl: string; photographer: string; photographerUrl: string }> = {
  "white-tie": { imageUrl: "https://images.unsplash.com/photo-1518049737507-55dc3314b311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Marcus Lewis", photographerUrl: "https://unsplash.com/@marcusvlewis" },
  "black-tie": { imageUrl: "https://images.unsplash.com/photo-1694394181749-50dcca5463d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Jennifer Kalenberg", photographerUrl: "https://unsplash.com/@jkalen71" },
  "black-tie-optional": { imageUrl: "https://images.unsplash.com/photo-1612325430161-94c758c7f330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "zero take", photographerUrl: "https://unsplash.com/@zerotake" },
  "formal": { imageUrl: "https://images.unsplash.com/photo-1529635229076-82fefed713c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Samantha Gades", photographerUrl: "https://unsplash.com/@srosinger3997" },
  "morning-dress": { imageUrl: "https://images.unsplash.com/photo-1664646327030-339b85a9bd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Christophe Dusabe", photographerUrl: "https://unsplash.com/@bronzeshooter" },
  "lounge-suit": { imageUrl: "https://images.unsplash.com/flagged/photo-1571582159131-b6fcd22646c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Miguel Teirlinck", photographerUrl: "https://unsplash.com/@miguelteirlinck" },
  "cocktail-attire": { imageUrl: "https://images.unsplash.com/photo-1489370603040-dc6c28a1d37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Alvin Mahmudov", photographerUrl: "https://unsplash.com/@alvinmahmudov" },
  "smart-casual": { imageUrl: "https://images.unsplash.com/photo-1517938889432-a2ac9241a486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "bruce mars", photographerUrl: "https://unsplash.com/@brucemars" },
  "garden-party": { imageUrl: "https://images.unsplash.com/photo-1688573156632-4fe3c42e73c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Elijah Crouch", photographerUrl: "https://unsplash.com/@elijahbcrouch" },
  "festive-winter": { imageUrl: "https://images.unsplash.com/photo-1523844051804-16488e54e099?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Heather Miller", photographerUrl: "https://unsplash.com/@heathamilla" },
  "beach-destination": { imageUrl: "https://images.unsplash.com/photo-1725044542600-c6f40914519a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", photographer: "Javier González Fotógrafo", photographerUrl: "https://unsplash.com/@livingcolortj" },
  "highland": { imageUrl: "https://images.unsplash.com/photo-1533220223327-8a56200c18bd?q=80&w=1080&auto=format&fit=crop", photographer: "Jon Tyson", photographerUrl: "https://unsplash.com/@jontyson" },
};
const DRESS_CODE_FALLBACK_PHOTO = DRESS_CODE_PHOTOS["formal"];

const DRESS_CODES: DressCode[] = [
  {
    id: "white-tie",
    label: "White Tie",
    formalityTag: "Most formal",
    summary: "The most formal dress code in existence. Rarely seen but worth knowing.",
    occasion: "State banquets, very formal evening ceremonies, historic venues.",
    whatToWear: [
      "Black tailcoat with matching trousers with double silk braid down each seam",
      "White marcella waistcoat — five buttons, bottom button undone",
      "White wing collar dress shirt with marcella bib front",
      "White marcella bow tie — self-tie only, never pre-tied",
      "Black patent Oxford shoes",
      "White pocket square — flat fold only",
      "Cufflinks and shirt studs",
    ],
    whatNotToWear: [
      "A dinner jacket — that is black tie, not white tie",
      "A regular suit of any kind",
      "A black bow tie",
      "Anything pre-tied",
    ],
    goodToKnow: "White tie is almost never seen at UK weddings. If you receive an invitation specifying white tie, read it twice — it may say black tie and you misread it. If it does say white tie, hire rather than buy. Moss Bros and Lipman and Sons both stock white tie hire.",
    links: [
      { label: "White tie hire at Moss Bros", url: "https://www.mossbros.co.uk/suit-hire" },
      { label: "White tie hire at Lipman and Sons", url: "https://www.lipmanandsons.co.uk" },
    ],
  },
  {
    id: "black-tie",
    label: "Black Tie",
    formalityTag: "Formal",
    summary: "The most common formal evening dress code at UK weddings.",
    occasion: "Formal evening receptions, city hotels, stately homes, black tie venues.",
    whatToWear: [
      "Dinner jacket — black is the most common choice, midnight blue is increasingly popular and photographs better under artificial evening light — with matching trousers with a single silk braid down each seam",
      "White dress shirt with wing or turndown collar",
      "Black self-tie bow tie — never pre-tied, never clip-on",
      "Black cummerbund (pleats facing upward) or black or midnight blue waistcoat",
      "Black patent leather or highly polished Oxford shoes",
      "Double cuffs with cufflinks",
      "White or black pocket square",
    ],
    whatNotToWear: [
      "A lounge suit — this is underdressed for black tie",
      "A long tie unless making a very deliberate style choice",
      "Brown shoes",
      "A pre-tied or clip-on bow tie",
      "A cummerbund with pleats facing downward",
    ],
    goodToKnow: "Black is the standard and most common choice for a dinner jacket in the UK — you will never be wrong in black. Midnight blue is a more distinctive option popularised by the Duke of Windsor that reads as more sophisticated under artificial evening light. If you are hiring and the shop offers both, midnight blue is worth considering. If you are buying and plan to wear it again, midnight blue is the more interesting long-term investment. Either is entirely correct.",
    links: [
      { label: "Tuxedo hire at Moss Bros", url: "https://www.mossbros.co.uk/suit-hire" },
      { label: "Tuxedo hire at Rathbones", url: "https://rathbonestailor.com/collections/black-tie-tuxedo" },
      { label: "Tuxedo hire at Lipman and Sons", url: "https://www.lipmanandsons.co.uk" },
      { label: "Buy at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" },
    ],
  },
  {
    id: "black-tie-optional",
    label: "Black Tie Optional",
    formalityTag: "Formal",
    summary: "Black tie is welcome but a dark lounge suit is equally appropriate.",
    occasion: "Evening receptions where the couple want formality but do not want to exclude guests without black tie.",
    whatToWear: [
      "Either full black tie as described above, or",
      "A dark navy or charcoal lounge suit with a white dress shirt and a silk tie",
      "Black Oxford or Derby shoes",
    ],
    whatNotToWear: [
      "A light grey or casual suit",
      "Chinos or smart casual",
      "Brown shoes with a dark suit",
    ],
    goodToKnow: "If in doubt, go black tie. You can never be overdressed at a black tie optional event. You can absolutely be underdressed. If you own or can easily hire a dinner jacket, wear it.",
    links: [
      { label: "Dark suits at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" },
      { label: "Tuxedo hire at Moss Bros", url: "https://www.mossbros.co.uk/suit-hire" },
    ],
  },
  {
    id: "formal",
    label: "Formal",
    formalityTag: "Formal",
    summary: "A broad instruction that appears on some UK invitations. Usually means a dark suit as a minimum.",
    occasion: "City venues, formal evening receptions, some country house weddings where the couple want a consistent standard without specifying black tie.",
    whatToWear: [
      "A dark lounge suit — navy or charcoal — as the minimum",
      "White dress shirt and a silk tie",
      "Black Oxford or Derby shoes, well polished",
      "Pocket square recommended",
      "If in doubt, a dinner jacket is always welcome at a formal event",
    ],
    whatNotToWear: [
      "A light grey or casual suit",
      "Open collar unless the event is clearly relaxed despite the instruction",
      "Brown shoes",
      "Chinos or smart casual — formal means a suit",
    ],
    goodToKnow: "\"Formal\" on a UK invitation is a deliberate instruction rather than a specific dress code — the couple want everyone in a suit as a minimum, and are usually happy for guests to go as smart as they like above that. If you are unsure whether black tie would be welcome, it almost certainly is.",
    links: [
      { label: "Dark suits at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" },
      { label: "Browse at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" },
    ],
  },
  {
    id: "morning-dress",
    label: "Morning Dress",
    formalityTag: "Formal",
    summary: "Traditional daytime formal. Common at church weddings and more formal country house venues.",
    occasion: "Traditional church weddings, Ascot-style venues, formal country house receptions, royal garden parties.",
    whatToWear: [
      "Black or grey morning coat — single button at front, curves back to tails",
      "Striped grey trousers",
      "Waistcoat — buff, dove grey, or matching the coat",
      "White or pale blue shirt",
      "Silk tie or cravat — a cravat is traditional and looks excellent",
      "Black Oxford shoes",
      "Pocket square",
      "Top hat — optional and increasingly rare, check with the couple",
    ],
    whatNotToWear: [
      "A tailcoat — that is white tie, not morning dress",
      "A regular suit jacket with striped trousers",
      "Brown shoes",
      "A long tie with a cravat — pick one",
    ],
    goodToKnow: "The morning coat has a single button at the front and the front curves away to tails at the back — it is not the same as a tailcoat, which has a straight front hem. Hire is almost always more practical than buying. Savoy Taylors Guild specialise in morning dress and it is worth the premium over a standard hire shop for this particular look.",
    links: [
      { label: "Morning dress hire at Savoy Taylors Guild", url: "https://www.savoytaylorsguild.co.uk/hire/morning-suits" },
      { label: "Morning dress hire at Moss Bros", url: "https://www.mossbros.co.uk/suit-hire" },
      { label: "Morning dress hire at Lipman and Sons", url: "https://www.lipmanandsons.co.uk" },
    ],
  },
  {
    id: "lounge-suit",
    label: "Lounge Suit",
    formalityTag: "Smart",
    summary: "The most common UK wedding dress code. Covers an enormous range — read the venue and invitation tone.",
    occasion: "The default UK wedding dress code. Registry offices, barns, country houses, city hotels, outdoor ceremonies.",
    whatToWear: [
      "A suit — any colour, any cut appropriate to the venue and season",
      "Navy or charcoal for more formal venues",
      "Grey or lighter colours for relaxed outdoor summer weddings",
      "Dress shirt with a tie, or open collar depending on formality",
      "Oxford or Derby shoes",
      "Pocket square optional but recommended",
    ],
    whatNotToWear: [
      "Jeans or chinos — this is still a suit dress code",
      "Trainers",
      "A very casual or unstructured jacket without trousers to match",
    ],
    goodToKnow: "Lounge suit is simply the British English term for a suit — it does not mean casual, and it does not mean a specific style. It gives almost no guidance on its own. The venue and the overall tone of the invitation tell you far more. A lounge suit at a formal country house in October means something different to a lounge suit at a relaxed coastal venue in July. When in doubt, go slightly more formal rather than less — it is always easier to remove a tie than wish you were wearing one.",
    links: [
      { label: "Browse suits at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" },
      { label: "Browse suits at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" },
      { label: "Browse suits at Next", url: "https://www.next.co.uk/shop/gender-men/category-suits" },
    ],
  },
  {
    id: "cocktail-attire",
    label: "Cocktail Attire",
    formalityTag: "Smart",
    summary: "An American import increasingly seen on UK invitations, particularly for evening receptions.",
    occasion: "Evening receptions, urban venues, destination weddings with international guests.",
    whatToWear: [
      "A dark suit — navy or charcoal — with a dress shirt",
      "Tie optional but leans the look toward the smarter end",
      "Open collar works for a more relaxed cocktail event",
      "Black or dark brown Oxford or Derby shoes",
      "Pocket square recommended",
    ],
    whatNotToWear: [
      "A tuxedo — this is too much for cocktail attire",
      "Chinos or smart casual — this is too little",
      "Light grey or summer-weight suits",
    ],
    goodToKnow: "Cocktail attire sits between smart casual and black tie. A dark lounge suit done well is exactly right. Think of it as your sharpest lounge suit look rather than an attempt at black tie.",
    links: [
      { label: "Browse at Ted Baker", url: "https://www.tedbaker.com/uk/mens/category/suits" },
      { label: "Browse at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" },
    ],
  },
  {
    id: "smart-casual",
    label: "Smart Casual",
    formalityTag: "Smart",
    summary: "The most ambiguous dress code. Usually means blazer, open collar, tailored trousers, leather shoes.",
    occasion: "Relaxed daytime ceremonies, intimate celebrations, informal evening receptions.",
    whatToWear: [
      "Tailored trousers or chinos — well-fitted, no jeans",
      "An open-collar shirt, a lightweight knit, or an unstructured blazer",
      "Smart leather shoes or very clean minimal trainers for the most relaxed events",
      "No tie required — a tie can look overdressed",
    ],
    whatNotToWear: [
      "Jeans in almost all cases",
      "A full matching suit — can look overdressed depending on the event",
      "Trainers with formal trousers",
      "Anything that reads as workwear or too casual",
    ],
    goodToKnow: "Smart casual at a wedding almost always means blazer, open-collar shirt, tailored trousers, and leather shoes. That interpretation will never be wrong at any UK wedding with this dress code. When in doubt, a navy blazer and well-fitted chinos is the safest possible smart casual combination.",
    links: [
      { label: "Browse blazers at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" },
      { label: "Browse chinos at Next", url: "https://www.next.co.uk/shop/gender-men/category-trousers" },
    ],
  },
  {
    id: "garden-party",
    label: "Garden Party",
    formalityTag: "Smart",
    summary: "Increasingly common for outdoor ceremonies and summer receptions. Lighter colours, relaxed fabrics.",
    occasion: "Outdoor summer ceremonies, marquee receptions, countryside weddings in warm months.",
    whatToWear: [
      "Lighter colours — stone, light grey, mid-blue, cream",
      "Linen or light wool suit — breathable fabrics photograph well outdoors",
      "Open collar or a knit tie rather than a formal silk tie",
      "Loafers or Derby shoes — lighter than Oxfords",
      "Pocket square — florals or pastels work well here",
    ],
    whatNotToWear: [
      "A dark winter-weight suit in July — looks wrong in outdoor photographs",
      "Heavy black shoes against a light summer outfit",
      "A tuxedo or anything too formal for a daytime outdoor setting",
    ],
    goodToKnow: "Linen suits crease — that is part of their character outdoors, but check how you feel about it. A light wool or wool-linen blend gives the lightness of linen with more structure and fewer creases. If you are hiring, ask specifically for a lighter-weight option.",
    links: [
      { label: "Browse linen suits at Next", url: "https://www.next.co.uk/shop/gender-men/category-suits" },
      { label: "Browse at Ted Baker", url: "https://www.tedbaker.com/uk/mens/category/suits" },
    ],
  },
  {
    id: "festive-winter",
    label: "Winter Wedding",
    formalityTag: "Smart",
    summary: "Not a formal dress code but a context with its own rules. Darker colours, richer fabrics, more warmth.",
    occasion: "December and January weddings, barn venues, country house winter receptions.",
    whatToWear: [
      "Darker richer colours — midnight blue, bottle green, deep burgundy, charcoal",
      "Heavier cloth — wool rather than linen or light cotton",
      "A waistcoat adds warmth and formality",
      "Brogues work particularly well in winter",
      "A knit tie or a rich silk tie in a deeper colour",
    ],
    whatNotToWear: [
      "A light summer suit in December — photographs oddly and you will be cold",
      "Light grey or stone in a dark winter setting",
      "Linen",
    ],
    goodToKnow: "Winter weddings give you permission to wear richer, more interesting colours that would feel too heavy in summer. Bottle green and deep burgundy in particular look exceptional in winter light and in candlelit venues. If you have ever wanted to wear something more distinctive, a winter wedding is the occasion to do it.",
    links: [
      { label: "Browse at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" },
      { label: "Browse at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" },
    ],
  },
  {
    id: "beach-destination",
    label: "Beach / Destination Wedding",
    formalityTag: "Relaxed",
    summary: "Increasingly common for UK grooms marrying abroad. Light fabrics, pale colours, no tie.",
    occasion: "Beach ceremonies, destination weddings abroad, outdoor tropical or coastal venues.",
    whatToWear: [
      "Linen suit in white, cream, stone, or pale blue",
      "Unstructured jacket — less padding, more relaxed silhouette",
      "Open collar — no tie",
      "Loafers or leather sandals",
      "Light breathable fabrics throughout",
    ],
    whatNotToWear: [
      "A wool suit — you will overheat",
      "Patent leather shoes on sand or grass",
      "Anything dark that will photograph as a heavy block against a bright outdoor background",
      "A tie in strong heat — it will wilt",
    ],
    goodToKnow: "White and cream suits look exceptional in beach and destination settings but are unforgiving — any mark is immediately visible. Stone or pale blue is slightly more forgiving while achieving the same feel. If in doubt, pale blue linen is the safest and most versatile beach wedding choice.",
    links: [
      { label: "Browse linen suits at ASOS", url: "https://www.asos.com/men/suits/cat/?cid=3636" },
      { label: "Browse loafers at Loake", url: "https://www.loake.co.uk/collections/loafers" },
    ],
  },
  {
    id: "highland",
    label: "Highland / Tartan",
    formalityTag: "Formal",
    summary: "Traditional Scottish dress. Increasingly popular across the UK for grooms wanting something distinctive.",
    occasion: "Scottish weddings, Highland venues, any wedding where the groom has Scottish heritage or simply loves the look.",
    whatToWear: [
      "Kilt in your clan tartan, or a universal tartan if you have no specific clan",
      "Prince Charlie jacket and waistcoat for evening, or an Argyll jacket for daytime",
      "White dress shirt with a wing or band collar",
      "Bow tie or cravat depending on jacket choice",
      "Sporran — plain leather for daytime, fur or dress sporran for evening",
      "Kilt hose and flashes",
      "Ghillie brogues",
      "Sgian-dubh in the right sock",
    ],
    whatNotToWear: [
      "The wrong tartan — if you are wearing a clan tartan, wear your own",
      "A Prince Charlie jacket for daytime — Argyll is the correct daytime choice",
      "Regular shoes rather than Ghillie brogues",
    ],
    goodToKnow: "You do not need to be Scottish to wear Highland dress at a wedding — but if you are wearing a clan tartan, it should be your own. If you have no clan connection, a universal tartan like Black Watch or Hunting Stewart is entirely appropriate. Highland dress hire is widely available across the UK, not just in Scotland.",
    links: [
      { label: "Highland dress hire at Slanj Kilts", url: "https://www.slanjkilts.com" },
      { label: "Highland dress at Scotweb", url: "https://www.scotweb.co.uk/kilts" },
    ],
  },
];

const FORMALITY_COLOR: Record<string, string> = {
  "Most formal": T.navy,
  "Formal": T.navy,
  "Semi-formal": T.amber,
  "Smart": T.green,
  "Relaxed": T.mid,
};

function DressCodeCard({ dc, isOpen, onToggle }: { dc: DressCode; isOpen: boolean; onToggle: () => void }) {
  const tagColor = FORMALITY_COLOR[dc.formalityTag] ?? T.navy;

  return (
    <div
      style={{
        border: "1px solid " + (isOpen ? T.navy : T.rule),
        borderRadius: 6,
        background: T.white,
        overflow: "hidden",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: isOpen ? "0 8px 32px rgba(85,83,65,0.1)" : "none",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* Image */}
      {(() => {
        const photo = DRESS_CODE_PHOTOS[dc.id] || DRESS_CODE_FALLBACK_PHOTO;
        return (
          <div style={{ height: 160, position: "relative", overflow: "hidden", borderBottom: "1px solid " + T.rule }}>
            <img src={photo.imageUrl} alt={dc.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <a
              href={photo.photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{ position: "absolute", bottom: 6, left: 8, fontSize: 9, color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.6)", textDecoration: "none", fontFamily: "Inter, sans-serif" }}
            >
              Photo: {photo.photographer}
            </a>
          </div>
        );
      })()}

      {/* Card header */}
      <div style={{ padding: "20px 20px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, gap: 8 }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: T.ink, lineHeight: 1.1 }}>{dc.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Tag color={tagColor}>{dc.formalityTag}</Tag>
            <div style={{ fontSize: 14, color: isOpen ? T.navy : T.mid, transition: "color 0.15s, transform 0.15s", transform: isOpen ? "rotate(45deg)" : "none", lineHeight: 1 }}>+</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: T.mid, lineHeight: 1.6 }}>{dc.summary}</div>
      </div>

      {/* Expanded panel */}
      {isOpen && (
        <div
          style={{ borderTop: "1px solid " + T.rule, padding: "24px 20px 20px" }}
          onClick={e => e.stopPropagation()}
        >
          {/* Occasion */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: T.mid, marginBottom: 6 }}>Occasion</div>
            <div style={{ fontSize: 13, color: T.ink, lineHeight: 1.65 }}>{dc.occasion}</div>
          </div>

          {/* What to wear */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: T.green, marginBottom: 10 }}>What to wear</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {dc.whatToWear.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: T.green, fontSize: 12, lineHeight: 1.7, flexShrink: 0 }}>&#10003;</span>
                  <span style={{ fontSize: 13, color: T.ink, lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What not to wear */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: T.mid, marginBottom: 10 }}>What not to wear</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {dc.whatNotToWear.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: T.mid, fontSize: 12, lineHeight: 1.7, flexShrink: 0 }}>&mdash;</span>
                  <span style={{ fontSize: 13, color: T.mid, lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Good to know */}
          <GoodToKnow>{dc.goodToKnow}</GoodToKnow>

          {/* Links */}
          {dc.links.length > 0 && (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
              {dc.links.map((link, i) => <AffLink key={i} label={link.label} url={link.url} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function DressCodesModule() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 42, color: T.ink, lineHeight: 1.08, marginBottom: 14, letterSpacing: "-0.01em" }}>Dress codes, decoded.</div>
      <div style={{ fontSize: 15, color: T.mid, lineHeight: 1.7, maxWidth: 560, marginBottom: 32 }}>
        Every code a UK invitation can throw at you. When in doubt, dress slightly above — you can always remove a tie, but you cannot undo underdressing.
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
      }}
        className="dresscode-grid"
      >
        {DRESS_CODES.map(dc => (
          <DressCodeCard
            key={dc.id}
            dc={dc}
            isOpen={openId === dc.id}
            onToggle={() => toggle(dc.id)}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { .dresscode-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .dresscode-grid { grid-template-columns: 1fr !important; } }
        .dresscode-grid > div:hover { border-color: ${T.navy} !important; box-shadow: 0 4px 20px rgba(85,83,65,0.08) !important; }
      `}</style>
    </div>
  );
}
