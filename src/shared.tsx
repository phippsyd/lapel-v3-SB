import { useState, type ReactNode } from "react";
import { T } from "./theme";

export type Quote = { quote: string; author: string };
export type Plate = { img: string; caption: string; credit?: { name: string; url: string } };
export type AffLinkData = { label: string; url: string };
export type OptionMeta = Record<string, string>;
export type Option = {
  id?: string;
  label: string;
  tag?: string;
  price?: string;
  desc?: string;
  stagInfo?: string;
  meta?: OptionMeta;
  pros?: string[];
  cons?: string[];
  illus?: ((inv: boolean) => ReactNode) | ReactNode;
  img?: string;
  swatch?: string; // hex colour for colour-picker questions
  photoCredit?: { name: string; url: string };
  aff?: AffLinkData;
};
export type Question = {
  key: string;
  question: string;
  sub?: string;
  education?: string;
  img?: string; // optional hero image shown between the header and the options
  options: Option[];
  groomsSay?: Quote[];
};
export type Answers = Record<string, string>;

export function Rule() {
  return <div style={{ height: 1, background: T.rule, margin: "24px 0" }} />;
}

export function Tag({ children, color }: { children: ReactNode; color?: string }) {
  const bg = color === T.green ? "#D6D2CC" : color === T.amber ? T.amberLight : T.navyLight;
  return (
    <span style={{ display: "inline-block", background: bg, color: color || T.navy, fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 2 }}>
      {children}
    </span>
  );
}

export function GroomsSay({ quotes }: { quotes: Quote[] }) {
  return (
    <div style={{ background: T.navyLight, border: "1px solid " + T.rule, borderRadius: 6, padding: "22px 28px", marginTop: 28 }}>
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 18 }}>
        <div style={{ width: 16, height: 1.5, background: T.navy, borderRadius: 1, opacity: 0.5 }} />
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: T.navy }}>What grooms say</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {quotes.map((q, i) => (
          <div key={i} style={{ paddingLeft: 12, borderLeft: "2px solid " + T.rule }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 15, color: T.ink, lineHeight: 1.6, marginBottom: 6 }}>"{q.quote}"</div>
            <div style={{ fontSize: 11, color: T.mid }}>{q.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GoodToKnow({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: T.amberLight, border: "1px solid #C9B9A8", borderRadius: 4, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 10, alignItems: "flex-start" }}>
      <div style={{ fontSize: 14, marginTop: 1, flexShrink: 0 }}>&#9432;</div>
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.amber, marginBottom: 4 }}>Good to know</div>
        <div style={{ fontSize: 13, color: T.ink, lineHeight: 1.65 }}>{children}</div>
      </div>
    </div>
  );
}

export function AffLink({ label, url, light }: AffLinkData & { light?: boolean }) {
  const c = light ? "rgba(255,255,255,0.9)" : T.navy;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
      style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 600, color: c, textDecoration: "none", borderBottom: "1px solid " + c, paddingBottom: 1, transition: "opacity 0.15s" }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
      {label} &rarr;
    </a>
  );
}

export function Progress({ step, total, onBack }: { step: number; total: number; onBack: (() => void) | null }) {
  const pct = (step / total) * 100;
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <div style={{ display: "flex", gap: 3, flex: 1 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ height: 3, flex: 1, borderRadius: 2, background: i < step ? T.navy : T.rule, transition: "background 0.3s" }} />
          ))}
        </div>
        <div style={{ fontSize: 11, color: T.mid, whiteSpace: "nowrap", fontWeight: 500 }}>{step} / {total}</div>
        {onBack && (
          <button onClick={onBack}
            style={{ background: "none", border: "none", fontSize: 11, color: T.mid, cursor: "pointer", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0 0 0 4px" }}>
            &larr; Back
          </button>
        )}
      </div>
    </div>
  );
}

