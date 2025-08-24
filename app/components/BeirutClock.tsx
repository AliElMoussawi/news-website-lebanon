// app/components/BeirutClock.tsx  (path matches your import)
"use client";
import { useEffect, useState } from "react";

export default function BeirutClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("ar-LB", {
        timeZone: "Asia/Beirut",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="big-clock" suppressHydrationWarning>
      {time}
      <style jsx>{`
        .big-clock {
          font-size: 36px;
          font-weight: bold;
          color: #fff;
          background: #222;
          padding: 8px 14px;
          border-radius: 5apx;
        }
      `}</style>
    </div>
  );
}
