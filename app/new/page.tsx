"use client";

import * as React from "react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  SearchIcon,
  TerminalIcon,
  FolderIcon,
  FileIcon,
  FileTextIcon,
  ImageIcon,
  XIcon,
} from "lucide-react";

import { Button } from "@/registry/steam2003/ui/button";
import { Spinner } from "@/registry/steam2003/ui/spinner";
import { Kbd, KbdGroup } from "@/registry/steam2003/ui/kbd";
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
} from "@/registry/steam2003/ui/native-select";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/registry/steam2003/ui/empty";
import { Marker, MarkerIcon, MarkerContent } from "@/registry/steam2003/ui/marker";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from "@/registry/steam2003/ui/item";
import {
  ButtonGroup,
  ButtonGroupText,
  ButtonGroupSeparator,
} from "@/registry/steam2003/ui/button-group";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from "@/registry/steam2003/ui/input-group";
import {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
} from "@/registry/steam2003/ui/attachment";
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/registry/steam2003/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
  MessageGroup,
} from "@/registry/steam2003/ui/message";
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "@/registry/steam2003/ui/message-scroller";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/registry/steam2003/ui/combobox";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/steam2003/ui/chart";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarInset,
  SidebarTrigger,
} from "@/registry/steam2003/ui/sidebar";
import { DirectionProvider } from "@/registry/steam2003/ui/direction";

const chartData = [
  { month: "Янв", players: 840 },
  { month: "Фев", players: 912 },
  { month: "Мар", players: 603 },
  { month: "Апр", players: 1041 },
  { month: "Май", players: 878 },
];

