import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(145deg, #18181b 0%, #09090b 60%, #7f1d1d 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
          border: "12px solid #dc2626",
          fontSize: 55,
          fontWeight: 900,
          letterSpacing: "-4px",
        }}
      >
        PVR
      </div>
    ),
    size,
  );
}