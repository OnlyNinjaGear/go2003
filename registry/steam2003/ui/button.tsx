import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 whitespace-nowrap select-none cursor-default shrink-0",
    "font-sans text-[11px] leading-none",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
    "outline-none focus-visible:win32-focus active:focus-visible:outline-none active:focus-visible:shadow-none",
    "disabled:text-[var(--panel-pressed)] disabled:text-shadow-[0.5px_0.5px_0px_var(--border-light)] disabled:pointer-events-none",
    "aria-invalid:border-destructive",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bevel-out bg-panel text-foreground active:bevel-in active:bg-background active:text-muted-foreground",
        destructive:
          "bevel-out bg-destructive text-destructive-foreground active:bevel-in active:bg-destructive-pressed",
        outline:
          "bevel-out bg-panel text-foreground active:bevel-in active:bg-background",
        secondary:
          "bevel-out bg-panel text-foreground active:bevel-in active:bg-background",
        ghost:
          "border border-transparent bg-transparent text-foreground hover:bg-panel-hover active:bevel-in active:bg-background focus-visible:outline-none focus-visible:shadow-none focus-visible:bg-panel-hover",
        link: "border border-transparent bg-transparent text-[var(--accent)] hover:underline focus-visible:underline focus-visible:outline-none focus-visible:shadow-none underline-offset-2 cursor-pointer",
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
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
