"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const MIN_BLOCK = 10
const GAP = 2

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [innerW, setInnerW] = React.useState(0)

  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setInnerW(el.clientWidth - 4))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const pct = Math.min(100, Math.max(0, value ?? 0))
  const totalBlocks = Math.max(1, Math.floor((innerW + GAP) / (MIN_BLOCK + GAP)))
  const blockW = (innerW - (totalBlocks - 1) * GAP) / totalBlocks
  const filledBlocks = Math.round((totalBlocks * pct) / 100)

  return (
    <ProgressPrimitive.Root
      ref={rootRef}
      data-slot="progress"
      className={cn("relative h-6 p-0.5 w-full overflow-hidden bevel-in bg-input-bg", className)}
      {...props}
    >
      <div className="flex h-full" style={{ gap: GAP }}>
        {Array.from({ length: filledBlocks }).map((_, i) => (
          <div key={i} className="h-full bg-primary shrink-0" style={{ width: blockW }} />
        ))}
      </div>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
