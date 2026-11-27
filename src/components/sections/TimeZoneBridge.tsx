"use client";

import { useEffect, useState } from "react";

const KATHMANDU = "Asia/Kathmandu";
const LONDON = "Europe/London";
const UK_OPEN = 9 * 60; // 09:00 London
const UK_CLOSE = 17 * 60 + 30; // 17:30 London
const DAY = 24 * 60;

/** Minutes since midnight in a given time zone. Intl handles UK daylight saving automatically. */
function minutesIn(timeZone: string, date: Date): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0);
  return get("hour") * 60 + get("minute");
}

function formatMinutes(total: number): string {
  const minutes = ((total % DAY) + DAY) % DAY;
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
}

export function TimeZoneBridge() {
  // Starts empty so the server and browser render the same HTML, then fills in once mounted
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const interval = setInterval(tick, 15_000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  const kathmandu = now ? minutesIn(KATHMANDU, now) : null;
  const london = now ? minutesIn(LONDON, now) : null;
  const difference = kathmandu !== null && london !== null ? (((kathmandu - london) % DAY) + DAY) % DAY : null;

  const ukOpenNow = london !== null && london >= UK_OPEN && london < UK_CLOSE;
  const windowStart = difference !== null ? (((UK_OPEN + difference) % DAY) / DAY) * 100 : 0;
  const windowWidth = ((UK_CLOSE - UK_OPEN) / DAY) * 100;
  const nowPosition = kathmandu !== null ? (kathmandu / DAY) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-950 p-6 text-white shadow-[0_24px_60px_rgba(4,25,73,0.35)] sm:p-10">
      {/* Faint dotted texture, fading towards the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <City
          name="Kathmandu"
          detail="Nepal · UTC+5:45"
          minutes={kathmandu}
          status="Team on shift 24/7"
          active
        />

        <svg aria-hidden="true" viewBox="0 0 200 80" className="mx-auto hidden h-20 w-48 md:block lg:w-64">
          <path d="M10 70 Q100 -10 190 70" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="3 5" />
          <path
            d="M10 70 Q100 -10 190 70"
            fill="none"
            stroke="#01a4eb"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength={100}
            className="signal-path"
          />
          <circle cx="10" cy="70" r="4" fill="#01a4eb" />
          <circle cx="190" cy="70" r="4" fill="#f58c0f" />
        </svg>

        <City
          name="London"
          detail="United Kingdom"
          minutes={london}
          status={ukOpenNow ? "Business hours" : "Outside business hours"}
          active={ukOpenNow}
        />
      </div>

      <div className="relative mt-10">
        <div className="flex justify-between text-xs text-white/60">
          <span>00:00</span>
          <span>Kathmandu time</span>
          <span>24:00</span>
        </div>
        <div className="relative mt-2 h-3 rounded-full bg-white/10">
          {difference !== null && (
            <div
              className="absolute inset-y-0 rounded-full bg-linear-to-r from-sky to-brand"
              style={{ left: `${windowStart}%`, width: `${windowWidth}%` }}
            />
          )}
          {now && (
            <div
              className="absolute -top-1.5 h-6 w-0.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_#f58c0f]"
              style={{ left: `${nowPosition}%` }}
            />
          )}
        </div>
        <p className="mt-4 text-sm font-light text-white/80">
          The blue band is the UK working day
          {difference !== null && (
            <>
              {" "}
              ({formatMinutes(UK_OPEN + difference)}–{formatMinutes(UK_CLOSE + difference)} in Kathmandu)
            </>
          )}
          . The orange line is now. With 24/7 shift rotations, our teams cover it in full.
        </p>
      </div>
    </div>
  );
}

type CityProps = {
  name: string;
  detail: string;
  minutes: number | null;
  status: string;
  active: boolean;
};

function City({ name, detail, minutes, status, active }: CityProps) {
  return (
    <div className="text-center">
      <p className="text-sm text-sky">{detail}</p>
      <p className="mt-1 text-2xl font-semibold">{name}</p>
      <p className="mt-3 text-5xl font-light tabular-nums">{minutes === null ? "--:--" : formatMinutes(minutes)}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${active ? "animate-pulse bg-emerald-400 motion-reduce:animate-none" : "bg-white/40"}`}
        />
        {status}
      </p>
    </div>
  );
}