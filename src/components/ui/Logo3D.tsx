import Image from "next/image";

/** The E-Jobs logo on a floating disc that sways gently in 3D, circled by an orbiting ring. Pure CSS. */
export function Logo3D() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-64 w-64 [perspective:900px] sm:h-80 sm:w-80">
      {/* Soft glow behind */}
      <div className="absolute inset-8 rounded-full bg-white/30 blur-3xl" />

      <div className="relative h-full w-full animate-[logo-sway_8s_ease-in-out_infinite] [transform-style:preserve-3d] motion-reduce:animate-none">
        {/* Back ring, pushed away from the viewer for depth */}
        <div className="absolute inset-2 rounded-full border border-white/30 [transform:translateZ(-40px)]" />

        {/* Orbiting dashed ring */}
        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-white/40 animate-[orbit-spin_16s_linear_infinite] motion-reduce:animate-none" />

        {/* White disc */}
        <div className="absolute inset-8 rounded-full bg-white shadow-[0_30px_60px_rgba(4,25,73,0.35)]" />

        {/* Logo raised towards the viewer, so it moves differently from the disc as it turns */}
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
  );
}