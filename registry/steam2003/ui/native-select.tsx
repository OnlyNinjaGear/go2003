import * as React from "react"
import { cn } from "@/lib/utils"

function NativeSelect({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"select">, "size"> & { size?: "sm" | "default" }) {
  return (
    <div
      className="group/native-select relative w-fit"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        data-size={size}
        className={cn(
          "bevel-in h-6 w-full min-w-0 appearance-none bg-input-bg pl-1.5 pr-6 pt-0.5 font-sans text-[11px] leading-none text-input-fg outline-none",
          "selection:bg-primary selection:text-primary-foreground",
          "placeholder:text-[var(--muted)]",
          "focus-visible:win32-focus-primary",
          "aria-invalid:shadow-[0_0_0_1px_var(--destructive)] aria-invalid:text-destructive-light",
          "disabled:bg-panel-pressed disabled:text-[var(--muted)] disabled:cursor-default disabled:pointer-events-none",
          "data-[size=sm]:h-5 data-[size=sm]:text-[11px]",
          className
        )}
        {...props}
      />
      <span
        className="pointer-events-none absolute top-1/2 right-1 flex -translate-y-1/2 select-none"
        aria-hidden="true"
        data-slot="native-select-icon"
      >
        <svg width="7" height="4" viewBox="0 0 7 4">
          <polygon points="3.5,4 7,0 0,0" fill="var(--muted-foreground)" />
        </svg>
      </span>
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("bg-popover text-popover-foreground", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("bg-popover text-popover-foreground", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
