import { hero, heroSocials } from "@/config/herodata";
import TooltipWrapper from "@/providers/TooltipWrapper";
import MiniPlayer from "@/utils/Spotify";
import Link from "next/link";

function HeroLogo() {
    return (
        <div className="bg-logo-bg size-24 overflow-hidden rounded-full p-1">
            <img
                src={hero.avatar}
                alt={hero.name}
                className="h-full w-full rounded-full object-cover"
            />
        </div>
    );
}


function HeroMusic(){
    return (
        <div className="text-muted flex items-center text-sm md:flex">
            
                <MiniPlayer src="/music/Roi.mp3" title="Roi" />
        </div>
    )
}


export default function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="flex flex-col items-start pt-6"
        >
            <div className="flex min-w-full items-center gap-5">
                <HeroLogo />

                <div className="flex min-w-0 flex-1 flex-col">
                    <h1
                        id="hero-heading"
                        className="text-foreground text-lg font-semibold tracking-tight md:text-2xl"
                    >
                        {hero.name}
                    </h1>

                    <p
                        className="text-muted mt-1 flex flex-wrap items-center gap-x-0.5 text-sm font-medium"
                        aria-label={`Roles: ${hero.surnames.join(", ")}`}
                    >
                        {hero.surnames.map((surname, index) => (
                            <span key={surname} className="flex items-center">
                                {surname}

                                {index !== hero.surnames.length - 1 && (
                                    <span aria-hidden="true" className="text-muted mx-0.5 md:mx-2">
                                        •
                                    </span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="mt-4 flex flex-col gap-4 px-2">
                {/* Punchline */}
                <p className="text-muted max-w-xl text-sm leading-7 md:text-base">
                    {hero.punchline}
                </p>

                {/* Bottom Row */}
                <div className="flex flex-col gap-4">
                    <HeroMusic />

                    <nav aria-label="Social media links" className="flex items-center gap-4">
                        {heroSocials.map((social) => (
                            <TooltipWrapper key={social.name} text={social.name}>
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit my ${social.name}`}
                                    // title={social.name}
                                    className="text-muted hover:text-foreground focus-visible:ring-primary transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
                                >
                                    <social.icon className="size-5" />
                                </Link>
                            </TooltipWrapper>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
