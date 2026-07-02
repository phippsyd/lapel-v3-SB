import { useState } from "react";
import { T } from "../theme";
import { GroomsSay, GoodToKnow } from "../shared";
import { usePersistentState } from "../persistence";

const blocks = [
  { id: "open", label: "Opening", hint: "Disarm the room immediately. A self-deprecating line or a subverted thank you. 30-60 seconds.", wordTarget: 80, tip: "Do not open with a dictionary definition or by introducing yourself. Start with something that makes the room exhale." },
  { id: "her", label: "The story", hint: "One specific moment that captures why you knew she was the one. Not a list of qualities — a scene.", wordTarget: 150, tip: "Specific beats general every time. A moment is more powerful than a description." },
  { id: "us", label: "What she means to you", hint: "Genuine, not performative. One or two sentences land harder than a paragraph.", wordTarget: 80, tip: "This is where the room goes quiet. Keep it brief and honest." },
  { id: "groomsmen", label: "The groomsmen", hint: "Brief, warm, one light dig minimum. Name each one. 45 seconds max.", wordTarget: 100, tip: "At least one of them should look slightly uncomfortable." },
  { id: "families", label: "The families", hint: "Both sides, equal time. Thank the in-laws genuinely.", wordTarget: 80, tip: "Her parents have just given away their daughter. Acknowledge that explicitly." },
  { id: "toast", label: "The toast", hint: "Short. Memorable. Make them raise their glass on a line worth repeating.", wordTarget: 50, tip: "Land on something warm and simple. The last thing they will remember." },
] as const;

const guideContent = [
  { heading: "How long should it be?", body: "4-5 minutes is the sweet spot. Long enough to be substantial, short enough that nobody loses attention. At roughly 130 words per minute, aim for 520-650 words. Most grooms write too much — cut ruthlessly. A tight 4-minute speech is always better than a meandering 8-minute one." },
  { heading: "When do you speak?", body: "At a UK wedding the traditional order is: father of the bride, then the groom, then the best man. The groom speaks second. Some couples change this order — check with whoever is MC-ing the reception." },
  { heading: "What structure works?", body: "Open with something disarming. Tell one specific story about her. Say what she means to you briefly and genuinely. Thank the groomsmen (with at least one light dig). Thank both sets of parents. Close with a toast. This structure works because it builds emotion without losing the room." },
  { heading: "What tone should you use?", body: "The tone that sounds like you. The most common mistake is writing the speech you think you should give rather than the one you would naturally tell. If you are dry and understated in real life, be dry and understated. An authentic quiet speech beats a failed attempt at comedy every time." },
  { heading: "How should you handle nerves?", body: "The audience is entirely on your side — they want you to do well. Practise reading it aloud until you know it well enough to look up from your notes. Eat something beforehand. One drink is fine; more is not. The nerves you feel beforehand are almost never visible from the room." },
  { heading: "Notes or memorise?", body: "Use notes. A small card is fine and most guests will never notice. Reading from your phone is also fine — keep the screen at maximum brightness and turn off notifications. Reading directly from printed A4 sheets is less ideal. If you use notes, know the material well enough that you are looking at the room, not the page." },
  { heading: "What to include about her", body: "One specific story or moment — not a list of qualities. 'She is kind and funny and beautiful' tells your guests nothing. 'The moment I knew' tells them everything. Keep it specific, keep it genuine, and keep it brief. The room will go quiet." },
  { heading: "What to definitely avoid", body: "Ex-partners. Long lists of names. Inside jokes that only three people will understand. Starting with 'According to the dictionary...' or 'For those who don't know me...'. Talking for more than 8 minutes under any circumstances." },
  { heading: "How do you close?", body: "The toast is the last thing they remember, so land on a single memorable line and raise your glass mid-sentence. It should feel natural, not like reading a stage direction. 'So please raise your glasses to [name] — the only person I have ever met who...' leads naturally into a toast." },
];

