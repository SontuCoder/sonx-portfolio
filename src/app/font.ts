// src/app/fonts.ts

import localFont from "next/font/local";

export const hankenGrotesk = localFont({
  src: [
    {
      path: "./font/HankenGrotesk-Variable.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./font/HankenGrotesk-Italic-Variable.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  variable: "--font-hanken",
  display: "swap",
});