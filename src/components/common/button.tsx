"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ViewMoreButtonProps {
  text: string;
  href: string;
}

export default function ViewMoreButton({
  text,
  href,
}: ViewMoreButtonProps) {
  return (
    <div className="mt-8 mb-10 flex justify-center">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-md border border-border bg-slate-900/20 px-4 py-2 text-sm font-semibold text-muted transition-all duration-200 hover:bg-slate-800/50 hover:text-foreground"
      >
        View all {text}

        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}