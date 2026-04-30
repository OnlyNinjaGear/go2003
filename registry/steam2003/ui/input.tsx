import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input">;

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "bevel-in h-6 w-full px-1.5 selection:bg-primary selection:text-panel-pressed",
        "bg-input-bg text-input-fg",
        "font-sans text-[11px] leading-none",
        "placeholder:text-[var(--muted)] placeholder:select-none",
        "outline-none aria-invalid:border-destructive",
        "disabled:bg-panel-pressed disabled:text-[var(--muted)] disabled:cursor-default",
        "read-only:bg-input-bg read-only:text-muted-foreground read-only:cursor-default",
        "file:border-0 file:bg-transparent file:font-sans file:text-[11px] file:font-normal file:text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Input };
