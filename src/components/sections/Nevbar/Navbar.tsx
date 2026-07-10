"use client";

import Link from "next/link";
import { navigation } from "@/config/navigation";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import TooltipWrapper from "@/providers/TooltipWrapper";
import Container from "@/components/layout/Container";

function NavbarLinks() {
    const pathname = usePathname();

    return (
        <>
            {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`focus-visible:outline-none 
                                focus-visible:ring-ring 
                                font-semibold 
                                transition-colors 
                                duration-300 
                                focus-visible:ring-2 
                                focus-visible:ring-offset-2 ${
                                isActive
                                    ? "text-foreground pointer-events-none"
                                    : "text-muted hover:text-secondary"
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

function NavbarLogo() {
    return (
        <TooltipWrapper text="Home">
            <Link href="/" aria-label="Home">
                <div className="bg-logo-bg flex items-center justify-center rounded-md p-px">
                    <img
                        src="/assets/Hero.png"
                        alt="Subhadip Maity"
                        width={35}
                        height={35}
                        className="rounded-md object-cover"
                    />
                </div>
            </Link>
        </TooltipWrapper>
    );
}

export default function Navbar() {
    return (
        <header className="bg-background/20 sticky top-0 z-50 backdrop-blur-md">
            <Container>
                <nav
                    aria-label="Primary Navigation"
                    className="flex h-16 items-center justify-between"
                >
                    {/* Left */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <NavbarLogo />

                        <ul className="flex items-center gap-6 text-xs">
                            {/* Navigation Links */}
                            <NavbarLinks />
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="">
                        {/* Search */}
                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </nav>
            </Container>
        </header>
    );
}
