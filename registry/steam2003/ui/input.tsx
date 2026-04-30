import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bevel-in h-6 w-full px-1.5",
        "bg-input-bg text-input-fg",
        "font-sans text-[11px] leading-none",
        "placeholder:text-[var(--border-light)]",
        "outline-none focus-visible:win32-focus",
        "disabled:bg-panel disabled:text-[var(--border-light)] disabled:cursor-default",
        "read-only:bg-panel read-only:text-foreground read-only:cursor-default",
        "file:border-0 file:bg-transparent file:font-sans file:text-[11px] file:font-normal file:text-foreground",
        className
      )}
    />
  );
}

export { Input };
