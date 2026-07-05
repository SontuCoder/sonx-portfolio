"use client";

import Link from "next/link";
import { navigation } from "@/config/navigation";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import TooltipWrapper from "@/providers/TooltipWrapper";

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
                            className={`transition-colors duration-300 font-[600] ${
                                isActive
                                    ? "pointer-events-none text-foreground"
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
            <div className="flex items-center justify-center rounded-md bg-yellow-300 p-[1px]">
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
        <header className="border-border/40 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl">
            <nav
                aria-label="Primary Navigation"
                className="mx-auto flex h-16 max-w-3xl items-center justify-between p-4"
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
                <div className="pr-4">
                    {/* Search */}
                    {/* Theme Toggle */}
                        <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