export function IntroScreen({ title, description, steps, quote, quoteAuthor, onStart, illustration, secondaryLabel, onSecondary, ctaLabel, plates }: {
  eyebrow?: string;
  title: string;
  description: string;
  steps?: string[];
  quote?: string;
  quoteAuthor?: string;
  onStart: () => void;
  illustration?: ReactNode;
  secondaryLabel?: string;
  onSecondary?: () => void;
  ctaLabel?: string;
  plates?: Plate[];
}) {
  const hasPlates = !!plates && plates.length > 0;

  const textColumn = (
    <div style={{ maxWidth: 560 }}>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 42, color: T.ink, lineHeight: 1.08, marginBottom: 14, letterSpacing: "-0.01em" }}>{title}</h2>
      <p style={{ fontSize: 15, color: T.mid, lineHeight: 1.7, marginBottom: steps ? 18 : 28, maxWidth: 480 }}>{description}</p>

      {steps && (
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid, marginBottom: 28, lineHeight: 2 }}>
          {steps.join("  ·  ")}
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <button onClick={onStart}
          style={{ background: T.dark, color: "white", border: "none", padding: "14px 32px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, transition: "opacity 0.15s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
          {ctaLabel || "Start"} &rarr;
        </button>
        {secondaryLabel && onSecondary && (
          <button onClick={onSecondary}
            style={{ background: "none", border: "none", padding: 0, fontSize: 12, fontWeight: 700, color: T.navy, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", borderBottom: "1px solid " + T.navy }}>
            {secondaryLabel} &rarr;
          </button>
        )}
      </div>

      {(quote || illustration) && (
        <div style={{ display: "flex", gap: 32, alignItems: "center", marginTop: 40, paddingTop: 22, borderTop: "1px solid " + T.rule, flexWrap: "wrap", maxWidth: 480 }}>
          {illustration && <div className="intro-illus" style={{ flexShrink: 0 }}>{illustration}</div>}
          {quote && (
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic", fontSize: 15, color: T.mid, lineHeight: 1.6, marginBottom: 6 }}>"{quote}"</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: T.mid, opacity: 0.8 }}>{quoteAuthor}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (!hasPlates) return <div style={{ maxWidth: 680 }}>{textColumn}</div>;

  return (
    <div className="intro-spread" style={{ maxWidth: 1080, paddingTop: 12 }}>
      {textColumn}
      <div className="intro-plates" style={{ position: "relative", height: 440, minWidth: 0 }}>
        {plates!.slice(0, 2).map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            ...(i === 0
              ? { top: 0, right: 12, width: "58%", transform: "rotate(1.5deg)", zIndex: 1 }
              : { bottom: 0, left: 0, width: "50%", transform: "rotate(-2deg)", zIndex: 2 }),
            background: "#FFFFFF", border: "1px solid " + T.rule, padding: "12px 12px 10px",
            boxShadow: "0 8px 28px rgba(27,44,51,0.10)",
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
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: T.mid, textAlign: "center", marginTop: 9 }}>
              {p.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OptionCard({ opt, isChosen, onChoose, portrait, landscape }: { opt: Option; isChosen: boolean; onChoose: () => void; portrait?: boolean; landscape?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const hasVisual = !!(opt.img || opt.illus);

  // Colour swatch card — a large colour block, label and description below
  if (opt.swatch) {
    const isLight = opt.swatch === "#C8C4BB";
    const textOnSwatch = isLight ? "#1B2C33" : "rgba(255,255,255,0.92)";
    return (
      <button onClick={onChoose}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none", border: `2px solid ${isChosen ? T.navy : hovered ? "#B5B1AC" : T.rule}`,
          borderRadius: 8, padding: 0, cursor: "pointer", overflow: "hidden",
          transition: "border-color 0.15s, box-shadow 0.15s",
          boxShadow: isChosen ? "0 4px 20px rgba(27,44,51,0.22)" : hovered ? "0 2px 12px rgba(0,0,0,0.07)" : "none",
          display: "flex", flexDirection: "column", width: "100%", textAlign: "left", fontFamily: "Inter, sans-serif",
        }}>
        <div style={{ background: opt.swatch, aspectRatio: "3 / 2", width: "100%", position: "relative", display: "flex", alignItems: "flex-end", padding: "12px 14px", boxSizing: "border-box" }}>
          {opt.tag && <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: textOnSwatch, opacity: 0.8 }}>{opt.tag}</div>}
          <div style={{ position: "absolute", top: 10, right: 10, width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: T.navy, opacity: isChosen ? 1 : 0, transform: isChosen ? "scale(1)" : "scale(0.5)", transition: "opacity 0.15s, transform 0.15s" }}>&#10003;</div>
        </div>
        <div style={{ padding: "12px 14px 14px", background: isChosen ? T.navy : hovered ? "#D6D2CC" : T.white, transition: "background 0.15s", flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: isChosen ? "white" : T.ink, marginBottom: opt.desc ? 4 : 0 }}>{opt.label}</div>
          {opt.desc && <div style={{ fontSize: 12, color: isChosen ? "rgba(255,255,255,0.7)" : T.mid, lineHeight: 1.55 }}>{opt.desc}</div>}
          {opt.aff && <div style={{ marginTop: 8 }}><AffLink label={opt.aff.label} url={opt.aff.url} light={isChosen} /></div>}
        </div>
      </button>
    );
  }

  if (portrait && hasVisual) {
    return (
      <button onClick={onChoose}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none", border: `1.5px solid ${isChosen ? T.navy : hovered ? "#B5B1AC" : T.rule}`,
          borderRadius: 6, padding: 0, cursor: "pointer", overflow: "hidden",
          transition: "border-color 0.15s, box-shadow 0.15s",
          boxShadow: isChosen ? "0 4px 20px rgba(85,83,65,0.16)" : hovered ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
          display: "flex", flexDirection: "column", width: "100%", textAlign: "left", fontFamily: "Inter, sans-serif",
        }}>
        <div style={{ width: "100%", ...(landscape ? { height: 200 } : opt.img ? { aspectRatio: "4 / 5" } : { height: 220 }), background: "#FFFFFF", position: "relative", flexShrink: 0, overflow: "hidden" }}>
          {opt.img && <img src={opt.img} alt={opt.label} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />}
          {opt.img && opt.photoCredit && (
            <a href={opt.photoCredit.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
              style={{ position: "absolute", bottom: 6, left: 8, fontSize: 9, color: "rgba(255,255,255,0.85)", textShadow: "0 1px 3px rgba(0,0,0,0.6)", textDecoration: "none", fontFamily: "Inter, sans-serif" }}>
              Photo: {opt.photoCredit.name}
            </a>
          )}
          {!opt.img && opt.illus && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
              {typeof opt.illus === "function" ? opt.illus(isChosen) : opt.illus}
            </div>
          )}
          <div style={{
            position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: "50%",
            background: T.navy, color: "white", display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 700,
            opacity: isChosen ? 1 : 0, transform: isChosen ? "scale(1)" : "scale(0.5)",
            transition: "opacity 0.15s, transform 0.15s", pointerEvents: "none",
          }}>&#10003;</div>
        </div>
        <div style={{
          padding: "14px 16px", flex: 1,
          background: isChosen ? T.navy : hovered ? "#D6D2CC" : T.white,
          transition: "background 0.15s",
        }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: isChosen ? "white" : T.ink, lineHeight: 1.1 }}>{opt.label}</div>
            {opt.tag && <Tag color={isChosen ? T.green : undefined}>{opt.tag}</Tag>}
            {opt.price && <span style={{ fontSize: 11, fontWeight: 700, color: isChosen ? "rgba(255,255,255,0.85)" : T.navy }}>{opt.price}</span>}
          </div>
          {opt.desc && <div style={{ fontSize: 12, color: isChosen ? "rgba(255,255,255,0.75)" : T.mid, lineHeight: 1.6, marginBottom: opt.pros || opt.aff ? 8 : 0 }}>{opt.desc}</div>}
          {opt.pros && (
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: opt.aff ? 8 : 0 }}>
              {opt.pros.map((p, i) => (
                <div key={i} style={{ fontSize: 11, color: isChosen ? "rgba(255,255,255,0.75)" : T.green, display: "flex", gap: 5, alignItems: "flex-start" }}>
                  <span style={{ lineHeight: 1.5 }}>&#10003;</span> {p}
                </div>
              ))}
            </div>
          )}
          {opt.cons && (
            <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: opt.aff ? 8 : 0 }}>
              {opt.cons.map((c, i) => (
                <div key={i} style={{ fontSize: 11, color: isChosen ? "rgba(255,255,255,0.5)" : T.mid, display: "flex", gap: 5, alignItems: "flex-start" }}>
                  <span style={{ lineHeight: 1.5 }}>&mdash;</span> {c}
                </div>
              ))}
            </div>
          )}
          {opt.aff && <div style={{ marginTop: 8 }}><AffLink label={opt.aff.label} url={opt.aff.url} light={isChosen} /></div>}
        </div>
      </button>
    );
  }

  return (
    <button onClick={onChoose}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isChosen ? T.navy : hovered ? "#D6D2CC" : T.white,
        border: `1.5px solid ${isChosen ? T.navy : hovered ? "#B5B1AC" : T.rule}`,
        borderRadius: 6, padding: "20px 24px", cursor: "pointer",
        transition: "background 0.15s, border-color 0.15s, box-shadow 0.15s",
        boxShadow: isChosen ? "0 4px 20px rgba(85,83,65,0.16)" : hovered ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
        display: "flex", gap: 20, alignItems: "flex-start", width: "100%", textAlign: "left", fontFamily: "Inter, sans-serif",
      }}>
      {opt.img && (
        <div style={{ flexShrink: 0, width: 80, height: 80, borderRadius: 4, overflow: "hidden", background: "#FFFFFF", transition: "opacity 0.15s", opacity: isChosen ? 1 : 0.9 }}>
          <img src={opt.img} alt={opt.label} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        </div>
      )}
      {!opt.img && opt.illus && (
        <div className="option-illus" style={{ flexShrink: 0, opacity: isChosen ? 1 : 0.8, transition: "opacity 0.15s" }}>
          {typeof opt.illus === "function" ? opt.illus(isChosen) : opt.illus}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 21, color: isChosen ? "white" : T.ink, lineHeight: 1.1 }}>{opt.label}</div>
          {opt.tag && <Tag color={isChosen ? T.green : undefined}>{opt.tag}</Tag>}
          {opt.price && <span style={{ fontSize: 12, fontWeight: 700, color: isChosen ? "rgba(255,255,255,0.85)" : T.navy }}>{opt.price}</span>}
        </div>
        {opt.desc && <div style={{ fontSize: 13, color: isChosen ? "rgba(255,255,255,0.75)" : T.mid, lineHeight: 1.65, marginBottom: opt.stagInfo || opt.pros || opt.meta ? 8 : 0 }}>{opt.desc}</div>}
        {opt.stagInfo && <div style={{ fontSize: 12, color: isChosen ? "rgba(255,255,255,0.65)" : T.mid, lineHeight: 1.55, marginBottom: 4, fontStyle: "italic" }}>{opt.stagInfo}</div>}
        {opt.meta && (
          <div style={{ display: "flex", gap: 14, marginTop: 8, flexWrap: "wrap" }}>
            {Object.entries(opt.meta).map(([k, v]) => (
              <span key={k} style={{ fontSize: 11, color: isChosen ? "rgba(255,255,255,0.6)" : T.mid }}>
                <span style={{ fontWeight: 600 }}>{k}:</span> {v}
              </span>
            ))}
          </div>
        )}
        {opt.pros && (
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 3 }}>
            {opt.pros.map((p, i) => (
              <div key={i} style={{ fontSize: 12, color: isChosen ? "rgba(255,255,255,0.75)" : T.green, display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ lineHeight: 1.5 }}>&#10003;</span> {p}
              </div>
            ))}
          </div>
        )}
        {opt.cons && (
          <div style={{ display: "flex", flexDirection: "column", gap: 3, marginTop: opt.pros ? 4 : 8 }}>
            {opt.cons.map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: isChosen ? "rgba(255,255,255,0.5)" : T.mid, display: "flex", gap: 6, alignItems: "flex-start" }}>
                <span style={{ lineHeight: 1.5 }}>&mdash;</span> {c}
              </div>
            ))}
          </div>
        )}
        {opt.aff && <div style={{ marginTop: 12 }}><AffLink label={opt.aff.label} url={opt.aff.url} light={isChosen} /></div>}
      </div>
      <div style={{ fontSize: 16, color: isChosen ? "white" : "transparent", flexShrink: 0, transition: "color 0.15s, transform 0.15s", transform: isChosen ? "scale(1)" : "scale(0.5)" }}>&#10003;</div>
    </button>
  );
}

