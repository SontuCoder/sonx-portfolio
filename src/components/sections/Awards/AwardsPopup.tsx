"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuX, LuZoomIn } from "react-icons/lu";
import { createPortal } from "react-dom";

interface ImageLightboxProps {
    src: string;
    alt: string;
    className?: string;
}

export default function ImageLightbox({
    src,
    alt,
    className = "",
}: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen]);

    return (
        <>
            {/* Preview image */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
                aria-label={`View ${alt} fullscreen`}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`w-full object-cover ${className}`}
                />

                <LuZoomIn className="absolute right-4 bottom-4 h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            {/* Fullscreen popup */}
            {isOpen &&
    createPortal(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
                onClick={() => setIsOpen(false)}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="fixed top-5 right-5 z-50 rounded-full bg-white/15 p-3 text-white hover:bg-white/25"
                    aria-label="Close image"
                >
                    <LuX className="h-5 w-5" />
                </button>

                {/* Image */}
                <motion.img
                    src={src}
                    alt={alt}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="max-h-[90vh] max-w-[95vw] object-contain"
                    onClick={(e) => e.stopPropagation()}
                />
            </motion.div>
        </AnimatePresence>,
        document.body
    )}
        </>
    );
}