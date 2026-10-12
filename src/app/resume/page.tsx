"use client"

import { FadeIn } from "@/components/common/FadeIn";

export default function ResumePage() {
    return (
        <main className="container py-10">
            <div className="text-start">
                <FadeIn delay={0.1}>
                <h1 className="test-foreground text-md font-mono font-semibold tracking-tight md:text-2xl">
                    Resume
                </h1>
                </FadeIn>
                <FadeIn delay={0.15}>
                <p className="text-muted text-sm">View and download my professional resume.</p>
                </FadeIn>
            </div>
             <div className="mt-10 h-160 overflow-hidden rounded-xl border">
            <FadeIn delay={0.2} className="h-full w-full">
            <iframe
                src="https://drive.google.com/file/d/1-4ecFcLR2b_xMsRLA9EuFnT0dO0O-T05/preview"
                title="Resume"
                className="h-full w-full"
            ></iframe>
            </FadeIn>
            </div>
        </main>
    );
}
