"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof SelectPrimitive.Trigger>, "size">) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex w-full items-stretch h-6 cursor-default select-none outline-none",
        "bevel-in bg-input-bg text-input-fg font-sans text-[11px]",
        "focus-visible:win32-focus-primary",
        "disabled:bg-panel-pressed disabled:text-[var(--muted)] disabled:pointer-events-none",
        "aria-invalid:shadow-[0_0_0_1px_var(--destructive)]",
        "data-[placeholder]:[&_[data-slot=select-value]]:text-[var(--muted)]",
        className
      )}
      {...props}
    >
      <span className="flex-1 px-1.5 flex items-center min-w-0 truncate text-left">
        {children}
      </span>
      <SelectPrimitive.Icon asChild>
        <span className="flex items-center justify-center shrink-0 w-4 self-stretch">
          <svg width="7" height="5" viewBox="0 0 7 5">
            <polygon points="3.5,5 7,0 0,0" fill="var(--muted-foreground)" />
          </svg>
        </span>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        className={cn(
          "relative z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden",
          "bevel-out bg-panel text-foreground font-sans text-[11px]",
          position === "popper" && "data-[side=bottom]:-translate-y-px data-[side=top]:translate-y-px",
          className
        )}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className="p-0">
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-1 py-0.5 text-[var(--muted)] cursor-default select-none", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center pl-5 pr-1 py-0.5 outline-none",
        "focus:bg-primary focus:text-primary-foreground",
        "data-[disabled]:text-[var(--muted)] data-[disabled]:pointer-events-none",
        className
      )}
      {...props}
    >
      <span className="absolute left-1 flex items-center justify-center size-3">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-3 stroke-[2.5]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("h-px bg-border-dark pointer-events-none my-0.5", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-0.5 bg-panel", className)}
      {...props}
    >
      <ChevronUpIcon className="size-3" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-0.5 bg-panel", className)}
      {...props}
    >
      <ChevronDownIcon className="size-3" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
