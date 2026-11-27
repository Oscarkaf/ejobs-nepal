"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

/**
 * The E-Jobs logo on a floating disc that sways gently in 3D.
 * On hover it turns to follow the cursor; when the cursor leaves it settles back into the sway.
 */
export function Logo3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element || event.pointerType !== "mouse") return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.setProperty("--ry", `${x * 50}deg`);
    element.style.setProperty("--rx", `${-y * 50}deg`);
  }

  function handleLeave() {
    setActive(false);
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      aria-hidden="true"
      onPointerEnter={() => setActive(true)}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative mx-auto h-64 w-64 [perspective:900px] sm:h-80 sm:w-80"
    >
      {/* Soft glow behind, brighter while interacting */}
      <div
        className={`absolute inset-8 rounded-full bg-white/30 blur-3xl transition-transform duration-500 ${active ? "scale-125" : ""}`}
      />

      {/* Outer layer follows the cursor */}
      <div
        className="h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))_scale(var(--scale,1))]"
        style={{ "--scale": active ? 1.06 : 1 } as CSSProperties}
      >
        {/* Inner layer sways on its own, paused while the cursor is over it */}
        <div
          className={`relative h-full w-full animate-[logo-sway_8s_ease-in-out_infinite] [transform-style:preserve-3d] motion-reduce:animate-none ${active ? "[animation-play-state:paused]" : ""}`}
        >
          <div className="absolute inset-2 rounded-full border border-white/30 [transform:translateZ(-40px)]" />
          <div className="absolute -inset-4 rounded-full border-2 border-dashed border-white/40 animate-[orbit-spin_16s_linear_infinite] motion-reduce:animate-none" />
          <div className="absolute inset-8 rounded-full bg-white shadow-[0_30px_60px_rgba(4,25,73,0.35)]" />
          <div className="absolute inset-12 [transform:translateZ(50px)]">
            <Image
              src="/images/logo-hd.png"
              alt=""
              fill
              sizes="(min-width: 640px) 224px, 160px"
              className="object-contain drop-shadow-[0_8px_16px_rgba(4,25,73,0.25)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}