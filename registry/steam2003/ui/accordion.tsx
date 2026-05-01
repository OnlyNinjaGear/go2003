"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "[&:not(:last-child)]:border-b [&:not(:last-child)]:[border-bottom:1px_solid_var(--border-dark)] [&:not(:last-child)]:[box-shadow:0_1px_0_var(--border-light)]",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center gap-1.5 py-1.5 text-left cursor-default select-none outline-none",
          "focus-visible:win32-focus",
          "disabled:pointer-events-none disabled:text-[var(--panel-pressed)] disabled:[text-shadow:0.5px_0.5px_0px_var(--border-light)]",
          "[&[data-state=open]>svg]:rotate-90",
          className
        )}
        {...props}
      >
        <svg width="5" height="7" viewBox="0 0 5 7" aria-hidden="true" className="shrink-0 text-muted-foreground" fill="currentColor">
          <polygon points="5,3.5 0,0 0,7" />
        </svg>
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:hidden"
      {...props}
    >
      <div className={cn("pb-2 pl-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
