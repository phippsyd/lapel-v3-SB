import { useState } from "react";
import { T } from "../theme";
import { Rule, GoodToKnow } from "../shared";
import { waNumber, type HandoverPayload } from "../handover-codec";

export function HandoverView({ payload, onExplore }: { payload: HandoverPayload; onExplore: () => void }) {
  const [copied, setCopied] = useState(false);
  const guests = payload.guests.filter(g => g.n.trim());

  const copyAll = () => {
    const lines = [
      `Stag list${payload.g ? " — " + payload.g : ""}`,
      payload.dest ? `Destination: ${payload.dest}${payload.country ? ", " + payload.country : ""}` : "",
      payload.notes ? `Notes from the groom: ${payload.notes}` : "",
      "",
      ...guests.map(g => `${g.n}${g.p ? " — " + g.p : ""}${g.d ? " (" + g.d + ")" : ""}`),
    ].filter(Boolean);
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px" }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: T.mid, marginBottom: 14 }}>Stag handover</div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 38, color: T.ink, lineHeight: 1.1, marginBottom: 16 }}>
        {payload.g ? <>{payload.g}'s stag.<br />Over to you{payload.b ? ", " + payload.b : ""}.</> : <>The stag list.<br />Over to you.</>}
      </div>
      <Rule />
      <div style={{ fontSize: 15, color: T.mid, lineHeight: 1.75, marginBottom: 28 }}>
        {payload.g ? payload.g : "The groom"} has put together the guest list below and handed it over. Everything you need to start the WhatsApp group is here.
      </div>

      {payload.dest && (
        <div style={{ background: T.navyLight, border: "1px solid " + T.rule, borderRadius: 4, padding: "20px 24px", marginBottom: 24 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.navy, marginBottom: 6 }}>Destination he's chosen</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.ink }}>{payload.dest}{payload.country ? <span style={{ fontSize: 15, color: T.mid }}> &middot; {payload.country}</span> : null}</div>
        </div>
      )}

      {payload.notes && (
        <div style={{ background: T.amberLight, border: "1px solid #C9B9A8", borderRadius: 4, padding: "16px 20px", marginBottom: 24 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.amber, marginBottom: 6 }}>Notes from the groom</div>
          <div style={{ fontSize: 14, color: T.ink, lineHeight: 1.65 }}>{payload.notes}</div>
        </div>
      )}

      <div style={{ background: T.white, border: "1px solid " + T.rule, borderRadius: 4, padding: 24, marginBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.mid }}>The list &middot; {guests.length}</div>
          <button onClick={copyAll} style={{ background: T.navy, color: "white", border: "none", padding: "6px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer", borderRadius: 2 }}>
            {copied ? "\u2713 Copied" : "Copy the list"}
          </button>
        </div>
        {guests.length === 0 && <div style={{ fontSize: 13, color: T.mid }}>No names on the list yet.</div>}
        {guests.map((g, i) => {
          const wa = g.p ? waNumber(g.p) : null;
          return (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < guests.length - 1 ? "1px solid " + T.rule : "none", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{g.n}</div>
                {g.d && <div style={{ fontSize: 12, color: T.mid }}>{g.d}</div>}
              </div>
              {g.p && (
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <a href={"tel:" + g.p} style={{ fontSize: 12, fontWeight: 600, color: T.navy, textDecoration: "none", borderBottom: "1px solid " + T.navy }}>{g.p}</a>
                  {wa && <a href={"https://wa.me/" + wa} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, fontWeight: 700, color: T.green, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>WhatsApp &rarr;</a>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <GoodToKnow>
        First job: get everyone into one WhatsApp group within 48 hours, then lock the date before discussing anything else. Dates die by committee — offer two options, take a vote, done.
      </GoodToKnow>

      <div style={{ marginTop: 8 }}>
        <button onClick={onExplore}
          style={{ background: T.dark, color: "white", border: "none", padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}>
          Plan the stag with Lapel &rarr;
        </button>
        <div style={{ fontSize: 12, color: T.mid, marginTop: 12, lineHeight: 1.6 }}>
          Nearly 200 destinations, filtered to your group, with the booking links to actually organise it. Free.
        </div>
      </div>
    </div>
  );
}
