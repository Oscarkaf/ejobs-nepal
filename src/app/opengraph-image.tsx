import { ImageResponse } from "next/og";

export const alt = "E-Jobs Nepal — Nepal's trusted recruitment and BPO partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generates the link preview image shown when the site is shared */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(145deg, #1a62c2 4%, #01a2ea 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 600, color: "#f58c0f" }}>
          {"Nepal's Trusted Recruitment & BPO Partner"}
        </div>
        <div style={{ marginTop: 24, fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          Hire Smarter. Outsource Efficiently. Grow Faster.
        </div>
        <div style={{ marginTop: 40, fontSize: 30, opacity: 0.9 }}>E-Jobs Nepal · Kathmandu</div>
      </div>
    ),
    size,
  );
}