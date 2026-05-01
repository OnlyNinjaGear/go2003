"use client"

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
      <Button onClick={() => toast.loading("Downloading update…", { description: <Progress value={50} className="w-full" />, action: { label: "Cancel", onClick: () => toast.dismiss() } })}>Loading</Button>
    </div>
  )
}
