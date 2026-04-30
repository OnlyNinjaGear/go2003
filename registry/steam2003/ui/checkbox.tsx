"use client"

import * as React from "react"
import { CheckIcon, MinusIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer bevel-in size-[13px] shrink-0 cursor-default",
        "bg-input-bg text-input-fg",
        "outline-none focus-visible:win32-focus focus-visible:[outline-offset:1px]",
        "disabled:bg-panel-pressed disabled:text-[var(--border-light)] disabled:pointer-events-none",
        "aria-invalid:border-destructive",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="group flex items-center justify-center"
      >
        <CheckIcon className="size-3 stroke-[2.5] group-data-[state=indeterminate]:hidden" />
        <MinusIcon className="size-3 stroke-[2.5] group-data-[state=checked]:hidden" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