export function Journey({ questions, onComplete, onAnswerChange, skippable }: { questions: Question[]; onComplete: (a: Answers) => void; onAnswerChange?: (partial: Answers) => void; skippable?: boolean }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const safeStep = Math.min(step, questions.length - 1);
  const q = questions[safeStep];
  const chosen = answers[q.key];
  const choose = (val: string) => {
    const next = { ...answers, [q.key]: val };
    setAnswers(next);
    onAnswerChange?.(next);
    if (safeStep + 1 < questions.length) setStep(safeStep + 1);
    else onComplete(next);
  };
  const skip = () => {
    if (safeStep + 1 < questions.length) setStep(safeStep + 1);
    else onComplete(answers);
  };
  const isPortraitQuestion = q.options.some(opt => opt.img || opt.illus || opt.swatch);
  return (
    <div>
      <Progress step={step + 1} total={questions.length} onBack={step > 0 ? () => setStep(step - 1) : null} />
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, fontSize: 34, color: T.ink, marginBottom: 6, letterSpacing: "-0.01em" }}>{q.question}</h2>
      {q.sub && <p style={{ fontSize: 14, color: T.mid, marginBottom: q.education ? 18 : 28, lineHeight: 1.65 }}>{q.sub}</p>}
      {q.education && <GoodToKnow>{q.education}</GoodToKnow>}
      {q.img && (
        <div style={{ background: "#FFFFFF", border: "1px solid " + T.rule, borderRadius: 8, padding: 12, maxWidth: 460, marginBottom: 24 }}>
          <img src={q.img} alt={q.question} loading="lazy" style={{ width: "100%", display: "block", borderRadius: 4 }} />
        </div>
      )}
      {isPortraitQuestion ? (
        <div className="options-grid">
          {q.options.map((opt, i) => <OptionCard key={i} opt={opt} isChosen={chosen === (opt.id || opt.label)} onChoose={() => choose(opt.id || opt.label)} portrait={!!(opt.img || opt.illus)} />)}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 8 }}>
          {q.options.map((opt, i) => <OptionCard key={i} opt={opt} isChosen={chosen === (opt.id || opt.label)} onChoose={() => choose(opt.id || opt.label)} />)}
        </div>
      )}
      {skippable && (
        <button onClick={skip}
          style={{ background: "none", border: "none", padding: 0, marginTop: 14, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: T.mid, cursor: "pointer", borderBottom: "1px solid " + T.rule, fontFamily: "Inter, sans-serif" }}>
          Undecided — skip this one &rarr;
        </button>
      )}
      {q.groomsSay && <GroomsSay quotes={q.groomsSay} />}
    </div>
  );
}

