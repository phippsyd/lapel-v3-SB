import { useState, type ReactNode } from "react";
import { T } from "../theme";
import { IntroScreen, Journey, AffLink, type Answers, type Question } from "../shared";
import { usePersistentState } from "../persistence";

// Notched: V-shaped cut where collar meets lapel
// Peaked: lapel tip points up toward shoulder
// Shawl: smooth continuous curve, no notch or peak
// Mandarin: no lapel/collar

const suitLapelOptions = [
  { id: "notched", label: "Notched lapel", tag: "Standard", desc: "The V-shaped notch where the collar meets the lapel. Clean, versatile, and sharp. The default on most hire suits.", img: "/images/LAPEL_STYLES/lapel-notched.png" },
  { id: "peaked", label: "Peak lapel", tag: "Stand out", desc: "The lapel points upward toward the shoulders. More assertive and formal. Sets you apart from groomsmen who will almost certainly be in notched.", img: "/images/LAPEL_STYLES/lapel-peak.png" },
  { id: "shawl", label: "Shawl lapel", tag: "Tux classic", desc: "A smooth, rounded lapel with no notch or peak. Almost exclusively seen on tuxedos and dinner jackets. Elegant and unmistakably black tie.", img: "/images/LAPEL_STYLES/lapel-shawl.png" },
  { id: "mandarin", label: "Mandarin / collarless", tag: "Modern", desc: "No lapel at all. A clean, collarless jacket. Works for contemporary minimalist weddings. Unusual enough to be genuinely distinctive.", img: "/images/LAPEL_STYLES/lapel-mandarin.png" },
];

const tuxLapelOptions = [
  { id: "peaked", label: "Peak lapel", tag: "Most popular", desc: "The lapel points upward toward the shoulders. Works on both suits and tuxedos. The most versatile black tie lapel.", img: "/images/LAPEL_STYLES/lapel-peak.png" },
  { id: "shawl", label: "Shawl lapel", tag: "Most formal", desc: "The classic black tie lapel. Smooth, rounded, no notch or peak. Timeless and unmistakably elegant. The correct choice for a traditional tuxedo.", img: "/images/LAPEL_STYLES/lapel-shawl.png" },
  { id: "notched", label: "Notched lapel", desc: "Less traditional on a tuxedo but entirely acceptable on a modern dinner suit. More casual than peaked or shawl.", img: "/images/LAPEL_STYLES/lapel-notched.png" },
];

const baseQuestions: Question[] = [
  {
    key: "style", question: "Suit or tuxedo?", sub: "The first decision. Everything else follows from here.",
    education: "A suit works for almost any UK venue. A tuxedo is best for formal evening receptions or black tie venues. The majority of UK grooms choose a suit.",
    options: [
      { id: "suit", label: "Suit", tag: "Most popular", desc: "Versatile and modern. Works for country houses, barns, city hotels. Easier to hire or buy at any budget.", aff: { label: "Browse suits at Moss Bros", url: "https://www.mossbros.co.uk/mens-wedding-suits" } },
      { id: "tux", label: "Tuxedo", tag: "Classic choice", desc: "Formal and timeless. Best for black tie venues or if you want to feel genuinely elevated.", aff: { label: "Browse tuxedos at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" } },
    ],
    groomsSay: [
      { quote: "Our venue was a Georgian manor. Suit felt right — a tux would have looked overdressed.", author: "u/groomadvice_uk" },
      { quote: "Midnight blue tux. Best decision I made. Looked completely different from every wedding photo I had ever seen.", author: "u/tuxgroom_uk" },
    ],
  },
  {
    key: "hireBuy", question: "Hire or buy?", sub: "Budget and practicality versus owning something you will wear again.",
    education: "Hiring has come a long way — most people genuinely cannot tell in photos. Expect to pay £150-£350 to hire. Buying makes more sense if you wear suits regularly. Off-the-peg starts around £300, made-to-measure from £600.",
    options: [
      { id: "hire", label: "Hire", tag: "Most grooms", price: "£150-£350", desc: "No storage, no faff. Modern hire suits look genuinely good.", aff: { label: "Book a fitting at Moss Bros", url: "https://www.mossbros.co.uk/suit-hire" } },
      { id: "buy", label: "Buy", tag: "Long-term value", price: "£300-£1,200+", desc: "Own it forever. Worth it if you will wear it again.", aff: { label: "Browse suits at Next", url: "https://www.next.co.uk/shop/gender-men/category-suits" } },
    ],
    groomsSay: [
      { quote: "Hired from Moss Bros. Cannot tell in the photos. Saved a fortune.", author: "u/ukgroom2025" },
      { quote: "Bought a Ted Baker suit for £420. Worn it to three weddings since.", author: "u/suitbuyer" },
    ],
  },
];

const getTuxShirtCollarQuestion = (): Question => ({
  key: "tuxShirtCollar", question: "Which shirt collar?", sub: "The collar is the most visible shirt detail and determines which bow tie style works.",
  education: "Wing collar is the traditional black tie choice — the small folded points frame the bow tie perfectly. Turndown collar is more modern and relaxed. If you are unsure, wing collar with a bow tie is always correct for black tie.",
  options: [
    { id: "wing", label: "Wing collar", tag: "Traditional", desc: "The classic black tie collar. Small folded points sit either side of the bow tie. Always correct for formal black tie. Ask for this specifically when hiring or buying a dress shirt.", img: "/images/SHIRT_COLLARS/collar-wing.png" },
    { id: "turndown", label: "Turndown / regular collar", tag: "Modern", desc: "A standard shirt collar worn with a bow tie or long tie. More contemporary and relaxed. Works well for less formal black tie events.", img: "/images/SHIRT_COLLARS/collar-turndown.png" },
    { id: "mandarin", label: "Mandarin collar", desc: "No collar at all. A very contemporary look. Works specifically with a shawl lapel tuxedo. Not traditional black tie but looks exceptional when done right.", img: "/images/SHIRT_COLLARS/collar-mandarin.png" },
  ],
  groomsSay: [
    { quote: "Wing collar all the way. It just looks right with a bow tie. Turndown always looks like you forgot to change your shirt.", author: "u/wingcollar" },
    { quote: "Went mandarin collar with a shawl lapel tux. Genuinely the most striking look in the room.", author: "u/mandarintux" },
  ],
});

