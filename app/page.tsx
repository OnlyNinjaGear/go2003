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
import { Progress } from "@/registry/steam2003/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/registry/steam2003/ui/dialog";
import { ProgressDemo } from "./progress-demo";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/steam2003/ui/select";
import { Badge } from "@/registry/steam2003/ui/badge";
import { Switch } from "@/registry/steam2003/ui/switch";
import { Slider } from "@/registry/steam2003/ui/slider";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/registry/steam2003/ui/tooltip";
import { Field, FieldLabel } from "@/registry/steam2003/ui/field";
import { RadioGroup, RadioGroupItem } from "@/registry/steam2003/ui/radio-group";
import { Textarea } from "@/registry/steam2003/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/registry/steam2003/ui/accordion";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from "@/registry/steam2003/ui/popover";
import { Alert, AlertTitle, AlertDescription } from "@/registry/steam2003/ui/alert";
import {
  AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader,
  AlertDialogFooter, AlertDialogTitle, AlertDialogDescription,
  AlertDialogAction, AlertDialogCancel,
} from "@/registry/steam2003/ui/alert-dialog";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/registry/steam2003/ui/avatar";
import { Skeleton } from "@/registry/steam2003/ui/skeleton";
import { Toggle } from "@/registry/steam2003/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/registry/steam2003/ui/toggle-group";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/registry/steam2003/ui/collapsible";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/registry/steam2003/ui/breadcrumb";
import {
  Pagination, PaginationContent, PaginationItem,
  PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis,
} from "@/registry/steam2003/ui/pagination";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/registry/steam2003/ui/hover-card";
import { ScrollArea } from "@/registry/steam2003/ui/scroll-area";
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from "@/registry/steam2003/ui/sheet";
import { InfoIcon, AlertTriangleIcon, XCircleIcon, BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon, ChevronDownIcon, SearchIcon, TerminalIcon } from "lucide-react";
import {
  Command, CommandInput, CommandList, CommandEmpty,
  CommandGroup, CommandItem, CommandShortcut, CommandSeparator,
} from "@/registry/steam2003/ui/command";
import {
  NavigationMenu, NavigationMenuList, NavigationMenuItem,
  NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink,
} from "@/registry/steam2003/ui/navigation-menu";
import { Calendar } from "@/registry/steam2003/ui/calendar";
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose,
} from "@/registry/steam2003/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/registry/steam2003/ui/carousel";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/registry/steam2003/ui/input-otp";
import { SonnerDemo } from "./sonner-demo";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/registry/steam2003/ui/menubar";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuLabel,
} from "@/registry/steam2003/ui/context-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/registry/steam2003/ui/dropdown-menu";
import { X } from "lucide-react";
import { AspectRatio } from "@/registry/steam2003/ui/aspect-ratio";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/registry/steam2003/ui/resizable";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-20">
      <header className="flex flex-col gap-1">
        <h1 className="text-base ">go2003 registry</h1>
        <p>
          Steam 2003 / Windows XP-era reskin of shadcn/ui primitives.
          Components will appear here as they are added.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6">

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Sonner</h2>
          <SonnerDemo />
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Command</h2>
          <Command className="bevel-out bg-panel max-w-xs">
            <CommandInput placeholder="Search games…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Games">
                <CommandItem><TerminalIcon />Half-Life 2<CommandShortcut>Play</CommandShortcut></CommandItem>
                <CommandItem><TerminalIcon />Counter-Strike<CommandShortcut>Play</CommandShortcut></CommandItem>
                <CommandItem disabled><TerminalIcon />Left 4 Dead 2<CommandShortcut>Update</CommandShortcut></CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Actions">
                <CommandItem><SearchIcon />Add a game…</CommandItem>
                <CommandItem><SearchIcon />Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Navigation Menu</h2>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Store</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 min-w-[180px] flex flex-col">
                    <NavigationMenuLink className="px-3 py-0.5">Featured</NavigationMenuLink>
                    <NavigationMenuLink className="px-3 py-0.5">New releases</NavigationMenuLink>
                    <NavigationMenuLink className="px-3 py-0.5">Specials</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 min-w-[180px] flex flex-col">
                    <NavigationMenuLink className="px-3 py-0.5">Forums</NavigationMenuLink>
                    <NavigationMenuLink className="px-3 py-0.5">Workshop</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-2 h-6 flex items-center cursor-default hover:bg-primary hover:text-primary-foreground">About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Calendar</h2>
          <Calendar mode="single" />
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Drawer</h2>
          <div className="flex flex-wrap gap-2">
            <Drawer>
              <DrawerTrigger asChild><Button>Open bottom</Button></DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Game settings</DrawerTitle>
                  <DrawerDescription>Configure Half-Life 2 launch options.</DrawerDescription>
                </DrawerHeader>
                <div className="p-3 flex flex-col gap-2">
                  <label className="flex items-center gap-1.5 cursor-default"><Checkbox defaultChecked /><span>Enable console</span></label>
                  <label className="flex items-center gap-1.5 cursor-default"><Checkbox /><span>Safe mode</span></label>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild><Button variant="secondary" size="sm">Cancel</Button></DrawerClose>
                  <DrawerClose asChild><Button size="sm">Apply</Button></DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Carousel</h2>
          <Carousel className="bevel-in w-full max-w-sm mx-8 overflow-hidden">
            <CarouselContent className="-ml-0">
              {[
                { id: 220, name: "Half-Life 2" },
                { id: 440, name: "Team Fortress 2" },
                { id: 400, name: "Portal" },
                { id: 550, name: "Left 4 Dead 2" },
                { id: 620, name: "Portal 2" },
              ].map((game) => (
                <CarouselItem key={game.id} className="pl-0">
                  <img
                    src={`https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${game.id}/header.jpg`}
                    alt={game.name}
                    className="block w-full h-32 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Input OTP</h2>
          <div className="flex flex-col gap-3">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Alert</h2>

          <div className="flex flex-col gap-2 max-w-sm">
            <Alert>
              <InfoIcon />
              <AlertTitle>Update available</AlertTitle>
              <AlertDescription>Steam has downloaded an update. Restart to apply.</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTriangleIcon />
              <AlertTitle>Low disk space</AlertTitle>
              <AlertDescription>You have less than 1 GB free on drive C:.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <XCircleIcon />
              <AlertTitle>Installation failed</AlertTitle>
              <AlertDescription>Half-Life 2 could not be installed. Error code: -107.</AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>No icon</AlertTitle>
              <AlertDescription>Alert without an icon also works.</AlertDescription>
            </Alert>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Alert Dialog</h2>
          <div className="flex flex-wrap gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild><Button>Delete game</Button></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Uninstall Half-Life 2?</AlertDialogTitle>
                  <AlertDialogDescription>This will remove all game files and saved data from your computer.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Uninstall</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Avatar</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Avatar className="size-10"><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>SC</AvatarFallback><AvatarBadge className="bg-green-600 dark:bg-green-800" /></Avatar>
            <Avatar className="size-8"><AvatarFallback>HL</AvatarFallback><AvatarBadge className="bg-orange-600 dark:bg-orange-800" /></Avatar>
            <Avatar className="size-12"><AvatarFallback>GN</AvatarFallback><AvatarBadge className="bg-red-600 dark:bg-red-800" /></Avatar>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Skeleton</h2>
          <div className="flex flex-col gap-2 max-w-xs">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex items-center gap-2 mt-1">
              <Skeleton className="size-8 rounded-full" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Toggle</h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              <Toggle><BoldIcon /></Toggle>
              <Toggle defaultPressed><ItalicIcon /></Toggle>
              <Toggle><UnderlineIcon /></Toggle>
              <Toggle disabled><BoldIcon /></Toggle>
            </div>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left"><AlignLeftIcon /></ToggleGroupItem>
              <ToggleGroupItem value="center"><AlignCenterIcon /></ToggleGroupItem>
              <ToggleGroupItem value="right"><AlignRightIcon /></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Collapsible</h2>
          <Collapsible className="max-w-xs">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="flex w-full justify-between">
                Installed games <ChevronDownIcon className="size-3" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="bevel-in bg-input-bg flex flex-col">
                <div className="px-2 py-1">Half-Life 2</div>
                <div className="px-2 py-1">Counter-Strike</div>
                <div className="px-2 py-1">Team Fortress 2</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Breadcrumb</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Steam</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Library</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Half-Life 2</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Pagination</h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationLink href="#">12</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Hover Card</h2>
          <div className="flex flex-wrap gap-3">
            <HoverCard>
              <HoverCardTrigger asChild><Button variant="link">@valve</Button></HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8"><AvatarFallback>VL</AvatarFallback></Avatar>
                  <div><div className="">Valve</div><div className="text-muted-foreground">Game developer since 1996</div></div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Scroll Area</h2>
          <ScrollArea className="bevel-in bg-input-bg h-32 w-64">
            <div className="p-2 flex flex-col">
              {["Half-Life 2", "Counter-Strike", "Team Fortress 2", "Portal", "Dota 2", "Left 4 Dead 2", "Garry's Mod", "Portal 2", "CS:GO", "Half-Life: Alyx"].map(g => (
                <div key={g} className="py-0.5 px-1">{g}</div>
              ))}
            </div>
          </ScrollArea>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Sheet</h2>
          <div className="flex flex-wrap gap-2">
            <Sheet>
              <SheetTrigger asChild><Button>Open right</Button></SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Game settings</SheetTitle>
                  <SheetDescription>Configure Half-Life 2 options.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 p-3">
                  <label className="flex items-center gap-1.5 cursor-default"><Checkbox defaultChecked /><span>Enable HDR</span></label>
                  <label className="flex items-center gap-1.5 cursor-default"><Checkbox /><span>Anti-aliasing</span></label>
                  <label className="flex items-center gap-1.5 cursor-default"><Checkbox defaultChecked /><span>Vsync</span></label>
                </div>
                <SheetFooter>
                  <SheetClose asChild><Button variant="secondary" size="sm">Cancel</Button></SheetClose>
                  <SheetClose asChild><Button size="sm">Apply</Button></SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild><Button variant="secondary">Open left</Button></SheetTrigger>
              <SheetContent side="left">
                <SheetHeader><SheetTitle>Navigation</SheetTitle></SheetHeader>
                <div className="p-3 flex flex-col gap-1">
                  <Button variant="ghost" className="justify-start">Library</Button>
                  <Button variant="ghost" className="justify-start">Store</Button>
                  <Button variant="ghost" className="justify-start">Community</Button>
                  <Button variant="ghost" className="justify-start">Profile</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Menubar</h2>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Steam</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Settings<MenubarShortcut>Ctrl+,</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Exit<MenubarShortcut>Alt+F4</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Games</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Add a game…</MenubarItem>
                <MenubarItem>Activate a product…</MenubarItem>
                <MenubarSeparator />
                <MenubarCheckboxItem checked>Show friends panel</MenubarCheckboxItem>
                <MenubarCheckboxItem>Show news</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Sort by</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Name</MenubarItem>
                    <MenubarItem>Last played</MenubarItem>
                    <MenubarItem>Size</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Small mode</MenubarItem>
                <MenubarItem disabled>Offline mode<MenubarShortcut>unavailable</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Help</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Steam support</MenubarItem>
                <MenubarItem>About Steam</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Popover</h2>

          <div className="flex flex-wrap gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button>Game info</Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <PopoverHeader>
                  <PopoverTitle>Half-Life 2</PopoverTitle>
                  <PopoverDescription>Valve · 2004</PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size</span>
                    <span>4.2 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last played</span>
                    <span>Today</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span>Ready</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Filter</Button>
              </PopoverTrigger>
              <PopoverContent className="w-48" align="start">
                <PopoverHeader>
                  <PopoverTitle>Show games</PopoverTitle>
                </PopoverHeader>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox defaultChecked />
                    <span>Installed</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox defaultChecked />
                    <span>Not installed</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox />
                    <span>Hidden</span>
                  </label>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Accordion</h2>

          <Accordion type="single" collapsible defaultValue="graphics" className="max-w-xs">
            <AccordionItem value="graphics">
              <AccordionTrigger>Graphics settings</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox defaultChecked />
                    <span>Enable HDR</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox />
                    <span>Anti-aliasing</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-default">
                    <Checkbox defaultChecked />
                    <span>Vsync</span>
                  </label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="audio">
              <AccordionTrigger>Audio settings</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <span>Master volume</span>
                    <Slider defaultValue={[80]} className="w-24" />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Music</span>
                    <Slider defaultValue={[40]} className="w-24" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="network">
              <AccordionTrigger>Network settings</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-20 shrink-0">Rate</span>
                    <Input defaultValue="30000" className="w-24" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-20 shrink-0">Update rate</span>
                    <Input defaultValue="128" className="w-24" />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Textarea</h2>

          <div className="flex flex-col gap-2 max-w-xs">
            <Textarea placeholder="Write a message..." />
            <Textarea defaultValue="Read only content" readOnly />
            <Textarea defaultValue="Disabled content" disabled />
            <Textarea defaultValue="Invalid content" aria-invalid="true" />
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Radio Group</h2>

          <div className="flex flex-wrap gap-6">
            <RadioGroup defaultValue="cs">
              <label className="flex items-center gap-1.5 cursor-default">
                <RadioGroupItem value="hl2" />
                <span>Half-Life 2</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-default">
                <RadioGroupItem value="cs" />
                <span>Counter-Strike</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-default">
                <RadioGroupItem value="tf2" />
                <span>Team Fortress 2</span>
              </label>
            </RadioGroup>

            <RadioGroup defaultValue="medium">
              <Field orientation="horizontal" data-disabled="true">
                <RadioGroupItem value="small" id="rg-small" disabled />
                <FieldLabel htmlFor="rg-small">Small icons</FieldLabel>
              </Field>
              <label className="flex items-center gap-1.5 cursor-default">
                <RadioGroupItem value="medium" id="rg-medium" />
                <span>Medium icons</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-default">
                <RadioGroupItem value="large" id="rg-large" />
                <span>Large icons</span>
              </label>
            </RadioGroup>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Context Menu</h2>

          <ContextMenu>
            <ContextMenuTrigger className="bevel-in bg-input-bg flex h-16 items-center justify-center text-muted-foreground select-none">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>Half-Life 2</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Play<ContextMenuShortcut>Enter</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Install<ContextMenuShortcut>Ctrl+I</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>Show in library</ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>Auto-update</ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuSub>
                <ContextMenuSubTrigger>Manage</ContextMenuSubTrigger>
                <ContextMenuSubContent>
                  <ContextMenuItem>Verify files</ContextMenuItem>
                  <ContextMenuItem>Browse local files</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">Uninstall</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem disabled>
                Create shortcut<ContextMenuShortcut>unavailable</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Dropdown Menu</h2>

          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Games</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Library</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Half-Life 2
                    <DropdownMenuShortcut>Play</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Counter-Strike
                    <DropdownMenuShortcut>Play</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    Left 4 Dead 2
                    <DropdownMenuShortcut>Update</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Sort by</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Name</DropdownMenuItem>
                    <DropdownMenuItem>Last played</DropdownMenuItem>
                    <DropdownMenuItem>Size</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">Uninstall</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">View options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuCheckboxItem checked>Show friends panel</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Show news feed</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Show download progress</DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="small">
                  <DropdownMenuLabel>Icon size</DropdownMenuLabel>
                  <DropdownMenuRadioItem value="small">Small</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="large">Large</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Field</h2>

          <div className="flex flex-col gap-3 max-w-xs">
            <Field orientation="horizontal">
              <Checkbox id="field-cb-1" />
              <FieldLabel htmlFor="field-cb-1">Enable notifications</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="field-cb-2" defaultChecked />
              <FieldLabel htmlFor="field-cb-2">Auto-update games</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled="true">
              <Checkbox id="field-cb-3" disabled />
              <FieldLabel htmlFor="field-cb-3">Disabled option</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Switch id="field-sw-1" />
              <FieldLabel htmlFor="field-sw-1">Show friends online</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled="true">
              <Switch id="field-sw-2" disabled />
              <FieldLabel htmlFor="field-sw-2">Disabled switch</FieldLabel>
            </Field>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Switch</h2>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-default">
              <Switch />
              <span>Off</span>
            </label>
            <label className="flex items-center gap-2 cursor-default">
              <Switch defaultChecked />
              <span>On</span>
            </label>
            <Field orientation="horizontal" data-disabled="true">
              <Switch id="switch-disabled-off" disabled />
              <FieldLabel htmlFor="switch-disabled-off">Disabled off</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled="true">
              <Switch id="switch-disabled-on" defaultChecked disabled />
              <FieldLabel htmlFor="switch-disabled-on">Disabled on</FieldLabel>
            </Field>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Slider</h2>

          <div className="flex flex-col gap-4 max-w-xs">
            <Slider defaultValue={[33]} />
            <Slider defaultValue={[66]} />
            <Slider defaultValue={[0]} disabled />
            <Slider defaultValue={[25, 75]} />
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Badge</h2>

          <div className="flex flex-wrap items-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge>Ready</Badge>
            <Badge variant="destructive">Needs update</Badge>
            <Badge variant="secondary">Offline</Badge>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Tooltip</h2>

          <div className="flex flex-wrap gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Install Half-Life 2</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary">Server info</Button>
              </TooltipTrigger>
              <TooltipContent side="right">128 tick · sv_cheats 0 · VAC secured</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" aria-label="Close"><X /></Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Close window</TooltipContent>
            </Tooltip>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Button</h2>

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
          <h2 className="">Input</h2>

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
          <h2 className="">Checkbox</h2>

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
            <Field orientation="horizontal" data-disabled="true">
              <Checkbox id="cb-disabled-off" disabled />
              <FieldLabel htmlFor="cb-disabled-off">Disabled unchecked</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled="true">
              <Checkbox id="cb-disabled-on" defaultChecked disabled />
              <FieldLabel htmlFor="cb-disabled-on">Disabled checked</FieldLabel>
            </Field>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox aria-invalid="true" />
              <span className="peer-aria-[invalid=true]:text-destructive">Invalid</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-default">
              <Checkbox aria-invalid="true" defaultChecked />
              <span className="peer-aria-[invalid=true]:text-destructive-light">Invalid checked</span>
            </label>
          </div>
        </section>
        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Tabs</h2>

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
          <h2 className="">Table</h2>

          <Table containerClassName="max-h-[160px] bg-input-bg">
            <TableHeader>
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

            </TableFooter>
          </Table>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Card</h2>

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

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Dialog</h2>

          <div className="flex flex-wrap gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Steam — Warning</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  Are you sure you want to delete Half-Life 2? This will remove all saved games.
                </DialogDescription>
                <DialogFooter>
                  <DialogClose asChild><Button variant="secondary" size="sm">Cancel</Button></DialogClose>
                  <DialogClose asChild><Button variant="destructive" size="sm">Delete</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button>No Close Button</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Downloading update…</DialogTitle>
                </DialogHeader>
                <div className="px-3 pt-3 pb-1 flex flex-col gap-2">
                  <Progress value={66} />
                </div>
                <DialogFooter className="pr-3">
                  <DialogClose asChild><Button variant="secondary" size="sm">Cancel</Button></DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Progress</h2>

          <div className="flex flex-col gap-2 max-w-xs">
            <Progress value={0} />
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>

          <ProgressDemo />
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2 className="">Select</h2>

          <div className="flex flex-wrap items-start gap-3">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select a game…" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Valve</SelectLabel>
                  <SelectItem value="hl2">Half-Life 2</SelectItem>
                  <SelectItem value="cs">Counter-Strike</SelectItem>
                  <SelectItem value="tf2">Team Fortress 2</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Third-party</SelectLabel>
                  <SelectItem value="portal">Portal</SelectItem>
                  <SelectItem value="dota2">Dota 2</SelectItem>
                  <SelectItem value="l4d2" disabled>Left 4 Dead 2 (disabled)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select defaultValue="cs">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hl2">Half-Life 2</SelectItem>
                <SelectItem value="cs">Counter-Strike</SelectItem>
                <SelectItem value="tf2">Team Fortress 2</SelectItem>
              </SelectContent>
            </Select>

            <Select disabled>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hl2">Half-Life 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2>Aspect Ratio</h2>
          <div className="flex flex-wrap gap-3">
            <div className="w-48">
              <AspectRatio ratio={16 / 9} className="bevel-in bg-input-bg flex items-center justify-center">
                <span className="text-muted-foreground">16:9</span>
              </AspectRatio>
            </div>
            <div className="w-48">
              <AspectRatio ratio={4 / 3} className="bevel-in bg-input-bg flex items-center justify-center">
                <span className="text-muted-foreground">4:3</span>
              </AspectRatio>
            </div>
            <div className="w-24">
              <AspectRatio ratio={1} className="bevel-in bg-input-bg flex items-center justify-center">
                <span className="text-muted-foreground">1:1</span>
              </AspectRatio>
            </div>
          </div>
        </section>

        <section className="bevel-out bg-panel flex flex-col gap-3 p-3">
          <h2>Resizable</h2>
          <div className="flex flex-col gap-2 max-w-sm">
            <div className="bevel-in bg-input-bg h-32">
              <ResizablePanelGroup orientation="horizontal">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-2">
                    <span>Library</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full items-center justify-center p-2">
                    <span>Details</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
            <div className="bevel-in bg-input-bg h-36">
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-2">
                    <span>Top panel</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full items-center justify-center p-2">
                    <span>Bottom panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
