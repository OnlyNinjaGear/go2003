"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "@/lib/utils";

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
        "disabled:bg-panel-pressed disabled:text-[var(--border-light)] disabled:cursor-default",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="group flex items-center justify-center">
        <Check className="size-3 stroke-[2.5] group-data-[state=indeterminate]:hidden" />
        <Minus className="size-3 stroke-[2.5] group-data-[state=checked]:hidden" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