const getTuxShirtFrontQuestion = (): Question => ({
  key: "tuxShirtFront", question: "Shirt front?", sub: "The front of the dress shirt — visible between the jacket lapels all day.",
  education: "The shirt front is more visible than most grooms realise — it sits between the lapels throughout the ceremony and dinner. A pleated bib front is the traditional choice. Plain front is cleaner and more modern.",
  options: [
    { id: "pleated", label: "Pleated bib front", tag: "Traditional", desc: "Vertical pleats on the chest panel. The classic formal dress shirt look. Correct for traditional black tie.", img: "/images/SHIRT_FRONTS/shirt-pleated-bib.png" },
    { id: "plain", label: "Plain front", tag: "Modern", desc: "Completely smooth chest. Cleaner and more contemporary. Works well with a slim-cut dinner jacket.", img: "/images/SHIRT_FRONTS/shirt-plain-front.png" },
    { id: "pique", label: "Pique bib front", desc: "Raised textured fabric on the chest panel. The most formal option — technically reserved for white tie but occasionally worn at black tie. Very striking.", img: "/images/SHIRT_FRONTS/shirt-pique-bib.png" },
    { id: "covered-placket", label: "Covered placket", desc: "No visible buttons at all — the placket is hidden beneath a fabric panel. Very sleek and modern. Looks exceptional under a close-fitting jacket.", img: "/images/SHIRT_FRONTS/shirt-covered-placket.png" },
  ],
  groomsSay: [
    { quote: "Plain front. Looked clean and modern. Nobody missed the pleats.", author: "u/plainfront" },
    { quote: "Pleated bib with a wing collar. Looked exactly like black tie should look.", author: "u/classicshirt" },
  ],
});

const getTuxNeckwearQuestion = (): Question => ({
  key: "tuxNeckwear", question: "Bow tie or long tie?", sub: "The most personal detail of the whole look.",
  education: "A self-tie bow tie always looks better than pre-tied because the slight imperfection — the fact that it was tied by a human hand — is the whole point. Pre-tied looks too symmetrical and reads as artificial. A clip-on is always obvious and should be avoided. A long tie with a tuxedo is unconventional but some grooms pull it off — it works best with a turndown collar and a modern slim dinner jacket.",
  options: [
    { id: "self-tie", label: "Self-tie bow tie", tag: "The right choice", desc: "Takes about 10 minutes to learn from a YouTube video. Looks infinitely better than pre-tied because the slight asymmetry signals it is real. Buy one in black silk or midnight blue to match the suit.", img: "/images/NECKWEAR/neckwear-bowtie-self-tie.png", aff: { label: "Browse at Hawes and Curtis", url: "https://www.hawesandcurtis.co.uk/mens/ties/bow-ties" } },
    { id: "pre-tied", label: "Pre-tied bow tie", desc: "Easier but looks slightly too perfect. Most people cannot tell, but you will know. Fine if nerves on the day mean you cannot face tying one.", img: "/images/NECKWEAR/neckwear-bowtie-pre-tied.png", aff: { label: "Browse at Charles Tyrwhitt", url: "https://www.ctshirts.com/mens-accessories/bow-ties" } },
    { id: "long-tie", label: "Long tie", desc: "Unconventional with a tuxedo but works with a turndown collar and modern dinner jacket. More relaxed energy. Not traditional black tie.", img: "/images/NECKWEAR/neckwear-half-windsor.png", aff: { label: "Browse silk ties at Hawes and Curtis", url: "https://www.hawesandcurtis.co.uk/mens/ties/silk-ties" } },
    { id: "open-collar", label: "Open collar", desc: "No neckwear at all. Works specifically with a mandarin collar shirt. Very contemporary. Not suitable for traditional black tie venues." },
  ],
  groomsSay: [
    { quote: "Spent 10 minutes on YouTube learning to tie a bow tie. Looked a thousand times better than pre-tied.", author: "u/selftiegroom" },
    { quote: "Self-tie midnight blue bow tie to match the tux. Best decision I made on the whole outfit.", author: "u/midnightbowtie" },
  ],
});

