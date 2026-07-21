import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(145deg, #18181b 0%, #09090b 55%, #7f1d1d 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          width: "100%",
          border: "28px solid #dc2626",
        }}
      >
        <div
          style={{
            fontSize: 155,
            fontWeight: 900,
            letterSpacing: "-10px",
            lineHeight: 1,
          }}
        >
          PVR
        </div>

        <div
          style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "5px",
            marginTop: 22,
            textTransform: "uppercase",
          }}
        >
          Repair
        </div>
      </div>
    ),
    size,
  );
}