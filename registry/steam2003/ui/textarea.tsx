import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bevel-in w-full min-h-16 px-1.5 py-1 resize-y",
        "bg-input-bg text-input-fg",
        "font-sans text-[11px] leading-snug",
        "placeholder:text-[var(--muted)] placeholder:select-none",
        "selection:bg-primary selection:text-primary-foreground",
        "outline-none",
        "aria-invalid:shadow-[0px_0px_0px_1px_var(--destructive)] aria-invalid:text-destructive-light",
        "disabled:bg-panel-pressed disabled:text-[var(--muted)] disabled:cursor-default",
        "read-only:bg-input-bg read-only:text-muted-foreground read-only:cursor-default",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