const getTuxCuffsQuestion = (): Question => ({
  key: "tuxCuffs", question: "Cuffs and cufflinks?", sub: "The detail that is visible every time you shake someone's hand.",
  education: "Double cuffs with cufflinks are the correct choice for black tie — they extend slightly beyond the jacket sleeve and give the whole look a finished quality. Single button cuffs are more casual. Cufflinks are an opportunity for something personal — a monogram, a meaningful date, or something that connects to your partner or wedding.",
  options: [
    { id: "double", label: "Double cuffs with cufflinks", tag: "Correct for black tie", desc: "Fold-back cuffs fastened with cufflinks. The cuff sits slightly proud of the jacket sleeve. Looks significantly more finished than a button cuff. Ask specifically for double cuff dress shirts when hiring or buying.", img: "/images/CUFFS/cuff-double-cufflink.png", aff: { label: "Browse cufflinks at Cufflinks.com", url: "https://www.cufflinks.com" } },
    { id: "single", label: "Single button cuffs", desc: "Standard shirt cuff with a single button. Easier but less formal. Fine for relaxed black tie — not correct for a formal evening venue.", img: "/images/CUFFS/cuff-single-button.png" },
    { id: "personalised", label: "Novelty or personalised cufflinks", desc: "Monogrammed, engraved with a date, or something meaningful. A nice detail that guests notice up close. Often given as groomsmen gifts too.", aff: { label: "Personalised cufflinks at Not On The High Street", url: "https://www.notonthehighstreet.com/personalised-cufflinks" } },
  ],
  groomsSay: [
    { quote: "Double cuffs and silver cufflinks engraved with the date. Only visible up close but I love that detail.", author: "u/cufflinks" },
    { quote: "Got the groomsmen matching cufflinks as their gift. Tied the whole look together.", author: "u/groommengift" },
  ],
});

const getLapelQuestion = (style: string): Question => ({
  key: "lapel",
  question: style === "tux" ? "Which lapel on the tuxedo?" : "Which lapel?",
  sub: style === "tux"
    ? "The lapel defines the character of the tuxedo."
    : "The detail that distinguishes you from your groomsmen.",
  education: style === "tux"
    ? "Shawl lapel is the most traditional and formal tuxedo lapel — smooth, rounded, unmistakably black tie. Peaked lapel is the more contemporary choice and works equally well. Notched lapel is less traditional on a tuxedo but acceptable on a modern dinner suit."
    : "Most hire shops default to notched lapel for groomsmen. If you match them, you blend in. Peak lapel on the groom is a small change with a big visual impact — people notice it without knowing why. Shawl lapel is almost exclusively seen on tuxedos.",
  options: style === "tux" ? tuxLapelOptions : suitLapelOptions,
  groomsSay: style === "tux" ? [
    { quote: "Shawl lapel in midnight blue. The most elegant I have ever looked. Wish I had worn a tux years ago.", author: "u/shawllapel" },
    { quote: "Peaked lapel on the tux. Everyone asked where I got it. Moss Bros hire — genuinely could not tell.", author: "u/peakedtux" },
  ] : [
    { quote: "I wore peaked, groomsmen wore notched. Subtle but it worked perfectly.", author: "u/lapelgroom" },
    { quote: "Peak lapel is the move if you want to stand out without doing anything drastic.", author: "u/weddingstyle" },
  ],
});

const colourQuestion: Question = {
  key: "colour", question: "What colour?", sub: "Sets the tone for the whole look and your groomsmen coordination.",
  education: "Navy is the most versatile choice and photographs well in all lighting. Charcoal is classic and formal. Grey is more relaxed. Lighter shades work well outdoors in summer. Black is reserved for black tie or very formal venues.",
  options: [
    { id: "black", label: "Black", tag: "Most common", desc: "The standard tuxedo colour. Classic, correct, and universally appropriate for black tie. The safe and reliable choice — you will never be wrong in black.", aff: { label: "Browse at Hugo Boss", url: "https://www.hugoboss.com/uk/men-suits" } },
    { id: "navy", label: "Navy", tag: "Most popular", desc: "Versatile, photographs brilliantly, works for almost any venue and season.", aff: { label: "Browse navy suits at Charles Tyrwhitt", url: "https://www.ctshirts.com/suits?colour=navy" } },
    { id: "charcoal", label: "Charcoal", tag: "Classic", desc: "Dark, formal, authoritative. Works especially well in winter or formal venues.", aff: { label: "Browse at Reiss", url: "https://www.reiss.com/mens/suits/suits-blazers" } },
    { id: "midnight-blue", label: "Midnight blue", tag: "Distinctive choice", desc: "Increasingly popular for tuxedos. Slightly softer than black under artificial light and photographs exceptionally well. A more interesting choice than black if you have the confidence for it.", aff: { label: "Browse at Hugo Boss", url: "https://www.hugoboss.com/uk/men-suits/suits-tuxedos" } },
    { id: "grey", label: "Mid grey", desc: "Relaxed and versatile. Works beautifully for country house weddings and outdoor ceremonies.", aff: { label: "Browse at ASOS", url: "https://www.asos.com/men/suits/cat/?cid=3636" } },
    { id: "light", label: "Light grey or stone", desc: "Summer-friendly, outdoor-ready. Feels elevated and modern. Works well with florals.", aff: { label: "Browse at Ted Baker", url: "https://www.tedbaker.com/uk/mens/category/suits" } },
    { id: "bold", label: "Bold colour", desc: "Burgundy, forest green, tan. A genuine statement. Works when the venue and dress code supports it.", aff: { label: "Browse at Next", url: "https://www.next.co.uk/shop/gender-men/category-suits" } },
  ],
  groomsSay: [
    { quote: "Navy all day. I have seen charcoal and grey look great too, but navy just photographs so well.", author: "u/navygroom" },
    { quote: "I wore forest green. People still talk about it. Make sure you have the nerve for it though.", author: "u/boldchoice" },
  ],
};

const groomsmenQuestion: Question = {
  key: "groomsmen", question: "How will the groomsmen differ?", sub: "Coordinated but distinct.",
  education: "The most common approach is the same colour suit with a different lapel or neckwear on the groom. Your groomsmen should look like a coherent group, not clones of you.",
  options: [
    { id: "diff-lapel", label: "Same colour, different lapel", tag: "Most popular", desc: "Groomsmen in matching suits, you with a different lapel. Subtle and effective." },
    { id: "diff-tie", label: "Same colour, different neckwear", desc: "All in matching suits, you with a silk tie or different pocket square." },
    { id: "diff-colour", label: "Contrasting colours", desc: "Groomsmen in one colour, you in another. Works well with navy and grey combinations." },
    { id: "no-match", label: "No coordination", desc: "Everyone wears what they want. Works for very relaxed, casual weddings." },
  ],
  groomsSay: [
    { quote: "Same grey suits, I wore peaked lapel with a silk tie, they wore notched. Looked brilliant.", author: "u/groomcoord" },
    { quote: "Groomsmen in charcoal, me in navy. Simple but looked genuinely intentional.", author: "u/navygroomsman" },
  ],
};

