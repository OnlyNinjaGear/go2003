"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 whitespace-nowrap select-none cursor-default shrink-0",
    "font-sans text-[11px] leading-none",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
    "outline-none focus-visible:win32-focus",
    "disabled:text-[var(--panel-pressed)] disabled:text-shadow-[0.5px_0.5px_0px_var(--border-light)] disabled:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bevel-out bg-panel text-foreground data-[state=on]:bevel-in data-[state=on]:bg-panel-pressed",
      },
      size: {
        sm: "h-5 px-1.5",
        default: "h-6 px-2",
        lg: "h-7 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
