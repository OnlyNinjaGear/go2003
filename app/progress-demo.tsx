"use client"

import * as React from "react"
import { Progress } from "@/registry/steam2003/ui/progress"

export function ProgressDemo() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => {
        if (v >= 100) { clearInterval(id); return 100 }
        return v + 1
      })
    }, 50)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex flex-col gap-2 max-w-xs">
      <Progress value={value} />
      <span>{value}%</span>
      <button
        className="bevel-out bg-panel px-2 py-0.5 cursor-default active:bevel-in w-fit"
        onClick={() => setValue(0)}
      >
        Reset
      </button>
    </div>
  )
}