const finishingQuestion: Question = {
  key: "finishing", question: "Buttonhole or pocket square?", sub: "The finishing touches. More grooms skip these than you would think.",
  education: "A buttonhole coordinates with the bouquet and costs around £15 from your florist. Most grooms wear both — a simple pocket square and a buttonhole that ties the look to the florals.",
  options: [
    { id: "both", label: "Both", tag: "Recommended", desc: "Buttonhole coordinating with the bouquet, simple pocket square. The complete look." },
    { id: "buttonhole", label: "Buttonhole only", desc: "Cleaner and simpler. Let the flower do the work." },
    { id: "pocket-square", label: "Pocket square only", desc: "More understated. Works well if the suit is already doing a lot." },
    { id: "neither", label: "Neither", desc: "Some grooms skip both. Only works if the suit is distinctive enough on its own." },
  ],
  groomsSay: [
    { quote: "Florist did buttonholes for £15 each. Easily the best value upgrade of the whole day.", author: "u/buttonholegroom" },
    { quote: "White pocket square and a matching buttonhole. Looked connected to the whole day.", author: "u/detailgroom" },
  ],
};

const shoesQuestion: Question = {
  key: "shoes", question: "What about shoes?", sub: "The most overlooked part of the outfit. They are in almost every photo.",
  education: "A decent pair of Oxford or Derby shoes makes a real difference. Do not leave this until the last minute.",
  options: [
    { id: "oxford", label: "Oxford", tag: "Most formal", price: "£80-£250", desc: "Closed lacing, clean and sleek. The classic wedding shoe. Works for suits and tuxedos.", img: "/images/SHOES/shoe-oxford.png", aff: { label: "Shop Oxfords at Loake", url: "https://www.loake.co.uk/collections/oxford-shoes" } },
    { id: "derby", label: "Derby", tag: "Versatile", price: "£70-£200", desc: "Open lacing, slightly less formal but entirely appropriate for a suit.", img: "/images/SHOES/shoe-derby.png", aff: { label: "Shop at Clarks", url: "https://www.clarks.co.uk/mens-shoes/smart-shoes" } },
    { id: "patent", label: "Patent Oxford", tag: "Black tie correct", price: "£100-£300", desc: "High-shine lacquered leather. The correct choice for a tuxedo. Looks exceptional with black tie.", img: "/images/SHOES/shoe-patent-oxford.png", aff: { label: "Browse at Loake", url: "https://www.loake.co.uk/collections/oxford-shoes" } },
    { id: "loafer", label: "Loafer", tag: "Modern", price: "£80-£220", desc: "Works well with a slim modern suit. Less traditional but increasingly popular.", img: "/images/SHOES/shoe-loafer.png", aff: { label: "Browse at ASOS", url: "https://www.asos.com/men/shoes/loafers/cat/?cid=12521" } },
    { id: "existing", label: "Wearing what I have", desc: "Fine — just make sure they are clean and polished on the day." },
  ],
  groomsSay: [
    { quote: "Spent £120 on Oxford shoes. They are in every single photo. Worth every penny.", author: "u/shoeadvice" },
    { quote: "Wore my existing Oxfords, freshly polished. Nobody noticed — in a good way.", author: "u/frugalgroom" },
  ],
};

const buttonStanceQuestion: Question = {
  key: "buttonStance", question: "Button stance?", sub: "How the jacket closes — more visible in photos than most grooms realise.",
  education: "Double-breasted is having a genuine moment right now. It looks significantly more distinctive than single-breasted in photos. If you have the confidence for it, 4x2 or 6x2 will look unlike almost every other groom in the room. Single-breasted 2-button is the safe, versatile default.",
  options: [
    { id: "sb1", label: "Single-breasted 1-button", tag: "Very modern", desc: "One button at the waist. Extremely clean and contemporary. Works with peak lapel. Common on tuxedos.", img: "/images/JACKET_BUTTON_STANCE/jacket-single-1-button.png" },
    { id: "sb2", label: "Single-breasted 2-button", tag: "Standard", desc: "The default on most suits. Versatile, flattering on every build, works for any venue.", img: "/images/JACKET_BUTTON_STANCE/jacket-single-2-button.png" },
    { id: "sb3", label: "Single-breasted 3-button", desc: "More traditional and slightly more formal. Less common now but some grooms love the look.", img: "/images/JACKET_BUTTON_STANCE/jacket-single-3-button.png" },
    { id: "db4", label: "Double-breasted 4x2", tag: "Bold revival", desc: "Four buttons show, two fasten. More modern of the two DB options. Fashion-forward and distinctive. Makes an impression.", img: "/images/JACKET_BUTTON_STANCE/jacket-double-4x2.png" },
    { id: "db6", label: "Double-breasted 6x2", tag: "Classic DB", desc: "Six buttons show, two fasten. The traditional double-breasted silhouette. Very formal and assertive. Unlike almost every other groom in the room.", img: "/images/JACKET_BUTTON_STANCE/jacket-double-6x2.png" },
  ],
  groomsSay: [
    { quote: "Double-breasted 6x2 in navy. Six people asked me where I got it before dinner was served.", author: "u/dbgroom" },
    { quote: "Two-button is the safe play. I went safe and it looked exactly right for our venue.", author: "u/classicgroom" },
  ],
};

