// Encodes the stag handover payload into the URL hash itself.
// No backend, no accounts: the link IS the data.

export type HandoverGuest = { n: string; p: string; d: string }; // name, phone, dietary
export type HandoverPayload = {
  g?: string;  // groom name
  b?: string;  // best man name
  dest?: string; // chosen destination label
  country?: string;
  notes?: string;
  guests: HandoverGuest[];
};

// Unicode-safe base64url
export function encodeHandover(p: HandoverPayload): string {
  const json = JSON.stringify(p);
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodeHandover(s: string): HandoverPayload | null {
  try {
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
    const json = decodeURIComponent(escape(atob(b64)));
    const p = JSON.parse(json);
    if (!p || !Array.isArray(p.guests)) return null;
    return p as HandoverPayload;
  } catch {
    return null;
  }
}

// Normalise a UK-ish phone number for wa.me links: strip non-digits, 07... -> 447...
export function waNumber(phone: string): string | null {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("0")) return "44" + digits.slice(1);
  return digits;
}
