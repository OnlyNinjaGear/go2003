import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn("flex min-w-0 flex-col gap-2", className)}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default: "bevel-out bg-panel text-foreground",
        secondary: "bevel-out bg-secondary text-secondary-foreground",
        muted: "bevel-in bg-input-bg text-input-fg",
        tinted: "bevel-out bg-[var(--accent)] text-accent-foreground",
        outline: "bevel-out bg-background",
        ghost: "border-none bg-transparent",
        destructive: "bevel-out bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot.Root : "div"

  return (
    <Comp
      data-slot="bubble-content"
      className={cn(
        "w-fit max-w-full min-w-0 px-2 py-1 text-[11px] leading-snug wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:outline-none [button,a]:focus-visible:win32-focus",
        className
      )}
      {...props}
    />
  )
}

const bubbleReactionsVariants = cva(
  "bevel-out z-10 flex w-fit shrink-0 items-center justify-center gap-1 self-end bg-panel p-1 text-[11px] leading-none",
  {
    variants: {
      side: {
        top: "order-first",
        bottom: "mb-1 ml-1.5 mr-auto",
      },
      align: {
        start: "self-start",
        end: "self-end",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