const waistcoatQuestion: Question = {
  key: "waistcoat", question: "Waistcoat?", sub: "Adds formality and completes the three-piece look.",
  education: "A waistcoat adds formality and covers the shirt waist — particularly useful if you are not wearing a cummerbund with a tux. The horseshoe cut is the most elegant option and flatters almost every build. A plain waistcoat often adds more to the look than most grooms expect.",
  options: [
    { id: "3-button", label: "3-button waistcoat", tag: "Clean", desc: "Standard, clean, and versatile. Works with almost any suit. The modern default.", img: "/images/WAISTCOATS/waistcoat-3-button.png" },
    { id: "5-button", label: "5-button waistcoat", tag: "Classic", desc: "More formal and traditional. The classic wedding waistcoat. Covers more of the shirt front.", img: "/images/WAISTCOATS/waistcoat-5-button.png" },
    { id: "db-waistcoat", label: "Double-breasted waistcoat", tag: "Bold", desc: "Works with double-breasted jackets or as a contrast piece with single-breasted. A genuine statement.", img: "/images/WAISTCOATS/waistcoat-double-breasted.png" },
    { id: "horseshoe", label: "Horseshoe / low-cut", tag: "Most elegant", desc: "Deep U-shape showing more shirt and tie front. Very elegant and flattering. Works brilliantly with a self-tie bow tie on a tuxedo.", img: "/images/WAISTCOATS/waistcoat-horseshoe.png" },
    { id: "cummerbund", label: "Cummerbund", tag: "Black tie", desc: "A wide pleated sash worn around the waist instead of a waistcoat. Traditional black tie correct. Pleats must face upward.", img: "/images/WAISTCOATS/cummerbund.png", aff: { label: "Browse at Hawes and Curtis", url: "https://www.hawesandcurtis.co.uk/mens/black-tie" } },
    { id: "none", label: "No waistcoat", tag: "Two-piece", desc: "Cleaner and more modern. Two-piece suits are entirely acceptable and many grooms prefer the less formal look." },
  ],
  groomsSay: [
    { quote: "Horseshoe waistcoat with the tux. The combination looked exceptional in photos.", author: "u/horseshoegroom" },
    { quote: "Skipped the waistcoat. Looked cleaner and more modern. No regrets.", author: "u/twopiecegroom" },
  ],
};

const tieKnotQuestion: Question = {
  key: "tieKnot", question: "Which tie knot?", sub: "The knot changes the formality and proportion of the tie.",
  education: "The Full Windsor is often recommended for weddings but it only works if your collar has a wide enough spread. A Half Windsor is the safer choice for most collars and looks genuinely smart. The Four-in-hand is the most common knot and its slight asymmetry looks intentional rather than careless.",
  options: [
    { id: "four-in-hand", label: "Four-in-hand", tag: "Most versatile", desc: "The most common knot. Slightly asymmetric, which looks intentional. Works with any collar width.", img: "/images/NECKWEAR/neckwear-four-in-hand.png" },
    { id: "half-windsor", label: "Half Windsor", tag: "Recommended", desc: "Medium-sized symmetrical triangle. Versatile and genuinely smart. Works well with most collars.", img: "/images/NECKWEAR/neckwear-half-windsor.png" },
    { id: "full-windsor", label: "Full Windsor", desc: "Large symmetrical knot. Very formal and imposing. Only works correctly with a wide spread collar — check before choosing.", img: "/images/NECKWEAR/neckwear-full-windsor.png" },
  ],
  groomsSay: [
    { quote: "Half Windsor. Not too big, not too small. Looked right with my turndown collar.", author: "u/knotgroom" },
    { quote: "Four-in-hand because I have worn one my whole life and I could tie it in the dark on the morning of the wedding.", author: "u/fourinhandgroom" },
  ],
};

const trouserQuestion: Question = {
  key: "trousers", question: "Trouser style?", sub: "The cut affects the whole silhouette from the waist down.",
  education: "Flat front trousers look best with slim and modern cuts. Pleats give more room and work better with looser, more traditional silhouettes. Turn-ups are a distinctly British detail — very elegant on a well-cut trouser. Side adjusters are correct for formal wear; belt loops are more casual.",
  options: [
    { id: "flat-front", label: "Flat front", tag: "Modern default", desc: "No pleats. Clean and slim. The default on most contemporary suits. Works with almost any cut.", img: "/images/TROUSERS/trouser-flat-front.png" },
    { id: "single-pleat", label: "Single pleat", desc: "One pleat per side. More room through the thigh. More traditional and works well with a fuller, classic cut.", img: "/images/TROUSERS/trouser-single-pleat.png" },
    { id: "double-pleat", label: "Double pleat", tag: "Fashion revival", desc: "Two pleats per side. Very traditional. Having a genuine fashion revival with wider-leg silhouettes. Looks deliberate, not dated, when done right.", img: "/images/TROUSERS/trouser-double-pleat.png" },
    { id: "turn-ups", label: "Turn-ups / cuffs", tag: "Distinctly British", desc: "The trouser hem folds back on itself. Adds weight and formality. A very elegant British detail that works especially well on a well-cut suit.", img: "/images/TROUSERS/trouser-turn-up.png" },
    { id: "side-adjusters", label: "Side adjusters, no belt loops", tag: "Formally correct", desc: "Trousers with side adjusters rather than belt loops. The correct choice for formal wear and black tie. Cleaner and more elegant at the waist." },
  ],
  groomsSay: [
    { quote: "Flat front, no question. The trouser looked like part of the suit, not an afterthought.", author: "u/flatfront" },
    { quote: "Turn-ups on a navy suit. Such a small detail but it looked genuinely considered.", author: "u/turnupgroom" },
  ],
};

