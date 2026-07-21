import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Poteau Valley Repair",
    short_name: "PVR",
    description:
      "Veteran-owned automotive, mobile, lawn mower, and small-engine repair serving LeFlore County and surrounding counties.",

    start_url: "/",
    display: "standalone",

    background_color: "#09090b",
    theme_color: "#dc2626",

    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}