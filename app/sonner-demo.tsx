"use client"

import { Loader2Icon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/registry/steam2003/ui/button"
import { Progress } from "@/registry/steam2003/ui/progress"

export function SonnerDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("Steam update downloaded")}>Default</Button>
      <Button onClick={() => toast.success("Half-Life 2 installed")}>Success</Button>
      <Button onClick={() => toast.error("Installation failed — error -107")}>Error</Button>
      <Button onClick={() => toast.warning("Low disk space on C:")}>Warning</Button>
      <Button onClick={() => toast.info("Counter-Strike update available")}>Info</Button>
      <Button
        onClick={() =>
          toast.custom(
            (id) => (
              <div className="bevel-out bg-panel p-2 w-80 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <Loader2Icon className="size-4 win32-spin shrink-0" />
                  <span>Downloading update…</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Progress value={50} className="flex-1" />
                  <Button size="sm" onClick={() => toast.dismiss(id)}>Cancel</Button>
                </div>
              </div>
            ),
            { duration: Infinity }
          )
        }
      >
        Loading
      </Button>
    </div>
  )
}
