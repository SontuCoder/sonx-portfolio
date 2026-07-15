import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { heroSocials } from "@/config/herodata";
import { footerNavigation, footerQuote } from "@/config/navigation";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <Container>
                <FooterQuotePart />
                <div className="grid gap-12 md:grid-cols-2 border-y">
                    <FooterNavigation />
                    <FooterSocial />
                </div>
                <RightsPart />
            </Container>
        </footer>
    );
}

function FooterQuotePart() {
    return (
        <Card className="mb-14 rounded-3xl relative overflow-hidden border bg-card">
            <CardContent className="p-8 relative">
                    <div
      aria-hidden
      className="
        absolute
        left-6
        bottom-2
        text-[11rem]
        font-serif
        leading-none
        text-muted-foreground/5
        select-none
        pointer-events-none
      "
    >
      “
    </div>
                <blockquote className="space-y-2">
                    <p className="text-muted text-md font-semibold italic">
                        "{footerQuote.text}"
                    </p>

                    <footer className="text-muted text-sm text-right">
                        — {footerQuote.author}
                    </footer>
                </blockquote>
            </CardContent>
        </Card>
    );
}

function FooterNavigation() {
    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest uppercase">Navigate</h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerNavigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

function FooterSocial() {
    return (
        <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest uppercase">Connect</h3>

            <div className="grid grid-cols-4 gap-4">
                {heroSocials.map((social) => {
                    return (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            className="hover:bg-muted flex h-12 w-12 items-center justify-center rounded-xl border transition-all"
                        >
                            <social.icon className="h-5 w-5" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

function RightsPart() {
    return (
        <div className="mt-16 border-t pt-8">
            <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Subhadip Maity. All rights reserved.
            </p>
        </div>
    );
}
