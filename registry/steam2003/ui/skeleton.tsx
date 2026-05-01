import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-[var(--panel-pressed)] [box-shadow:inset_1px_1px_0_var(--border-dark),inset_-1px_-1px_0_var(--border-light)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
