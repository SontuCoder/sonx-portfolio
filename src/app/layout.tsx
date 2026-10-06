import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { hankenGrotesk } from "./font";

import Navbar from "@/components/sections/Nevbar/Navbar";
import Container from "@/components/layout/Container";
import Footer from "@/components/sections/Footer/Footer";
import FooterQuotePart from "@/components/common/Quote";
import OnandemoPet from "@/components/common/OnanDemoPet";

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
        images: [siteConfig.ogImage],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={hankenGrotesk.variable}>
            <body
                className={cn(
                    "min-h-screen",
                    "bg-background",
                    "font-sans",
                    "text-foreground",
                    "antialiased",
                )}
            >
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
