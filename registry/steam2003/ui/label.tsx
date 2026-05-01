"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none select-none cursor-default",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:text-[var(--panel-pressed)] group-data-[disabled=true]:[text-shadow:0.5px_0.5px_0px_var(--border-light)]",
        className
      )}
      {...props}
    />
  )
}

export { Label }
