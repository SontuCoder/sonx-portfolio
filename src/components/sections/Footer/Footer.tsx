import Container from "@/components/layout/Container";
import { heroSocials } from "@/config/herodata";
import { footerNavigation } from "@/config/navigation";
import TooltipWrapper from "@/providers/TooltipWrapper";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-y bg-card-bg/70">
            <Container>
                <div className="grid gap-12 md:grid-cols-2 mt-12 text-muted">
                    <FooterNavigation />
                    <FooterSocial />
                </div>
                <RightsPart />
            </Container>
        </footer>
    );
}


function FooterNavigation() {
    return (
        <div>
            <h3 className="mb-6 text-xs font-semibold tracking-widest uppercase">Navigate</h3>

            <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                {footerNavigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="hover:text-foreground transition-colors text-xs"
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
            <h3 className="mb-6 text-xs font-semibold tracking-widest uppercase">Connect</h3>
            <div className="grid grid-cols-8 gap-4">
                {heroSocials.map((social) => {
                    return (
                        <TooltipWrapper key={social.name} text={social.name}>
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            className="hover:bg-muted/10 flex h-8 w-8 items-center justify-center rounded-md border transition-all"
                        >
                            <social.icon className="h-4 w-4" />
                        </Link>
                        </TooltipWrapper>
                    );
                })}
            </div>
        </div>
    );
}

function RightsPart() {
    return (
        <div className="mt-12 border-t py-6">
            <p className="text-muted text-xs">
                © {new Date().getFullYear()} Subhadip Maity. All rights reserved.
            </p>
        </div>
    );
}
