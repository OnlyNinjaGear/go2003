"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const BLOCK = 12
const GAP = 2
const UNIT = BLOCK + GAP

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

  const pct = value ?? 0
  const totalBlocks = Math.floor(innerW / UNIT)
  const filledBlocks = Math.floor((totalBlocks * pct) / 100)
  const indicatorW = filledBlocks > 0 ? filledBlocks * UNIT - GAP : 0

  return (
    <ProgressPrimitive.Root
      ref={rootRef}
      data-slot="progress"
      className={cn("relative h-6 p-0.5 w-full overflow-hidden bevel-in bg-input-bg", className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full bg-primary"
        style={{ width: indicatorW }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
