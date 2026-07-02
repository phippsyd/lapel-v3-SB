import { T } from "../theme";
import type { Option } from "../shared";
import { attireAuditGroups } from "./Attire";
import { ringsAuditGroups } from "./Rings";

function AuditCard({ opt, index }: { opt: Option; index: number }) {
  const hasImg = !!opt.img;
  const filename = opt.img ? opt.img.split("/").pop()! : null;

  return (
    <div style={{
      border: "1px solid " + (hasImg ? T.rule : "#C9B9A8"),
      borderRadius: 6,
      overflow: "hidden",
      background: T.white,
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        height: 140,
        background: hasImg ? "#CAC6C1" : T.amberLight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
      }}>
        {hasImg ? (
          <img src={opt.img} alt={opt.label} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        ) : (
          <div style={{ fontSize: 11, color: T.amber, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            No image
          </div>
        )}
        <div style={{
          position: "absolute", top: 6, left: 6,
          width: 20, height: 20, borderRadius: "50%",
          background: "rgba(0,0,0,0.25)", color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 9, fontWeight: 700,
        }}>
          {index + 1}
        </div>
      </div>
      <div style={{ padding: "10px 12px", flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: T.ink, lineHeight: 1.3, marginBottom: 4 }}>{opt.label}</div>
        {opt.id && <div style={{ fontSize: 9, color: T.mid, fontFamily: "monospace" }}>id: {opt.id}</div>}
        {filename && (
          <div style={{ fontSize: 9, color: T.navy, marginTop: 5, fontFamily: "monospace", wordBreak: "break-all", lineHeight: 1.5, background: T.navyLight, padding: "3px 5px", borderRadius: 2 }}>
            {filename}
          </div>
        )}
      </div>
    </div>
  );
}

export function ImageAuditModule() {
  const allGroups = [...attireAuditGroups, ...ringsAuditGroups];
  const totalWithImg = allGroups.reduce((n, g) => n + g.options.filter(o => o.img).length, 0);
  const totalWithout = allGroups.reduce((n, g) => n + g.options.filter(o => !o.img).length, 0);

  return (
    <div>
      <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 12 }}>
        <div style={{ width: 20, height: 1.5, background: T.mid, borderRadius: 1 }} />
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: T.mid }}>Developer tool</div>
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink, marginBottom: 8 }}>Image Audit</div>
      <div style={{ fontSize: 14, color: T.mid, marginBottom: 8, lineHeight: 1.65 }}>
        Every option from both Attire and Rings, grouped by question. Check each label matches its image.
        Options without images are highlighted in amber.
      </div>
      <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
        <div style={{ background: T.navyLight, border: "1px solid " + T.rule, borderRadius: 4, padding: "8px 16px", display: "flex", gap: 8, alignItems: "baseline" }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.navy }}>{totalWithImg}</span>
          <span style={{ fontSize: 11, color: T.mid }}>with image</span>
        </div>
        <div style={{ background: T.amberLight, border: "1px solid #C9B9A8", borderRadius: 4, padding: "8px 16px", display: "flex", gap: 8, alignItems: "baseline" }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: T.amber }}>{totalWithout}</span>
          <span style={{ fontSize: 11, color: T.mid }}>no image (expected)</span>
        </div>
      </div>

      {allGroups.map((group, gi) => (
        <div key={gi} style={{ marginBottom: 48 }}>
          <div style={{
            display: "flex", gap: 12, alignItems: "center",
            marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid " + T.rule,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: T.ink, flex: 1 }}>
              {group.section}
            </div>
            <div style={{ fontSize: 11, color: T.mid }}>
              {group.options.filter(o => o.img).length} / {group.options.length} with image
            </div>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
            gap: 10,
          }}>
            {group.options.map((opt, oi) => (
              <AuditCard key={oi} opt={opt} index={oi} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
