import { Button } from "@/registry/steam2003/ui/button";
import { Input } from "@/registry/steam2003/ui/input";
import { Checkbox } from "@/registry/steam2003/ui/checkbox";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-base font-bold">go2003 registry</h1>
        <p>
          Steam 2003 / Windows XP-era reskin of shadcn/ui primitives.
          Components will appear here as they are added.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6">
        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Button</h2>

          <div className="flex flex-col gap-1">
            <span>Variants</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span>Sizes</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Icon"><X /></Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span>States</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button autoFocus>Focused</Button>
            </div>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Input</h2>

          <div className="flex flex-col gap-2 max-w-xs">
            <Input placeholder="Placeholder text" />
            <Input defaultValue="Has value" />
            <Input type="password" defaultValue="secret" />
            <Input defaultValue="Read only" readOnly />
            <Input defaultValue="Disabled" disabled />
            <Input defaultValue="Invalid value" aria-invalid="true" />
          </div>

          <div className="flex flex-col gap-1">
            <span>With button</span>
            <div className="flex gap-1.5 max-w-xs">
              <Input placeholder="Search Steam..." className="flex-1" />
              <Button size="sm">Find</Button>
            </div>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Checkbox</h2>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox />
              <span>Unchecked</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox defaultChecked />
              <span className="peer-data-[state=checked]:text-primary">Checked</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox checked="indeterminate" />
              <span className="peer-data-[state=indeterminate]:text-primary">Indeterminate</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox disabled />
              <span className="peer-disabled:text-[var(--muted)]">Disabled unchecked</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox defaultChecked disabled />
              <span className="peer-disabled:text-[var(--muted)]">Disabled checked</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox aria-invalid="true" />
              <span className="peer-aria-[invalid=true]:text-destructive">Invalid</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox aria-invalid="true" defaultChecked />
              <span className="peer-aria-[invalid=true]:text-destructive">Invalid checked</span>
            </label>
          </div>
        </section>
      </main>
    </div>
  );
}
