import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dataflow Solutions",
    short_name: "Dataflow",
    description: "Studio för webbutveckling och SaaS",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f23",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/logo/Tachyon2.png",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
