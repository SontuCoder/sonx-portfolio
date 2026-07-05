"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TooltipWrapperProps {
    children: React.ReactNode;
    text: string;
    shortcut?: string;
}

export default function TooltipWrapper({ children, text, shortcut }: TooltipWrapperProps) {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>

                <TooltipContent side="bottom" className="flex items-center gap-2">
                    <span>{text}</span>

                    {shortcut && (
                        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5 text-xs">
                            {shortcut}
                        </kbd>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
