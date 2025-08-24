// app/components/ClientIp.tsx
"use client";
import { useEffect, useState } from "react";

export default function ClientIp({ onIp }: { onIp?: (ip: string) => void }) {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 3000);
        const res = await fetch("https://api.ipify.org?format=json", { signal: ctrl.signal, cache: "no-store" });
        clearTimeout(t);
        const data: { ip?: string } = await res.json();
        if (!cancelled && data.ip) {
          setIp(data.ip);
          onIp?.(data.ip);
        }
      } catch {
        if (!cancelled) setIp(null);
      }
    })();
    return () => { cancelled = true; };
  }, [onIp]);

  return <span suppressHydrationWarning>{ip ?? "—"}</span>;
}
