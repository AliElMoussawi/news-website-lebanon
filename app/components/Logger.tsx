"use client";

import { useEffect } from "react";

type LogPayload = {
  userAgent: string;
  platform: string;
  device?: string;
  clientIp?: string;
};

function classifyDevice(ua: string): "mobile" | "tablet" | "desktop" {
  const s = ua.toLowerCase();
  if (/ipad|tablet/.test(s)) return "tablet";
  if (/mobi|android|iphone|ipod|phone/.test(s)) return "mobile";
  return "desktop";
}

export default function Logger() {
  useEffect(() => {
    let sent = false;
    const send = async (payload: LogPayload) => {
      if (sent) return;
      sent = true;
      try {
        await fetch("/api/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          cache: "no-store",
        });
      } catch {
        // ignore network errors
      }
    };

    (async () => {
      const meta: LogPayload = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        device: classifyDevice(navigator.userAgent),
      };

      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 3000);
        const res = await fetch("https://api.ipify.org?format=json", {
          signal: ctrl.signal,
          cache: "no-store",
        });
        clearTimeout(t);

        if (res.ok) {
          const data: { ip?: string } = await res.json();
          if (data.ip) meta.clientIp = data.ip;
        }
      } catch {
        // ignore IP fetch errors
      }

      send(meta);
    })();
  }, []);

  return null; // doesn’t render anything visible
}
