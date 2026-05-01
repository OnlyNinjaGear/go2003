import { Button } from "@/registry/steam2003/ui/button";
import { Input } from "@/registry/steam2003/ui/input";
import { Checkbox } from "@/registry/steam2003/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/steam2003/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/registry/steam2003/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/registry/steam2003/ui/card";
import { X } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-20">
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
              <span className="peer-aria-[invalid=true]:text-destructive-light">Invalid checked</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox />
              <span className="peer-data-[state=checked]:text-primary peer-data-[state=indeterminate]:text-primary">Another checkbox</span>
            </label>
          </div>
        </section>
        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Tabs</h2>

          <Tabs defaultValue="internet">
            <TabsList>
              <TabsTrigger value="internet">Internet</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="lan">LAN</TabsTrigger>
              <TabsTrigger value="friends">Friends</TabsTrigger>
            </TabsList>
            <TabsContent value="internet">
              <div className="bevel-in bg-input-bg p-2">Internet servers content</div>
            </TabsContent>
            <TabsContent value="favorites">
              <div className="bevel-in bg-input-bg p-2">Favorites content</div>
            </TabsContent>
            <TabsContent value="history">
              <div className="bevel-in bg-input-bg p-2">History content</div>
            </TabsContent>
            <TabsContent value="lan">
              <div className="bevel-in bg-input-bg p-2">LAN content</div>
            </TabsContent>
            <TabsContent value="friends">
              <div className="bevel-in bg-input-bg p-2">Friends content</div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Table</h2>

          <Table containerClassName="max-h-[160px] bg-input-bg">
            <TableHeader>
              <TableRow>
                <TableHead colSpan={4}>Installed games<Button>Button</Button></TableHead>
              </TableRow>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Last Played</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Half-Life 2</TableCell>
                <TableCell>4.2 GB</TableCell>
                <TableCell>Today</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow data-state="selected">
                <TableCell>Counter-Strike</TableCell>
                <TableCell>600 MB</TableCell>
                <TableCell>Yesterday</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Team Fortress 2</TableCell>
                <TableCell>15 GB</TableCell>
                <TableCell>3 days ago</TableCell>
                <TableCell>Needs update</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Portal</TableCell>
                <TableCell>870 MB</TableCell>
                <TableCell>Last week</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dota 2</TableCell>
                <TableCell>32 GB</TableCell>
                <TableCell>Never</TableCell>
                <TableCell>Needs update</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Left 4 Dead 2</TableCell>
                <TableCell>8.1 GB</TableCell>
                <TableCell>2 weeks ago</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Left 4 Dead 2</TableCell>
                <TableCell>8.1 GB</TableCell>
                <TableCell>2 weeks ago</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Left 4 Dead 2</TableCell>
                <TableCell>8.1 GB</TableCell>
                <TableCell>2 weeks ago</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Left 4 Dead 2</TableCell>
                <TableCell>8.1 GB</TableCell>
                <TableCell>2 weeks ago</TableCell>
                <TableCell>Ready</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}><Button size="sm">Connect</Button></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="font-bold">Card</h2>

          <div className="flex flex-wrap gap-3">
            <Card className="w-64">
              <CardHeader>
                <CardTitle>Steam Account</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
                <CardAction>
                  <Button size="sm">Edit</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Username: GabeN</p>
                <p>Status: Online</p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" size="sm" className="w-full">Delete Account</Button>
              </CardFooter>
            </Card>

            <Card className="w-64">
              <CardHeader>
                <CardTitle>No Footer</CardTitle>
                <CardDescription>Simple card without footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Some content goes here.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
