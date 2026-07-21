import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Poteau Valley Repair — Honest Repairs and Expert Diagnostics";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #09090b 0%, #18181b 55%, #7f1d1d 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "75px 85px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#dc2626",
            height: "12px",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />

        <div
          style={{
            color: "#ef4444",
            display: "flex",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          Veteran Owned &amp; Operated
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            marginTop: 28,
            maxWidth: "1000px",
          }}
        >
          Honest Repairs.
          <br />
          Expert Diagnostics.
        </div>

        <div
          style={{
            color: "#d4d4d8",
            display: "flex",
            fontSize: 30,
            lineHeight: 1.4,
            marginTop: 34,
            maxWidth: "950px",
          }}
        >
          Automotive • Mobile Service • Lawn Mower • Small Engine
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 27,
            fontWeight: 700,
            justifyContent: "space-between",
            marginTop: 52,
            width: "100%",
          }}
        >
          <span>Poteau Valley Repair</span>
          <span style={{ color: "#ef4444" }}>(918) 442-9692</span>
        </div>
      </div>
    ),
    size,
  );
}