"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("relative h-4 w-full overflow-hidden bevel-in bg-input-bg", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="my-px h-[calc(100%-2px)]"
        style={{
          width: `${value ?? 0}%`,
          backgroundImage: `repeating-linear-gradient(to right, var(--primary) 0px, var(--primary) 11px, var(--input-bg) 11px, var(--input-bg) 13px)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
