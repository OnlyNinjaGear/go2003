import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 whitespace-nowrap select-none cursor-default",
    "font-sans text-[11px] leading-none",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
    "outline-none focus-visible:win32-focus",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bevel-out panel-gradient text-foreground active:bevel-in active:panel-gradient-pressed",
        destructive:
          "bevel-out text-white [background:linear-gradient(to_bottom,#A04A4A,#6B2828)] active:bevel-in active:[background:linear-gradient(to_bottom,#6B2828,#A04A4A)]",
        outline:
          "bevel-out bg-[var(--input-bg)] text-[var(--input-fg)] active:bevel-in",
        secondary:
          "bevel-out [background:linear-gradient(to_bottom,#9BAB8C,#7B8B6C)] text-foreground active:bevel-in active:[background:linear-gradient(to_bottom,#7B8B6C,#9BAB8C)]",
        ghost:
          "border border-transparent bg-transparent text-foreground active:bevel-in active:panel-gradient-pressed",
        link: "border border-transparent bg-transparent text-[var(--accent)] underline underline-offset-2",
      },
      size: {
        default: "h-7 px-3",
        sm: "h-6 px-2",
        lg: "h-8 px-4",
        icon: "h-7 w-7 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
