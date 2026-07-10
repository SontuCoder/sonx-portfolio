"use client";

import TooltipWrapper from "@/providers/TooltipWrapper";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MiniPlayerProps = {
    src: string;
    title: string;
    artist?: string;
};

export default function MiniPlayer({ src, title, artist}: MiniPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [playing, setPlaying] = useState(false);

    const toggle = async () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
            return;
        }

        await audioRef.current.play();
        setPlaying(true);
    };

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleEnded = () => {
            setPlaying(false);
            audio.currentTime = 0;
        };

        audio.addEventListener("ended", handleEnded);

        return () => audio.removeEventListener("ended", handleEnded);
    }, []);

    return (
        <>
            <audio ref={audioRef} src={src} preload="metadata" />
            <TooltipWrapper text="Play music">
            <button
                onClick={toggle}
                aria-label={playing ? "Pause audio" : "Play audio"}
                className="border-border text-muted hover:bg-card hover:text-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors"
            >
                {playing ? (
                    <Pause className="size-3.5 fill-current" />
                ) : (
                    <Play className="size-3.5 fill-current" />
                )}

                <span className="truncate">
                    {title} · {artist}
                </span>
            </button>
            </TooltipWrapper>
        </>
    );
}
