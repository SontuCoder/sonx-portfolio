import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/ThemeProvider";

import Navbar from "@/components/sections/Nevbar/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/sections/Footer/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | SONX",
  },
  description: siteConfig.description,
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/favicon.ico"
  },
  keywords: [...siteConfig.keywords],
  authors:[
    {
      name: siteConfig.author.name,
    }
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
    geistSans.variable,
    geistMono.variable
  )}

    >
      <body
        className={cn(
    "min-h-screen",
    "bg-background",
    "font-sans",
    "text-foreground",
    "antialiased"
  )}
      >
        <ThemeProvider 
        attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange>
          <Navbar />
          <Container>
          {children}
          </Container>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