const pocketSquareFoldQuestion: Question = {
  key: "pocketSquareFold", question: "Pocket square fold?", sub: "The fold changes the formality and character of the whole chest.",
  education: "The flat presidential fold works for every suit and every occasion. If in doubt, use this one. The puff fold is the easiest to execute and looks intentionally relaxed. Avoid over-engineered multi-point folds — they can look like you tried too hard.",
  options: [
    { id: "flat", label: "Flat fold / presidential", tag: "Safe choice", desc: "Clean straight edge visible above the pocket. Very formal and clean. Works with any suit and any occasion.", img: "/images/POCKET_SQUARES/pocket-square-flat-fold.png" },
    { id: "one-point", label: "One-point fold", tag: "Classic", desc: "Single point facing up. Classic and simple. Slightly more characterful than flat.", img: "/images/POCKET_SQUARES/pocket-square-one-point.png" },
    { id: "two-point", label: "Two-point fold", desc: "Two points angled slightly apart. More relaxed than one-point, still clean.", img: "/images/POCKET_SQUARES/pocket-square-two-point.png" },
    { id: "puff", label: "Puff fold", tag: "Easiest", desc: "Soft rounded puff of fabric. Casual and relaxed. Looks intentionally effortless and works well with a linen or cotton pocket square.", img: "/images/POCKET_SQUARES/pocket-square-puff-fold.png" },
  ],
  groomsSay: [
    { quote: "Flat fold. Never going to be wrong, looks clean in every photo.", author: "u/flatfoldgroom" },
    { quote: "Puff fold in white linen. Took three seconds. Looked better than the fussy folds some of the groomsmen attempted.", author: "u/puffgroom" },
  ],
};

const waistOrCummerbundQuestion: Question = {
  key: "waistOrCummerbund", question: "Waistcoat or cummerbund?", sub: "Something needs to cover the trouser waistband. This is the choice.",
  education: "The waistband of your trousers and the shirt tucked into them sit between the bottom of your jacket and the top of your trousers. Without a waistcoat or cummerbund, this gap is visible every time your jacket opens. Both options cover it — they just do so with a completely different look and formality level.",
  options: [
    { id: "waistcoat", label: "Waistcoat", tag: "Most popular", desc: "More contemporary than a cummerbund. Works for both suits and tuxedos. A five-button waistcoat is the most versatile choice. Leave the bottom button undone.", pros: ["Works for suits and tuxedos", "More familiar and easier to wear", "Wide range of styles and cuts"], cons: ["Adds warmth — can get hot in summer"] },
    { id: "cummerbund", label: "Cummerbund", tag: "Traditional black tie", desc: "A wide pleated sash worn around the waist. Traditional black tie correct. Less common now but genuinely elegant when worn properly. Pleats must face upward — this is non-negotiable.", img: "/images/WAISTCOATS/cummerbund.png", pros: ["Correct for formal black tie", "Lighter and cooler than a waistcoat", "Very elegant when done right"], cons: ["Pleats face upward — easy to put on incorrectly", "Less familiar to most grooms"], aff: { label: "Browse at Hawes and Curtis", url: "https://www.hawesandcurtis.co.uk/mens/black-tie" } },
    { id: "neither", label: "Neither", desc: "A clean two-piece look with no waistcoat or cummerbund. Works for modern slim-cut tuxedos where the jacket sits close to the body. Only works if the jacket fits well enough that the waistband gap is never visible.", pros: ["Cleaner and more minimal", "Cooler in warm weather"], cons: ["The waistband gap will be visible if the jacket swings open", "Only works with a very well-fitted jacket"] },
  ],
  groomsSay: [
    { quote: "Waistcoat every time. Never understood cummerbunds — looks like a fancy belt to me.", author: "u/waistcoatfan" },
    { quote: "Wore a cummerbund. Got it exactly right — pleats up, fitted properly. Looked genuinely correct in a way most black tie does not.", author: "u/cummerbundcorrect" },
    { quote: "Neither — just a slim two-piece tux. Clean and modern. Would do it again.", author: "u/minimaltux" },
  ],
};

function buildQuestions(answers: Answers): Question[] {
  const style = answers.style as string;
  const qs: Question[] = [...baseQuestions];
  qs.push(getLapelQuestion(style));
  qs.push(buttonStanceQuestion);
  qs.push(waistcoatQuestion);
  if (style === "tux") {
    qs.push(getTuxShirtCollarQuestion());
    qs.push(getTuxShirtFrontQuestion());
    qs.push(getTuxNeckwearQuestion());
    if (answers.tuxNeckwear === "long-tie") qs.push(tieKnotQuestion);
    qs.push(getTuxCuffsQuestion());
    qs.push(waistOrCummerbundQuestion);
  }
  qs.push(colourQuestion);
  if (style !== "tux") qs.push(groomsmenQuestion);
  qs.push(trouserQuestion);
  qs.push(finishingQuestion);
  if (answers.finishing === "pocket-square" || answers.finishing === "both") {
    qs.push(pocketSquareFoldQuestion);
  }
  qs.push(shoesQuestion);
  return qs;
}

