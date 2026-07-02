import { T } from "./theme";

export function Photo({ id, alt, position = "center 15%", inv = false, w = 110, h = 140 }: {
  id: number; alt: string; position?: string; inv?: boolean; w?: number; h?: number;
}) {
  return (
    <div style={{ position: "relative", width: w, height: h, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
      <img
        src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w * 2}&h=${h * 2}&fit=crop`}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: position, display: "block" }}
      />
      {inv && <div style={{ position: "absolute", inset: 0, background: "rgba(27,44,51,0.45)" }} />}
    </div>
  );
}

// Notched lapel: the collar and lapel meet with a triangular notch (V-cut) at the gorge line.
// Peaked lapel: the lapel points UPWARD and outward toward the shoulder, no inward notch.
export function IllusSuit({ inv, variant = "notched" }: { inv?: boolean; variant?: "notched" | "peaked" }) {
  const s = inv ? "rgba(255,255,255,0.92)" : T.ink;
  const f = inv ? "rgba(255,255,255,0.1)" : "rgba(27,44,51,0.10)";
  const fl = inv ? "rgba(255,255,255,0.18)" : "rgba(27,44,51,0.17)";

  return (
    <svg viewBox="0 0 120 170" fill="none" style={{ width: 96 }}>
      {/* Head */}
      <ellipse cx="60" cy="20" rx="12" ry="14" stroke={s} strokeWidth="1.8" fill={f} />

      {/* Body of jacket */}
      <path d="M22 60 L16 128 L104 128 L98 60" stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={f} />

      {/* Trouser legs */}
      <path d="M16 128 L12 164 L50 164 L60 136 L70 164 L108 164 L104 128" stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={f} />

      {/* Sleeves */}
      <path d="M22 60 L10 108 L20 110 L30 68" stroke={s} strokeWidth="1.8" strokeLinecap="round" fill={f} />
      <path d="M98 60 L110 108 L100 110 L90 68" stroke={s} strokeWidth="1.8" strokeLinecap="round" fill={f} />

      {variant === "notched" ? (
        <>
          {/*
            Notched lapel anatomy:
            - The collar rolls from the back over the shoulder.
            - The lapel folds back from the front button edge.
            - They meet at the "gorge line" — a NOTCH (triangular gap) is cut where they join.
            - The lapel points INWARD slightly at the notch, then the collar continues upward.
            Left side (viewer's left = jacket's right facing us):
          */}
          {/* Left lapel: rolls from about chest center, sweeps out to shoulder */}
          <path d="M60 58 L48 36 L34 50 L42 62 Z"
            stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
          {/* Notch cut — the V gap at the gorge, pointing inward */}
          <path d="M42 62 L52 56" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
          {/* Right lapel */}
          <path d="M60 58 L72 36 L86 50 L78 62 Z"
            stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
          {/* Right notch */}
          <path d="M78 62 L68 56" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
          {/* Gorge line connecting across chest */}
          <line x1="52" y1="56" x2="68" y2="56" stroke={s} strokeWidth="1.4" strokeOpacity="0.6" />
          {/* Collar band above lapels */}
          <path d="M48 36 L44 30 L60 26 L76 30 L72 36" stroke={s} strokeWidth="1.5" fill={f} />
        </>
      ) : (
        <>
          {/*
            Peaked lapel anatomy:
            - The lapel has a POINTED TIP that angles UPWARD toward the shoulder, past the gorge.
            - There is NO notch — the collar and lapel meet in a point, not a V-cut.
            - The peak shoots up and outward before curving back into the body line.
          */}
          {/* Left peaked lapel: tip angles UP toward shoulder */}
          <path d="M60 60 L44 34 L24 46 L38 64 Z"
            stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
          {/* The peak point extends upward — this is the defining feature */}
          <path d="M44 34 L24 46" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
          {/* Right peaked lapel */}
          <path d="M60 60 L76 34 L96 46 L82 64 Z"
            stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
          <path d="M76 34 L96 46" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
          {/* Clean join at chest — no notch, just the meeting point */}
          <line x1="38" y1="64" x2="82" y2="64" stroke={s} strokeWidth="1.4" strokeOpacity="0.5" />
          {/* Collar band */}
          <path d="M44 34 L42 27 L60 23 L78 27 L76 34" stroke={s} strokeWidth="1.5" fill={f} />
        </>
      )}

      {/* Shirt/tie running down center */}
      <path d="M60 58 L57 100 L60 108 L63 100 Z" stroke={s} strokeWidth="1.2" fill={f} />
      {/* Shirt buttons */}
      <circle cx="60" cy="78" r="2" stroke={s} strokeWidth="1.2" fill={f} />
      <circle cx="60" cy="90" r="2" stroke={s} strokeWidth="1.2" fill={f} />
      {/* Center seam */}
      <line x1="60" y1="62" x2="60" y2="128" stroke={s} strokeWidth="0.8" strokeDasharray="4 3" strokeOpacity="0.35" />
      {/* Trouser crease */}
      <line x1="45" y1="128" x2="42" y2="164" stroke={s} strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="75" y1="128" x2="78" y2="164" stroke={s} strokeWidth="0.8" strokeOpacity="0.3" />
    </svg>
  );
}

export function IllusTux({ inv }: { inv?: boolean }) {
  const s = inv ? "rgba(255,255,255,0.92)" : T.ink;
  const f = inv ? "rgba(255,255,255,0.1)" : "rgba(27,44,51,0.10)";
  const fl = inv ? "rgba(255,255,255,0.22)" : "rgba(27,44,51,0.18)";

  return (
    <svg viewBox="0 0 120 170" fill="none" style={{ width: 96 }}>
      {/* Head */}
      <ellipse cx="60" cy="20" rx="12" ry="14" stroke={s} strokeWidth="1.8" fill={f} />

      {/* Body */}
      <path d="M22 60 L16 128 L104 128 L98 60" stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={f} />

      {/* Trouser legs with side stripe */}
      <path d="M16 128 L12 164 L50 164 L60 136 L70 164 L108 164 L104 128" stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={f} />
      <line x1="32" y1="128" x2="28" y2="164" stroke={s} strokeWidth="1.6" />
      <line x1="88" y1="128" x2="92" y2="164" stroke={s} strokeWidth="1.6" />

      {/* Sleeves */}
      <path d="M22 60 L10 108 L20 110 L30 68" stroke={s} strokeWidth="1.8" strokeLinecap="round" fill={f} />
      <path d="M98 60 L110 108 L100 110 L90 68" stroke={s} strokeWidth="1.8" strokeLinecap="round" fill={f} />

      {/* Tuxedo: wide shawl/peaked lapels — the satin facing is a prominent shawl that rolls from shoulder to waist */}
      {/* Left shawl lapel — broad, no notch, curves continuously */}
      <path d="M60 62 L44 32 L22 52 L38 68 Z"
        stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
      {/* Right shawl lapel */}
      <path d="M60 62 L76 32 L98 52 L82 68 Z"
        stroke={s} strokeWidth="1.8" strokeLinejoin="round" fill={fl} />
      {/* Satin sheen line on lapels */}
      <path d="M44 32 L22 52" stroke={s} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.2" />
      <path d="M76 32 L98 52" stroke={s} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.2" />

      {/* Collar band */}
      <path d="M44 32 L42 26 L60 22 L78 26 L76 32" stroke={s} strokeWidth="1.5" fill={f} />

      {/* Bow tie */}
      <path d="M53 43 L48 40 L53 37 L60 40 L67 37 L72 40 L67 43 L60 40 Z"
        stroke={s} strokeWidth="1.2" fill={f} />
      <circle cx="60" cy="40" r="2" stroke={s} strokeWidth="1" fill={fl} />

      {/* Dress shirt buttons running down */}
      <circle cx="60" cy="76" r="2" stroke={s} strokeWidth="1.2" fill={fl} />
      <circle cx="60" cy="86" r="2" stroke={s} strokeWidth="1.2" fill={fl} />
      <circle cx="60" cy="96" r="2" stroke={s} strokeWidth="1.2" fill={fl} />
      <line x1="60" y1="66" x2="60" y2="128" stroke={s} strokeWidth="0.8" strokeDasharray="4 3" strokeOpacity="0.3" />
    </svg>
  );
}

export function IllusRing({ finish = "polished", inv }: { finish?: "polished" | "matte" | "hammered" | "silicone"; inv?: boolean }) {
  const s = inv ? "rgba(255,255,255,0.9)" : T.ink;
  const f = inv ? "rgba(255,255,255,0.1)" : "rgba(27,44,51,0.10)";
  const fh = inv ? "rgba(255,255,255,0.2)" : "rgba(27,44,51,0.15)";
  const dents = [[22,36],[30,32],[40,34],[50,31],[60,33],[70,35],[78,37],[25,41],[35,39],[48,38],[62,40],[74,42]];
  return (
    <svg viewBox="0 0 100 80" fill="none" style={{ width: 90 }}>
      <ellipse cx="50" cy="50" rx="36" ry="13" stroke={s} strokeWidth="1.8" fill={f} />
      <ellipse cx="50" cy="38" rx="36" ry="13" stroke={s} strokeWidth="1.8" fill={fh} />
      <line x1="14" y1="38" x2="14" y2="50" stroke={s} strokeWidth="1.8" />
      <line x1="86" y1="38" x2="86" y2="50" stroke={s} strokeWidth="1.8" />
      {finish === "polished" && <><ellipse cx="50" cy="38" rx="22" ry="8" stroke={s} strokeWidth="1" strokeOpacity="0.3" fill="none" /><path d="M30 34 Q50 30 70 34" stroke={s} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" /></>}
      {finish === "matte" && [20,26,32,38,44,50,56,62,68,74,80].map(x => <line key={x} x1={x} y1="31" x2={x} y2="44" stroke={s} strokeWidth="0.8" strokeOpacity="0.2" />)}
      {finish === "hammered" && dents.map(([cx, cy], i) => <ellipse key={i} cx={cx} cy={cy} rx="3.5" ry="2" stroke={s} strokeWidth="0.9" strokeOpacity="0.35" fill="none" />)}
      {finish === "silicone" && <><path d="M14 44 Q50 48 86 44" stroke={s} strokeWidth="1" strokeOpacity="0.3" fill="none" /><path d="M14 42 Q50 46 86 42" stroke={s} strokeWidth="0.5" strokeOpacity="0.2" fill="none" /></>}
    </svg>
  );
}

export function IllusRingWidth({ width, inv }: { width: "2mm" | "4mm" | "6mm" | "8mm"; inv?: boolean }) {
  const s = inv ? "rgba(255,255,255,0.9)" : T.ink;
  const f = inv ? "rgba(255,255,255,0.1)" : "rgba(27,44,51,0.10)";
  const fh = inv ? "rgba(255,255,255,0.18)" : "rgba(27,44,51,0.14)";
  const h = { "2mm": 6, "4mm": 12, "6mm": 18, "8mm": 24 }[width] || 12;
  const cy1 = 42 - h / 2; const cy2 = 42 + h / 2;
  return (
    <svg viewBox="0 0 110 84" fill="none" style={{ width: 90 }}>
      <ellipse cx="50" cy={cy2} rx="34" ry="11" stroke={s} strokeWidth="1.8" fill={f} />
      <ellipse cx="50" cy={cy1} rx="34" ry="11" stroke={s} strokeWidth="1.8" fill={fh} />
      <line x1="16" y1={cy1} x2="16" y2={cy2} stroke={s} strokeWidth="1.8" />
      <line x1="84" y1={cy1} x2="84" y2={cy2} stroke={s} strokeWidth="1.8" />
      <line x1="88" y1={cy1} x2="92" y2={cy1} stroke={s} strokeWidth="1" strokeOpacity="0.6" />
      <line x1="88" y1={cy2} x2="92" y2={cy2} stroke={s} strokeWidth="1" strokeOpacity="0.6" />
      <text x="94" y={(cy1 + cy2) / 2 + 4} fill={s} fontSize="8" fontFamily="Inter, sans-serif" fillOpacity="0.7">{width}</text>
    </svg>
  );
}

export function CityIllus({ city, inv }: { city: string; inv?: boolean }) {
  const s = inv ? "rgba(255,255,255,0.9)" : T.ink;
  const f = inv ? "rgba(255,255,255,0.08)" : "rgba(27,44,51,0.08)";
  const fh = inv ? "rgba(255,255,255,0.15)" : "rgba(27,44,51,0.12)";
  const renderCity = () => {
    switch (city) {
      case "krakow": return <><rect x="0" y="75" width="140" height="25" fill={f} /><rect x="15" y="55" width="22" height="20" stroke={s} strokeWidth="1.5" fill={f} /><rect x="45" y="45" width="18" height="30" stroke={s} strokeWidth="1.5" fill={f} /><rect x="70" y="30" width="14" height="45" stroke={s} strokeWidth="1.5" fill={f} /><path d="M70 30 L77 18 L84 30" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="77" y1="18" x2="77" y2="12" stroke={s} strokeWidth="1.5" /><rect x="95" y="48" width="20" height="27" stroke={s} strokeWidth="1.5" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "budapest": return <><path d="M0 72 Q35 60 70 72 Q105 84 140 72" stroke={s} strokeWidth="1.5" fill={f} /><path d="M10 72 L10 85 L130 85 L130 72" stroke={s} strokeWidth="1.2" fill={f} />{[25,45,65,85,105,120].map((x,i) => <line key={i} x1={x} y1="68" x2={x} y2="85" stroke={s} strokeWidth="1" strokeOpacity="0.5" />)}<rect x="48" y="28" width="44" height="44" stroke={s} strokeWidth="1.5" fill={f} /><path d="M48 28 L70 10 L92 28" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="0" y1="88" x2="140" y2="88" stroke={s} strokeWidth="1.5" /></>;
      case "edinburgh": return <><path d="M30 75 L30 50 L50 38 L70 50 L70 75" stroke={s} strokeWidth="1.5" fill={f} /><path d="M50 38 L50 22" stroke={s} strokeWidth="1.5" /><path d="M42 28 L58 28 L58 22 L50 16 L42 22 Z" stroke={s} strokeWidth="1.5" fill={fh} /><rect x="82" y="48" width="30" height="27" stroke={s} strokeWidth="1.5" fill={f} /><path d="M82 48 L97 36 L112 48" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "amsterdam": return <>{[[10,65,18,35],[32,60,16,40],[52,55,20,45],[76,58,16,42],[96,62,18,38],[116,66,16,34]].map(([x,y,w,h],i) => <g key={i}><rect x={x} y={y} width={w} height={h} stroke={s} strokeWidth="1.5" fill={f} /><path d={`M${x} ${y} L${x+w/2} ${y-10} L${x+w} ${y}`} stroke={s} strokeWidth="1.5" fill={fh} /></g>)}<path d="M0 78 Q70 74 140 78" stroke={s} strokeWidth="1.8" fill="none" /></>;
      case "prague": return <><rect x="50" y="25" width="40" height="50" stroke={s} strokeWidth="1.5" fill={f} /><path d="M50 25 L70 10 L90 25" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="70" y1="10" x2="70" y2="4" stroke={s} strokeWidth="1.5" /><circle cx="70" cy="4" r="2" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="15" y="48" width="28" height="27" stroke={s} strokeWidth="1.5" fill={f} /><path d="M15 48 L29 36 L43 48" stroke={s} strokeWidth="1.5" fill={fh} /><rect x="97" y="44" width="28" height="31" stroke={s} strokeWidth="1.5" fill={f} /><path d="M97 44 L111 32 L125 44" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "ibiza": return <><path d="M20 75 Q40 60 60 65 Q80 55 110 70 L120 75" stroke={s} strokeWidth="1.5" fill={f} /><path d="M55 65 L55 30 L70 20 L85 30 L85 65" stroke={s} strokeWidth="1.5" fill={f} /><path d="M55 30 L70 20 L85 30" stroke={s} strokeWidth="1.5" fill={fh} /><path d="M0 78 Q70 72 140 78 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><circle cx="108" cy="22" r="8" stroke={s} strokeWidth="1.5" fill={fh} /></>;
      case "reykjavik": return <><path d="M0 60 Q20 50 40 55 Q60 45 80 52 Q100 42 120 48 L140 50 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M50 55 L50 35 L60 28 L70 35 L70 55" stroke={s} strokeWidth="1.5" fill={fh} /><path d="M0 65 Q30 58 60 62 Q90 58 140 64" stroke={s} strokeWidth="1" strokeOpacity="0.4" fill="none" /><circle cx="100" cy="20" r="10" stroke={s} strokeWidth="1.5" fill={f} />{[0,60,120,180,240,300].map((a,i) => <line key={i} x1={100+10*Math.cos(a*Math.PI/180)} y1={20+10*Math.sin(a*Math.PI/180)} x2={100+16*Math.cos(a*Math.PI/180)} y2={20+16*Math.sin(a*Math.PI/180)} stroke={s} strokeWidth="1" strokeOpacity="0.4" />)}</>;
      case "lisbon": return <><path d="M0 70 Q30 55 60 62 Q90 50 140 58 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><rect x="40" y="38" width="20" height="32" stroke={s} strokeWidth="1.5" fill={f} /><path d="M40 38 L50 28 L60 38" stroke={s} strokeWidth="1.5" fill={fh} /><rect x="70" y="45" width="16" height="25" stroke={s} strokeWidth="1.5" fill={f} /><path d="M70 45 L78 36 L86 45" stroke={s} strokeWidth="1.5" fill={fh} /><rect x="95" y="50" width="14" height="20" stroke={s} strokeWidth="1.5" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "tallinn": return <><rect x="45" y="20" width="50" height="55" stroke={s} strokeWidth="1.5" fill={f} /><path d="M45 20 L70 8 L95 20" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="70" y1="8" x2="70" y2="2" stroke={s} strokeWidth="2" /><rect x="35" y="40" width="14" height="35" stroke={s} strokeWidth="1.2" fill={f} /><path d="M35 40 L42 32 L49 40" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="91" y="42" width="14" height="33" stroke={s} strokeWidth="1.2" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "vegas": return <><rect x="10" y="25" width="20" height="50" stroke={s} strokeWidth="1.5" fill={f} /><rect x="35" y="15" width="18" height="60" stroke={s} strokeWidth="1.5" fill={f} /><rect x="58" y="8" width="24" height="67" stroke={s} strokeWidth="1.8" fill={f} /><rect x="87" y="20" width="20" height="55" stroke={s} strokeWidth="1.5" fill={f} /><rect x="112" y="30" width="18" height="45" stroke={s} strokeWidth="1.5" fill={f} />{[[14,32],[14,42],[14,52],[38,22],[38,32],[38,42],[38,52],[62,15],[62,25],[62,35],[62,45],[62,55],[90,28],[90,38],[90,48],[115,38],[115,48]].map(([x,y],i) => <rect key={i} x={x} y={y} width={3} height={4} fill={s} fillOpacity="0.5" />)}<path d="M0 75 Q70 70 140 75" stroke={s} strokeWidth="0.5" strokeOpacity="0.3" fill="none" /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "dubai": return <><path d="M60 10 L60 75" stroke={s} strokeWidth="3" /><path d="M60 10 Q68 30 65 50" stroke={s} strokeWidth="1.5" fill="none" /><rect x="30" y="40" width="16" height="35" stroke={s} strokeWidth="1.5" fill={f} /><rect x="50" y="28" width="18" height="47" stroke={s} strokeWidth="1.5" fill={f} /><rect x="72" y="32" width="16" height="43" stroke={s} strokeWidth="1.5" fill={f} /><rect x="92" y="45" width="14" height="30" stroke={s} strokeWidth="1.5" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "marbella": return <><path d="M0 65 Q40 50 80 58 Q110 52 140 58 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><circle cx="100" cy="20" r="12" stroke={s} strokeWidth="1.5" fill={fh} /><path d="M100 8 L100 2" stroke={s} strokeWidth="1.5" />{[0,45,90,135,180,225,270,315].map((a,i) => <line key={i} x1={100+12*Math.cos(a*Math.PI/180)} y1={20+12*Math.sin(a*Math.PI/180)} x2={100+18*Math.cos(a*Math.PI/180)} y2={20+18*Math.sin(a*Math.PI/180)} stroke={s} strokeWidth="1" strokeOpacity="0.5" />)}<path d="M20 60 Q30 40 40 58" stroke={s} strokeWidth="1.5" fill={f} /><path d="M50 58 Q60 38 70 56" stroke={s} strokeWidth="1.5" fill={f} /></>;
      case "tenerife": return <><path d="M0 70 Q30 55 60 62 Q90 55 140 65 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M65 62 L70 20 L75 62" stroke={s} strokeWidth="2" fill={fh} /><path d="M62 30 Q70 15 78 30" stroke={s} strokeWidth="1.5" fill="none" strokeOpacity="0.5" /><circle cx="110" cy="25" r="10" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="0" y1="72" x2="140" y2="72" stroke={s} strokeWidth="1" strokeOpacity="0.4" /></>;
      case "valThorens": return <><path d="M0 80 Q20 50 40 60 Q60 30 80 45 Q100 20 120 35 L140 30 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M60 45 L70 25 L80 45" stroke={s} strokeWidth="1.5" fill={fh} /><path d="M80 45 L90 28 L100 35 L95 45" stroke={s} strokeWidth="1" fill={fh} strokeOpacity="0.7" /><path d="M0 68 Q70 60 140 65" stroke={s} strokeWidth="1" strokeOpacity="0.3" fill="none" /></>;
      case "verbier": return <><path d="M0 75 Q25 45 50 55 Q70 30 95 42 Q115 25 140 35 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M55 55 L65 32 L75 55" stroke={s} strokeWidth="1.5" fill={fh} /><rect x="58" y="55" width="14" height="10" stroke={s} strokeWidth="1" fill={fh} /><path d="M50 62 L55 55 L65 70 L75 55 L80 62" stroke={s} strokeWidth="1" strokeOpacity="0.4" fill="none" /></>;
      case "algarve": return <><path d="M0 65 Q35 55 70 60 Q100 52 140 58 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M15 65 Q20 50 30 55 Q25 65 15 65 Z" stroke={s} strokeWidth="1.2" fill={fh} /><path d="M40 62 Q45 45 55 50 Q50 62 40 62 Z" stroke={s} strokeWidth="1.2" fill={fh} /><circle cx="105" cy="22" r="11" stroke={s} strokeWidth="1.5" fill={fh} />{[0,45,90,135,180,225,270,315].map((a,i) => <line key={i} x1={105+11*Math.cos(a*Math.PI/180)} y1={22+11*Math.sin(a*Math.PI/180)} x2={105+17*Math.cos(a*Math.PI/180)} y2={22+17*Math.sin(a*Math.PI/180)} stroke={s} strokeWidth="1" strokeOpacity="0.5" />)}</>;
      case "lakeDistrict": return <><path d="M0 70 Q20 45 40 55 Q60 35 80 50 Q100 30 120 45 Q130 40 140 50 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M0 70 Q20 45 40 55 Q60 35 80 50 Q100 30 120 45 Q130 40 140 50" stroke={s} strokeWidth="1.8" fill="none" /><path d="M0 78 Q70 72 140 78" stroke={s} strokeWidth="1.5" strokeOpacity="0.6" fill={fh} /></>;
      case "scotland": return <><path d="M0 65 Q20 40 45 50 Q65 30 85 44 Q105 25 130 38 L140 35 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M0 65 Q20 40 45 50 Q65 30 85 44 Q105 25 130 38" stroke={s} strokeWidth="1.8" fill="none" /><path d="M0 75 Q70 68 140 75" stroke={s} strokeWidth="1.2" strokeOpacity="0.5" fill={fh} /></>;
      case "ireland": return <><path d="M0 65 Q25 45 50 55 Q75 40 100 50 Q120 42 140 48 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M0 65 Q25 45 50 55 Q75 40 100 50 Q120 42 140 48" stroke={s} strokeWidth="1.8" fill="none" /><path d="M55 55 L55 35 L65 25 L75 35 L75 55" stroke={s} strokeWidth="1.5" fill={fh} /></>;
      case "manchester": return <><rect x="10" y="40" width="20" height="35" stroke={s} strokeWidth="1.5" fill={f} /><rect x="35" y="28" width="24" height="47" stroke={s} strokeWidth="1.5" fill={f} /><rect x="62" y="18" width="16" height="57" stroke={s} strokeWidth="1.8" fill={f} /><rect x="81" y="32" width="22" height="43" stroke={s} strokeWidth="1.5" fill={f} /><rect x="106" y="44" width="24" height="31" stroke={s} strokeWidth="1.5" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "bristol": return <><path d="M10 65 Q70 55 130 65" stroke={s} strokeWidth="2" fill="none" /><path d="M10 65 L10 75 L130 75 L130 65" stroke={s} strokeWidth="1.2" fill={f} /><rect x="35" y="32" width="30" height="33" stroke={s} strokeWidth="1.5" fill={f} /><path d="M35 32 L50 20 L65 32" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="0" y1="78" x2="140" y2="78" stroke={s} strokeWidth="1.5" /></>;
      case "bath": return <><rect x="20" y="38" width="100" height="37" stroke={s} strokeWidth="1.8" fill={f} /><path d="M20 38 L70 18 L120 38" stroke={s} strokeWidth="1.8" fill={fh} />{[30,50,70,90,110].map((x,i) => <rect key={i} x={x} y={50} width={8} height={12} stroke={s} strokeWidth="1" fill={fh} />)}<line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
      case "norfolk": return <><path d="M0 65 Q35 58 70 62 Q105 66 140 60 L140 100 L0 100 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M25 62 L35 45 L60 48 L60 62 Z" stroke={s} strokeWidth="1.5" fill={f} /><path d="M35 45 L35 30" stroke={s} strokeWidth="1.5" /><path d="M35 30 L55 38 L35 46 Z" stroke={s} strokeWidth="1.5" fill={fh} /></>;
      case "countryHouse": return <><rect x="20" y="42" width="100" height="38" stroke={s} strokeWidth="1.8" fill={f} /><path d="M20 42 L70 18 L120 42" stroke={s} strokeWidth="1.8" fill={fh} /><rect x="30" y="54" width="12" height="14" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="48" y="54" width="12" height="14" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="80" y="54" width="12" height="14" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="98" y="54" width="12" height="14" stroke={s} strokeWidth="1.2" fill={fh} /><rect x="58" y="58" width="24" height="22" stroke={s} strokeWidth="1.2" fill={fh} /><line x1="0" y1="80" x2="140" y2="80" stroke={s} strokeWidth="1.5" /></>;
      default: return <><rect x="0" y="75" width="140" height="25" fill={f} /><rect x="15" y="55" width="22" height="20" stroke={s} strokeWidth="1.5" fill={f} /><rect x="45" y="45" width="18" height="30" stroke={s} strokeWidth="1.5" fill={f} /><rect x="70" y="30" width="14" height="45" stroke={s} strokeWidth="1.5" fill={f} /><path d="M70 30 L77 18 L84 30" stroke={s} strokeWidth="1.5" fill={fh} /><line x1="77" y1="18" x2="77" y2="12" stroke={s} strokeWidth="1.5" /><rect x="95" y="48" width="20" height="27" stroke={s} strokeWidth="1.5" fill={f} /><line x1="0" y1="75" x2="140" y2="75" stroke={s} strokeWidth="1.5" /></>;
    }
  };
  return (
    <svg viewBox="0 0 140 100" fill="none" style={{ width: 120 }}>
      {renderCity()}
    </svg>
  );
}
