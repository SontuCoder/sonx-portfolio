"use client";

import Image from "next/image";
import { motion, AnimatePresence, MotionValue, useSpring } from "framer-motion";

interface HoverPreviewProps {
    title?: string;
    src?: string;
    x: MotionValue;
    y: MotionValue;
}

export default function HoverPreview({ title, src, x, y }: HoverPreviewProps) {
    const smoothX = useSpring(x, {
        stiffness: 350,
        damping: 35,
    });

    const smoothY = useSpring(y, {
        stiffness: 350,
        damping: 35,
    });

    return (
        <AnimatePresence>
            {src && title && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        x: smoothX,
                        y: smoothY,
                    }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="pointer-events-none fixed top-0 left-0 z-50"
                >
                    <div className="bg-background overflow-hidden rounded-xl border shadow-2xl">
                        <Image
                            src={src}
                            alt={title}
                            width={320}
                            height={200}
                            className="h-52 w-80 object-cover"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