export const attireAuditGroups = [
  { section: "Lapel — suit path", options: suitLapelOptions },
  { section: "Lapel — tux path", options: tuxLapelOptions },
  { section: "Button stance", options: buttonStanceQuestion.options },
  { section: "Waistcoat", options: waistcoatQuestion.options },
  { section: "Waist covering (tux)", options: waistOrCummerbundQuestion.options },
  { section: "Shirt collar (tux)", options: getTuxShirtCollarQuestion().options },
  { section: "Shirt front (tux)", options: getTuxShirtFrontQuestion().options },
  { section: "Neckwear (tux)", options: getTuxNeckwearQuestion().options },
  { section: "Tie knot", options: tieKnotQuestion.options },
  { section: "Cuffs (tux)", options: getTuxCuffsQuestion().options },
  { section: "Trousers", options: trouserQuestion.options },
  { section: "Pocket square fold", options: pocketSquareFoldQuestion.options },
  { section: "Shoes", options: shoesQuestion.options },
];

function AttireSummaryScreen({ answers, saved, onSave, onRestart }: {
  answers: Answers;
  saved: boolean;
  onSave: () => void;
  onRestart: () => void;
}) {
  const isHire = answers.hireBuy === "hire";

  const hireSuppliers = [
    { name: "Moss Bros", desc: "The most accessible hire option. Free fittings, wide stock, over 100 UK stores.", url: "https://www.mossbros.co.uk/hire" },
    { name: "Savoy Taylors Guild", desc: "Traditional hire specialists. Good for morning suits and classic formal styles.", url: "https://www.savoytaylorsguild.co.uk" },
    { name: "Dobell", desc: "Online hire with good value pricing. Strong range of slim-fit and contemporary styles.", url: "https://www.dobell.co.uk" },
    { name: "Slaters", desc: "Best coverage in Scotland and the North. Competitive pricing and helpful in-store service.", url: "https://www.slaters.co.uk" },
    { name: "Lipman and Sons", desc: "Specialist hire tailors with a strong reputation for fit and finish.", url: "#lipman" },
    { name: "Rathbones Tailor", desc: "Independent hire specialists. Worth considering if you want something more personal than a high street fitting.", url: "#rathbones" },
  ];

  const buySuppliers = [
    { name: "Next", desc: "Best value on the high street. Solid suits from £200 that photograph well.", url: "https://www.next.co.uk/shop/gender-men/category-suits" },
    { name: "Ted Baker", desc: "Strong mid-market option. Good cuts and interesting fabrics around £350–£550.", url: "https://www.tedbaker.com" },
    { name: "Charles Tyrwhitt", desc: "Worth visiting for shirts and separates as well as suits. Reliable quality.", url: "https://www.ctshirts.com" },
    { name: "Reiss", desc: "Premium off-the-peg. Worth it if budget allows — the fabrics and cut are noticeably better.", url: "https://www.reiss.com" },
    { name: "ASOS", desc: "Budget-friendly option. Good for younger grooms or if this is a one-wear occasion.", url: "https://www.asos.com/men/suits" },
  ];

  const suppliers = !answers.hireBuy || isHire ? hireSuppliers : buySuppliers;

  const shoeAffiliate: Record<string, { label: string; url: string }> = {
    oxford: { label: "Browse Oxfords at Loake", url: "https://www.loake.co.uk" },
    derby: { label: "Browse Derbys at Clarks", url: "https://www.clarks.co.uk" },
    patent: { label: "Browse Patent Oxfords at Loake", url: "https://www.loake.co.uk" },
    loafer: { label: "Browse loafers at ASOS", url: "https://www.asos.com/men/shoes" },
  };
  const shoeLink = answers.shoes ? shoeAffiliate[answers.shoes] : undefined;

  // Resolve each answer back to its full option, so the sheet shows proper
  // labels ("Self-tie bow tie", not "self-tie") and the retailer link the
  // groom saw when he chose it. Any chosen option with an illustration gets
  // a visual card; everything else gets a text row. Question order preserved.
  const ROW_LABELS: Record<string, string> = {
    style: "Style", hireBuy: "Hire or buy", colour: "Colour", lapel: "Lapel",
    buttonStance: "Button stance", waistcoat: "Waistcoat", waistOrCummerbund: "Waist covering",
    tuxShirtCollar: "Shirt collar", tuxShirtFront: "Shirt front", tuxNeckwear: "Neckwear",
    tieKnot: "Tie knot", tuxCuffs: "Cuffs", trousers: "Trousers", shoes: "Shoes",
    groomsmen: "Groomsmen", finishing: "Finishing", pocketSquareFold: "Pocket square",
  };
  const askedQuestions = buildQuestions(answers);
  const optionFor = (key: string) => {
    const q = askedQuestions.find(qq => qq.key === key);
    return q?.options.find(o => (o.id || o.label) === answers[key]);
  };
  const answeredKeys = askedQuestions.map(q => q.key).filter(k => answers[k]);
  const visualCards = answeredKeys
    .map(k => ({ key: k, opt: optionFor(k) }))
    .filter(x => x.opt?.img)
    .map(x => ({
      label: ROW_LABELS[x.key] || x.key,
      value: x.opt!.label,
      img: x.opt!.img!,
      aff: x.opt!.aff || (x.key === "shoes" ? shoeLink : undefined),
    }));
  const detailRows = answeredKeys
    .filter(k => !optionFor(k)?.img)
    .map(k => ({ key: k, label: ROW_LABELS[k] || k }));

  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink, marginBottom: 8 }}>
        Your fitting sheet.
      </div>
      <div style={{ fontSize: 14, color: T.mid, marginBottom: 36, lineHeight: 1.65 }}>
        Everything you leaned towards, in the language the shop will use. Anything you skipped, you now know exists — ask to see it in person before you rule it out.
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.mid, marginBottom: 14 }}>
          Where to go
        </div>
        <div style={{ fontSize: 14, color: T.mid, lineHeight: 1.65, marginBottom: 20 }}>
          {!answers.hireBuy
            ? "Still weighing hire against buying? Book a hire fitting first — they're free, no obligation, and an hour in front of a mirror will tell you more than any guide."
            : isHire
            ? "Most hire shops offer free fittings with no obligation. Book two or three and compare — styles and stock vary significantly between retailers."
            : "Prices and styles vary considerably. Start at two or three of these before committing — and always try before you buy."}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {suppliers.map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "1px solid " + T.rule, borderRadius: 8, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: T.ink, marginBottom: 3 }}>{s.name}</div>
                <div style={{ fontSize: 13, color: T.mid, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
              <AffLink label="Visit" url={s.url} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid " + T.rule, paddingTop: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.mid, marginBottom: 18 }}>
          The sheet
        </div>

        {visualCards.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 32 }}>
            {visualCards.map((card, i) => (
              <div key={i} style={{ background: "#FFFFFF", border: "1px solid " + T.rule, borderRadius: 8, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 14px 10px" }}>
                  <img
                    src={card.img}
                    alt={card.value}
                    style={{ height: 110, width: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
                <div style={{ padding: "0 14px 14px", textAlign: "center", marginTop: "auto" }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.mid, marginBottom: 2 }}>
                    {card.label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: T.ink, marginBottom: card.aff ? 8 : 0 }}>{card.value}</div>
                  {card.aff && <AffLink label={card.aff.label} url={card.aff.url} />}
                </div>
              </div>
            ))}
          </div>
        )}

        {detailRows.length > 0 && (
          <div style={{ marginBottom: 36 }}>
            {detailRows.map((row, i) => {
              const opt = optionFor(row.key);
              return (
                <div key={row.key} style={{ display: "flex", gap: 20, padding: "12px 0", borderBottom: i < detailRows.length - 1 ? "1px solid " + T.rule : "none", alignItems: "baseline", flexWrap: "wrap" }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid, minWidth: 140 }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize: 14, color: T.ink, flex: 1 }}>{opt?.label || answers[row.key]}</div>
                  {opt?.aff && <AffLink label={opt.aff.label} url={opt.aff.url} />}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center", paddingTop: 24, borderTop: "1px solid " + T.rule }}>
        {!saved ? (
          <button onClick={onSave}
            style={{ background: T.dark, color: "white", border: "none", padding: "12px 24px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, transition: "opacity 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Save to my profile &rarr;
          </button>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: T.green, fontWeight: 600 }}>
            <span>&#10003;</span> Saved to profile
          </div>
        )}
        <button onClick={onRestart}
          style={{ background: "none", border: "1px solid " + T.rule, color: T.mid, padding: "12px 20px", fontSize: 12, fontWeight: 600, cursor: "pointer", borderRadius: 2 }}>
          {saved ? "Retake the guide" : "Start over"}
        </button>
      </div>
    </div>
  );
}

// ── INTRO PLATES ──────────────────────────────────────────────────────────
// Paste your chosen Unsplash images here. For each: the images.unsplash.com
// URL (add ?w=900&q=80 if not present), a short caption, and the
// photographer's name + profile URL for the licence credit.
// The intro renders single-column until at least one img is filled in.
const INTRO_PLATES = [
  {
    img: "https://images.unsplash.com/photo-1532207733185-fc73ca0a54b5?q=80&w=900&auto=format&fit=crop",
    caption: "The jacket",
    credit: { name: "Hermes Rivera", url: "https://unsplash.com/@hermez777" },
  },
  {
    img: "https://images.unsplash.com/photo-1604531826248-f0eca8eeb896?q=80&w=900&auto=format&fit=crop",
    caption: "The details",
    credit: { name: "Nathan Walker", url: "https://unsplash.com/@nwphoto" },
  },
];

export function AttireModule() {
  const [savedAttire, setSavedAttire] = usePersistentState<Answers>("attire-answers", {});
  const hasSaved = Object.keys(savedAttire).length > 0;
  // A groom with a saved fitting sheet lands on his sheet, not the intro.
  const [phase, setPhase] = useState<"intro" | "journey" | "result">(hasSaved ? "result" : "intro");
  const [answers, setAnswers] = useState<Answers>(savedAttire);
  const [saved, setSaved] = useState(hasSaved);

  const handleComplete = (a: Answers) => {
    setAnswers(a);
    setSaved(false);
    setPhase("result");
  };

  if (phase === "intro") return (
    <IntroScreen
      title="The decisions you didn't know you'd have to make."
      description="Lapels, cuffs, knots, pockets — every choice your fitting will throw at you, explained before you're stood at the counter. Pick as you go, or just look. Undecided is fine."
      steps={["Style", "Hire or buy", "Lapel", "Colour", "Details", "Shoes"]}
      quote="I wish I'd done this before my first fitting. I didn't even know what lapel I wanted and the guy behind the counter just picked for me."
      quoteAuthor="A groom, on Reddit"
      illustration={undefined}
      onStart={() => setPhase("journey")}
      ctaLabel="See the decisions"
      plates={INTRO_PLATES.filter(p => p.img)}
    />
  );

  if (phase === "journey") return (
    <Journey
      questions={buildQuestions(answers)}
      onAnswerChange={(partial: Answers) => setAnswers(prev => ({ ...prev, ...partial }))}
      onComplete={handleComplete}
      skippable
    />
  );

  return (
    <AttireSummaryScreen
      answers={answers}
      saved={saved}
      onSave={() => { setSavedAttire(answers); setSaved(true); }}
      onRestart={() => { setAnswers({}); setSaved(false); setPhase("journey"); }}
    />
  );
}
