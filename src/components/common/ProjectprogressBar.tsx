"use client";

import { useEffect, useState } from "react";

export default function ProjectProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                scrollableHeight > 0
                    ? (window.scrollY / scrollableHeight) * 100
                    : 100;

            setProgress((prev) => Math.max(prev, Math.min(100, Math.max(0, percentage))));
        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
            <div
                className="h-full bg-foreground transition-[width] duration-100"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}