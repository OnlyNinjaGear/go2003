"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Button } from "@/registry/steam2003/ui/button"
import { Input } from "@/registry/steam2003/ui/input"
import { Textarea } from "@/registry/steam2003/ui/textarea"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group bevel-in relative flex h-6 w-full min-w-0 items-center bg-input-bg has-[>textarea]:h-auto",
        "has-[>[data-slot=input-group-control]:focus-visible]:win32-focus-primary",
        "has-[[data-slot][aria-invalid=true]]:[box-shadow:0_0_0_1px_var(--destructive)] has-[[data-slot][aria-invalid=true]]:text-destructive-light",
        className
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1 text-[11px] font-normal text-muted-foreground select-none group-data-[disabled=true]/input-group:text-[var(--panel-pressed)] [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-1.5",
        "inline-end": "order-last pr-1.5",
        "block-start":
          "order-first w-full justify-start px-1.5 pt-1.5 group-has-[>input]/input-group:pt-1 [.border-b]:pb-2",
        "block-end":
          "order-last w-full justify-start px-1.5 pb-1.5 group-has-[>input]/input-group:pb-1 [.border-t]:pt-2",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva("flex items-center gap-1 text-[11px]", {
  variants: {
    size: {
      xs: "h-5 gap-1 px-1 has-[>svg]:px-1 [&>svg:not([class*='size-'])]:size-3",
      sm: "h-6 gap-1 px-1.5 has-[>svg]:px-1.5",
      "icon-xs": "size-5 p-0 has-[>svg]:p-0",
      "icon-sm": "size-6 p-0 has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
})

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-1.5 text-[11px] text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 border-0 bg-transparent px-0 shadow-none outline-none focus-visible:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none border-0 bg-transparent px-0 py-1 shadow-none outline-none focus-visible:shadow-none",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
