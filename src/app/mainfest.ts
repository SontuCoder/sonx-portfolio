
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SontuCode Portfolio",
    short_name: "SontuCode",
    description: "Personal developer portfolio",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/assets/Hero.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/Hero.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