export type Profile = { groomName: string; partnerName: string; weddingDate: string; venue: string };

export function Onboarding({ onComplete }: { onComplete: (p: Profile) => void }) {
  const [form, setForm] = useState<Profile>({ groomName: "", partnerName: "", weddingDate: "", venue: "" });
  const update = (k: keyof Profile, v: string) => setForm(f => ({ ...f, [k]: v }));
  const valid = form.groomName && form.partnerName && form.weddingDate;
  return (
    <div style={{ minHeight: "100vh", background: T.paper, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}>
      <div style={{ maxWidth: 480, width: "100%" }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 42, color: T.ink, marginBottom: 8 }}>Lapel</div>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: T.mid, marginBottom: 32 }}>The groom guide</div>
        <Rule />
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: T.ink, marginBottom: 8 }}>A few quick details.</div>
        <div style={{ fontSize: 14, color: T.mid, marginBottom: 32, lineHeight: 1.65 }}>This personalises your experience — your countdown, your timeline, your speech prompts.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { key: "groomName", label: "Your name", placeholder: "e.g. James" },
            { key: "partnerName", label: "Your partner's name", placeholder: "e.g. Sophie" },
            { key: "weddingDate", label: "Wedding date", placeholder: "", type: "date" },
            { key: "venue", label: "Venue (optional)", placeholder: "e.g. Ardington House, Oxfordshire" },
          ].map(field => (
            <div key={field.key}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.mid, marginBottom: 8 }}>{field.label}</div>
              <input type={field.type || "text"} placeholder={field.placeholder} value={form[field.key as keyof Profile]} onChange={e => update(field.key as keyof Profile, e.target.value)}
                style={{ width: "100%", padding: "12px 16px", border: "1px solid " + T.rule, borderRadius: 4, fontSize: 15, fontFamily: "Inter, sans-serif", background: T.white, color: T.ink, outline: "none" }} />
            </div>
          ))}
        </div>
        <button onClick={() => valid && onComplete(form)}
          style={{ marginTop: 32, width: "100%", background: valid ? T.dark : T.rule, color: valid ? "white" : T.mid, border: "none", padding: "16px", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: valid ? "pointer" : "default", borderRadius: 4, transition: "background 0.2s" }}>
          Get started &rarr;
        </button>
      </div>
    </div>
  );
}