export function SpeechModule() {
  const [mode, setMode] = useState<null | "guide" | "write">(null);
  const [copied, setCopied] = useState(false);
  const [speech, setSpeech] = usePersistentState<Record<string, string>>("speech", { open: "", her: "", us: "", groomsmen: "", families: "", toast: "" });

  const wc = (t: string) => t ? t.split(/\s+/).filter(Boolean).length : 0;
  const totalWords = Object.values(speech).reduce((s, v) => s + wc(v), 0);
  const totalMins = Math.round(totalWords / 130 * 10) / 10;

  if (!mode) return (
    <div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 12 }}>
        <div style={{ width: 20, height: 1.5, background: T.mid, borderRadius: 1 }} />
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: T.mid }}>Speech · Builder</div>
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 42, color: T.ink, lineHeight: 1.08, marginBottom: 14, maxWidth: 500, letterSpacing: "-0.01em" }}>Your groom speech.</div>
      <div style={{ fontSize: 15, color: T.mid, lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>Learn how to approach it, or sit down and write it now.</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <button onClick={() => setMode("guide")} style={{ background: T.white, border: "1px solid " + T.rule, borderRadius: 4, padding: "32px 28px", cursor: "pointer", textAlign: "left", transition: "border-color 0.15s", fontFamily: "Inter, sans-serif" }}
          onMouseEnter={e => e.currentTarget.style.borderColor = T.navy} onMouseLeave={e => e.currentTarget.style.borderColor = T.rule}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.ink, marginBottom: 10 }}>How to write one</div>
          <div style={{ fontSize: 13, color: T.mid, lineHeight: 1.6, marginBottom: 16 }}>Length, structure, tone, nerves, what to say, what to avoid. Read this before you start writing.</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.navy, letterSpacing: "0.1em", textTransform: "uppercase" }}>Read the guide &rarr;</div>
        </button>
        <button onClick={() => setMode("write")} style={{ background: T.dark, border: "1px solid " + T.dark, borderRadius: 4, padding: "32px 28px", cursor: "pointer", textAlign: "left", fontFamily: "Inter, sans-serif" }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "white", marginBottom: 10 }}>Write mine now</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.6, marginBottom: 16 }}>All six sections on one page. Write as much or as little as you want. Come back to it any time.</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Start writing &rarr;</div>
        </button>
      </div>
    </div>
  );

  if (mode === "guide") return (
    <div>
      <button onClick={() => setMode(null)} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: T.mid, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", marginBottom: 32 }}>&larr; Back</button>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink, marginBottom: 6 }}>How to write a groom speech.</div>
      <div style={{ fontSize: 14, color: T.mid, marginBottom: 32 }}>Everything you need to know before you start writing.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid " + T.rule, borderRadius: 4, overflow: "hidden", marginBottom: 32 }}>
        {guideContent.map((item, i) => (
          <div key={i} style={{ padding: "24px 28px", borderBottom: i < guideContent.length - 1 ? "1px solid " + T.rule : "none", background: T.white }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 19, color: T.ink, marginBottom: 10 }}>{item.heading}</div>
            <div style={{ fontSize: 14, color: T.mid, lineHeight: 1.7 }}>{item.body}</div>
          </div>
        ))}
      </div>
      <GroomsSay quotes={[
        { quote: "4 minutes 20 seconds. Three laughs, one tear, perfect toast. Write it, time it, cut ruthlessly.", author: "u/speechadvice" },
        { quote: "The specific story about the moment I knew — that is what people remembered. Not the jokes.", author: "u/groomspeech" },
        { quote: "Read it aloud 20 times before the day. By the wedding it felt like talking, not reading.", author: "u/speechpractice" },
      ]} />
      <div style={{ marginTop: 28 }}>
        <button onClick={() => setMode("write")} style={{ background: T.dark, color: "white", border: "none", padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}>Start writing &rarr;</button>
      </div>
    </div>
  );

  return (
    <div>
      <button onClick={() => setMode(null)} style={{ background: "none", border: "none", fontSize: 12, fontWeight: 600, color: T.mid, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", marginBottom: 20 }}>&larr; Back</button>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 8 }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink }}>Your speech.</div>
        <div style={{ fontSize: 13, color: T.mid, textAlign: "right" }}>~{totalWords} words &middot; ~{totalMins} min &middot; <span style={{ color: T.green, fontWeight: 600 }}>&#10003; Saved</span></div>
      </div>
      <div style={{ fontSize: 13, color: T.mid, marginBottom: 32 }}>All sections on one page. Write in any order. Come back to finish sections later.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
        {blocks.map(block => {
          const words = wc(speech[block.id]);
          const pct = Math.min(words / block.wordTarget * 100, 100);
          return (
            <div key={block.id} style={{ background: T.white, border: "1px solid " + T.rule, borderRadius: 4, padding: "24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: T.ink }}>{block.label}</div>
                <div style={{ fontSize: 11, color: words > 20 ? T.green : T.mid, fontWeight: words > 20 ? 600 : 400 }}>{words > 20 ? "Drafted" : "~" + block.wordTarget + " words"}</div>
              </div>
              <div style={{ fontSize: 13, color: T.mid, fontStyle: "italic", marginBottom: 6, lineHeight: 1.5 }}>{block.hint}</div>
              <GoodToKnow>{block.tip}</GoodToKnow>
              <textarea value={speech[block.id]} onChange={e => setSpeech(s => ({ ...s, [block.id]: e.target.value }))} placeholder="Start writing..."
                style={{ width: "100%", minHeight: 100, padding: "12px 16px", border: "1px solid " + T.rule, borderRadius: 4, fontFamily: "Inter, sans-serif", fontSize: 14, color: T.ink, background: T.paper, resize: "vertical", lineHeight: 1.7, outline: "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                <div style={{ flex: 1, height: 3, background: T.rule, borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: pct + "%", height: "100%", background: pct >= 100 ? T.green : T.navy, borderRadius: 2, transition: "width 0.3s" }} />
                </div>
                <div style={{ fontSize: 11, color: T.mid }}>{words} / ~{block.wordTarget}w</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={() => {
            const text = blocks.map(b => speech[b.id]?.trim()).filter(Boolean).join("\n\n");
            navigator.clipboard.writeText(text).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2500);
            });
          }}
          style={{ background: T.dark, color: "white", border: "none", padding: "12px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}>
          {copied ? "\u2713 Copied" : "Copy full speech"}
        </button>
        <button
          onClick={() => {
            const text = blocks.map(b => speech[b.id]?.trim()).filter(Boolean).join("\n\n");
            const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "groom-speech.txt";
            a.click();
            URL.revokeObjectURL(a.href);
          }}
          style={{ background: "none", color: T.ink, border: "1px solid " + T.rule, padding: "12px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}>
          Download as text
        </button>
      </div>
    </div>
  );
}
