import { Button } from "@/registry/steam2003/ui/button";

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
        <section className="bevel-in panel-gradient flex flex-col gap-3 p-3">
          <h2 className="font-bold">Button</h2>

          <div className="flex flex-col gap-1">
            <span className="text-foreground/80">Variants</span>
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
            <span className="text-foreground/80">Sizes</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="Icon">
                X
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-foreground/80">States</span>
            <div className="flex flex-wrap items-center gap-2">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button autoFocus>Focused (Tab to others)</Button>
              <Button asChild>
                <a href="#">As link (asChild)</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
