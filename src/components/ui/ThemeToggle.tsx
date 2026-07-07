"use client";

import TooltipWrapper from "@/providers/TooltipWrapper";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="border-border flex h-9 w-9 items-center justify-center rounded-full border" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <TooltipWrapper text="Toggle theme">
            <button
                type="button"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="group border-border bg-background hover:bg-accent relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border transition-colors duration-300    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
    focus-visible:ring-offset-2"
            >
                <Sun
                    className={`absolute h-4 w-4 transition-all duration-500 ease-in-out ${
                        isDark ? "scale-0 rotate-180 opacity-0" : "scale-100 rotate-0 opacity-100"
                    }`}
                />

                <Moon
                    className={`absolute h-4 w-4 transition-all duration-500 ease-in-out ${
                        isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-180 opacity-0"
                    }`}
                />
            </button>
            </TooltipWrapper>
    );
}
