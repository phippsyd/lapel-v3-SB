import { useState } from "react";
import { T } from "../theme";
import type { Profile } from "../shared";

export function ProfileModule({ profile, onSave }: { profile: Profile; onSave: (p: Profile) => void }) {
  const [form, setForm] = useState<Profile>(profile);
  const [saved, setSaved] = useState(false);
  const update = (k: keyof Profile, v: string) => { setForm(f => ({ ...f, [k]: v })); setSaved(false); };
  return (
    <div style={{ maxWidth: 480 }}>
      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: T.mid, marginBottom: 14 }}>Your profile</div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 34, color: T.ink, marginBottom: 8 }}>Personal details.</div>
      <div style={{ fontSize: 14, color: T.mid, marginBottom: 32, lineHeight: 1.6 }}>This personalises your countdown, homepage, and speech prompts.</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
        {[
          { key: "groomName", label: "Your name", placeholder: "e.g. James" },
          { key: "partnerName", label: "Your partner's name", placeholder: "e.g. Sophie" },
          { key: "weddingDate", label: "Wedding date", type: "date" },
          { key: "venue", label: "Venue", placeholder: "e.g. Ardington House, Oxfordshire" },
        ].map(field => (
          <div key={field.key}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: T.mid, marginBottom: 8 }}>{field.label}</div>
            <input type={field.type || "text"} placeholder={field.placeholder || ""} value={form[field.key as keyof Profile]}
              onChange={e => update(field.key as keyof Profile, e.target.value)}
              style={{ width: "100%", padding: "12px 16px", border: "1px solid " + T.rule, borderRadius: 4, fontSize: 15, fontFamily: "Inter, sans-serif", background: T.white, color: T.ink, outline: "none" }} />
          </div>
        ))}
      </div>
      <button onClick={() => { onSave(form); setSaved(true); }}
        style={{ background: T.dark, color: "white", border: "none", padding: "14px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginRight: 12 }}>
        Save details
      </button>
      {saved && <span style={{ fontSize: 13, color: T.green, fontWeight: 600 }}>&#10003; Saved</span>}
    </div>
  );
}
