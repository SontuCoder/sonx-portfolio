import { hero, heroSocials } from "@/config/herodata";

function HeroLogo() {
    return (
        <div className="bg-logo-bg size-20 overflow-hidden rounded-full p-1">
            <img
                src={hero.avatar}
                alt={hero.name}
                className="h-full w-full rounded-full object-cover"
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" aria-labelledby="hero-heading" className="flex flex-col items-start pt-10">
            <div className="flex items-center gap-5 min-w-full">
                <HeroLogo />

                <div className="flex flex-col min-w-0 flex-1">
                    <h1
                        id="hero-heading"
                        className="text-lg font-semibold tracking-tight text-foreground md:text-2xl"
                    >
                        {hero.name}
                    </h1>

                    <p
                        className="mt-2 flex flex-wrap items-center gap-x-0.5 text-sm font-medium text-secondary"
                        aria-label={`Roles: ${hero.surnames.join(", ")}`}
                    >
                        {hero.surnames.map((surname, index) => (
                            <span key={surname} className="flex items-center">
                                {surname}

                                {index !== hero.surnames.length - 1 && (
                                    <span aria-hidden="true" className="mx-0.5 text-secondary">
                                        •
                                    </span>
                                )}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            <div>Hi</div>
        </section>
    );
}