const chartConfig = {
  players: { label: "Игроков", color: "var(--primary)" },
} satisfies ChartConfig;

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bevel-out bg-panel flex flex-col gap-3 p-3 ${className ?? ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function NewComponents() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-20">
      <header className="flex flex-col gap-1">
        <h1 className="text-base">Новые компоненты</h1>
        <p>
          <Link
              href="/"
              className="text-[var(--accent)] hover:underline underline-offset-2"
            >
              ← go2003 registry
            </Link>
          </p>
      </header>

      <main className="flex flex-1 flex-col gap-6">
        <Section title="Spinner">
          <div className="flex items-center gap-4">
            <Spinner />
            <span className="text-muted-foreground">Загрузка списка серверов…</span>
          </div>
        </Section>

        <Section title="Kbd">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Открыть консоль:</span>
            <KbdGroup>
              <Kbd>~</Kbd>
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </div>
        </Section>

        <Section title="Native Select">
          <NativeSelect defaultValue="tf2">
            <NativeSelectOptGroup label="Games">
              <NativeSelectOption value="hl2">Half-Life 2</NativeSelectOption>
              <NativeSelectOption value="cs">Counter-Strike</NativeSelectOption>
              <NativeSelectOption value="tf2">Team Fortress 2</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </Section>

        <Section title="Combobox">
          <Combobox>
            <ComboboxInput placeholder="Choose a game…" />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxItem value="hl2">Half-Life 2</ComboboxItem>
                <ComboboxItem value="cs">Counter-Strike 1.6</ComboboxItem>
                <ComboboxItem value="tf2">Team Fortress 2</ComboboxItem>
                <ComboboxItem value="l4d2" disabled>
                  Left 4 Dead 2
                </ComboboxItem>
              </ComboboxList>
              <ComboboxEmpty>Nothing found.</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
        </Section>

        <Section title="Input Group">
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>
                <SearchIcon />
              </InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="Search servers…" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton size="icon-xs" variant="ghost" aria-label="Clear">
                <XIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </Section>

        <Section title="Button Group">
          <div className="flex flex-col gap-3">
            <ButtonGroup>
              <Button size="sm">Connect</Button>
              <Button size="sm" variant="outline">
                Favorite
              </Button>
              <ButtonGroupSeparator />
              <ButtonGroupText>Spectators only</ButtonGroupText>
            </ButtonGroup>
            <ButtonGroup orientation="vertical" className="w-fit">
              <Button size="sm">New game</Button>
              <Button size="sm">Load game</Button>
              <Button size="sm">Options</Button>
            </ButtonGroup>
          </div>
        </Section>

        <Section title="Item">
          <ItemGroup className="bevel-out bg-background p-1">
            <Item>
              <ItemMedia variant="icon">
                <FolderIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Half-Life 2</ItemTitle>
                <ItemDescription>Last played: Yesterday</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm">Play</Button>
              </ItemActions>
            </Item>
            <ItemSeparator />
            <Item>
              <ItemMedia variant="icon">
                <TerminalIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Counter-Strike</ItemTitle>
                <ItemDescription>Update queued: 256 MB</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="outline">
                  Pause
                </Button>
              </ItemActions>
            </Item>
          </ItemGroup>
        </Section>

        <Section title="Attachment">
          <AttachmentGroup>
            <Attachment>
              <AttachmentMedia>
                <ImageIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>de_dust2_screenshot.png</AttachmentTitle>
                <AttachmentDescription>1.2 MB</AttachmentDescription>
              </AttachmentContent>
              <AttachmentActions>
                <AttachmentAction aria-label="Remove">
                  <XIcon />
                </AttachmentAction>
              </AttachmentActions>
            </Attachment>
            <Attachment state="uploading">
              <AttachmentMedia>
                <Spinner className="size-5" />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>config.cfg</AttachmentTitle>
                <AttachmentDescription>Uploading… 64%</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
            <Attachment state="error">
              <AttachmentMedia>
                <FileIcon />
              </AttachmentMedia>
              <AttachmentContent>
                <AttachmentTitle>custom_spray.bmp</AttachmentTitle>
                <AttachmentDescription>File too large</AttachmentDescription>
              </AttachmentContent>
            </Attachment>
          </AttachmentGroup>
        </Section>

        <Section title="Empty">
          <Empty className="max-w-md self-center">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No servers found</EmptyTitle>
              <EmptyDescription>
                Try changing filters or refresh the server list. Check our{" "}
                <a href="#">troubleshooting guide</a>.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">Refresh list</Button>
            </EmptyContent>
          </Empty>
        </Section>

        <Section title="Marker">
          <div className="flex flex-col gap-2">
            <Marker>
              <MarkerIcon>
                <FileTextIcon />
              </MarkerIcon>
              <MarkerContent>
                read the <a href="#">server rules</a> before joining
              </MarkerContent>
            </Marker>
            <Marker variant="separator">
              <MarkerContent>or</MarkerContent>
            </Marker>
          </div>
        </Section>

        <Section title="Message & Bubbles">
          <MessageGroup className="bevel-in bg-background p-3">
            <Message>
              <MessageAvatar>
                <span className="text-[11px] text-muted-foreground">G</span>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>Gordon</MessageHeader>
                <BubbleGroup>
                  <Bubble>
                    <BubbleContent>Anyone up for de_dust2?</BubbleContent>
                  </Bubble>
                  <Bubble variant="secondary">
                    <BubbleContent>Server is full, waiting in queue</BubbleContent>
                    <BubbleReactions>
                      <span>👍 3</span>
                    </BubbleReactions>
                  </Bubble>
                </BubbleGroup>
              </MessageContent>
            </Message>
            <Message align="end">
              <MessageContent>
                <Bubble variant="tinted">
                  <BubbleContent>Count me in, joining now.</BubbleContent>
                </Bubble>
              </MessageContent>
              <MessageAvatar>
                <span className="text-[11px] text-muted-foreground">B</span>
              </MessageAvatar>
            </Message>
            <MessageFooter>2 players typing…</MessageFooter>
          </MessageGroup>
        </Section>

        <Section title="Message Scroller">
          <MessageScrollerProvider>
            <MessageScroller className="bevel-in h-64 bg-background">
              <MessageScrollerViewport>
                <MessageScrollerContent className="p-2">
                  {[
                    "Connecting to 192.168.1.4:27015…",
                    "VAC secure mode is activated.",
                    "Barney joined the game.",
                    "Barney: hello",
                    "Barney: anyone got a spare medkit?",
                    "Server: round starting in 3…",
                    "Server: round starting in 2…",
                    "Server: round starting in 1…",
                    " Freeman joined the game.",
                  ].map((text, i) => (
                    <MessageScrollerItem key={i}>
                      <Message>
                        <MessageContent>
                          <MessageHeader>
                            {i % 2 ? "Server" : "Barney"}
                          </MessageHeader>
                          <Bubble variant={i % 2 ? "muted" : "default"}>
                            <BubbleContent>{text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </Section>

        <Section title="Chart">
          <ChartContainer config={chartConfig} className="max-h-44 w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="players" fill="var(--color-players)" />
            </BarChart>
          </ChartContainer>
        </Section>

        <Section title="Sidebar">
          <div className="bevel-in relative h-96 overflow-hidden bg-background [transform:translateZ(0)]">
            <SidebarProvider className="h-full min-h-0">
              <Sidebar collapsible="icon">
                <SidebarHeader className="flex-row items-center gap-1 border-b border-sidebar-border p-1.5">
                  <SidebarTrigger />
                  <span className="text-[11px] text-muted-foreground">Steam</span>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Library</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <FolderIcon />
                            <span>All games</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <TerminalIcon />
                            <span>Installed</span>
                          </SidebarMenuButton>
                          <SidebarMenuSub>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton>
                                Half-Life 2
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            <SidebarMenuSubItem>
                              <SidebarMenuSubButton>
                                Counter-Strike
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          </SidebarMenuSub>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <SidebarInset className="bevel-out bg-panel m-2 p-3">
                <p className="text-muted-foreground">
                  Ctrl+B — свернуть панель.
                </p>
              </SidebarInset>
            </SidebarProvider>
          </div>
        </Section>

        <Section title="Direction (RTL)">
          <DirectionProvider dir="rtl">
            <div className="flex flex-row-reverse items-center justify-end gap-2">
              <Button size="sm">أدوات</Button>
              <span className="text-muted-foreground">
                Компоненты внутри DirectionProvider учитывают направление.
              </span>
            </div>
          </DirectionProvider>
        </Section>
      </main>
    </div>
  );
}
