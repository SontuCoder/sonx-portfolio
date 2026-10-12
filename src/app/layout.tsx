import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/ThemeProvider";

import Navbar from "@/components/sections/Nevbar/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/sections/Footer/Footer";
import FooterQuotePart from "@/components/common/Quote";
import OnandemoPet from "@/components/common/OnanDemoPet";
import { JsonLd } from "@/components/seo/json-id";


export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.title,
        template: "%s | SONX",
    },
    description: siteConfig.description,
    icons: {
        icon: "/assets/favicon.ico",
        apple: "/assets/favicon.ico",
    },
    keywords: [...siteConfig.keywords],
    authors: [
        {
            name: siteConfig.author.name,
        },
    ],
    other: {
        "google-adsense-account": "ca-pub-230388300097265",
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [{
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.title,
    }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
     robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen",
                    "bg-background",
                    "text-foreground",
                    `font-hanken-grotesk antialiased`,
                    "antialiased"
                )}
            >
                <JsonLd />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-dvh flex-col">
                        <Navbar />
                        <main className="flex-1">
                            <Container>
                                {children}
                                <OnandemoPet />
                            </Container>
                        </main>
                        <FooterQuotePart />
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
