// Генерирует записи registry.json для компонентов без ручной записи:
// тянет зависимости из импортов, registryDependencies из внутренних импортов.
// Обновляет зависимости существующих записей по актуальным импортам.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const UI_DIR = path.join(ROOT, "registry/steam2003/ui");
const REG_PATH = path.join(ROOT, "registry.json");

const DESCRIPTIONS = {
  accordion: "Win32-style collapsible sections. Bevel-out header rows, instant expand, no animation.",
  alert: "Win32-style notification panel. Bevel-out frame with accent icon slot.",
  "alert-dialog": "Win32-style confirmation dialog. Dark title bar, bevel-out panel, action buttons.",
  "aspect-ratio": "Win32-style aspect ratio container.",
  avatar: "Win32-style square avatar with bevel-out frame. No rounding.",
  breadcrumb: "Win32-style breadcrumb path with separator chevrons.",
  calendar: "Win32-style date picker grid based on react-day-picker. Sunken day cells.",
  carousel: "Win32-style carousel based on embla. Bevel-out prev/next buttons.",
  collapsible: "Win32-style collapsible block. Instant toggle.",
  command: "Win32-style command palette. Bevel-in input, bevel-out list panel.",
  "context-menu": "Win32-style right-click menu. Bevel-out panel, highlight on hover.",
  drawer: "Win32-style bottom drawer based on vaul. Bevel-out panel edge.",
  "dropdown-menu": "Win32-style dropdown menu. Bevel-out panel, flat items, hover highlight.",
  field: "Win32-style form field layout primitives.",
  form: "Win32-style form primitives wired to react-hook-form.",
  "hover-card": "Win32-style hover card. Bevel-out panel, instant show.",
  "input-otp": "Win32-style OTP input. Bevel-in slots, no animation.",
  label: "Win32-style static label text.",
  menubar: "Win32-style top menu bar. Bevel-out dropdown panels.",
  "navigation-menu": "Win32-style navigation menu with bevel-out flyout panel.",
  pagination: "Win32-style pagination. Bevel-out page buttons, pressed state on active.",
  popover: "Win32-style popover. Bevel-out panel, no animation.",
  "radio-group": "Win32-style radio buttons. Classic round dot indicator, sunken dot on check.",
  resizable: "Win32-style resizable panels with solid 1px handles.",
  "scroll-area": "Win32-style scroll area with classic checkerboard scrollbar.",
  separator: "Win32-style 1px etched separator line.",
  sheet: "Win32-style side sheet. Bevel-out panel edge, dark title bar.",
  skeleton: "Win32-style placeholder block in panel-pressed color.",
  sonner: "Win32-style toast notifications via sonner. Square bevel-out toasts.",
  textarea: "Win32-style sunken multiline text field. Inset bevel, white background.",
  toggle: "Win32-style toggle button. Bevel-out, bevel-in when pressed.",
  "toggle-group": "Win32-style joined toggle group. Bevel-out segments, sunken active.",
  attachment: "Win32-style file attachment chip. Bevel-out card, sunken media slot, square corners.",
  bubble: "Win32-style chat bubble. Bevel-out raised panel, square corners, no animation.",
  "button-group": "Win32-style joined button toolbar. Bevel-out segments with etched separators.",
  chart: "Win32-style recharts wrapper. Bevel-out tooltip panel, square indicators, no animation.",
  combobox: "Win32-style combobox. Bevel-in field, bevel-out dropdown, primary highlight selection.",
  direction: "Win32-style RTL/LTR direction provider passthrough.",
  empty: "Win32-style empty state. Dashed etched frame, sunken icon slot.",
  "input-group": "Win32-style field container with addons. Bevel-in frame, inline icon and button slots.",
  item: "Win32-style list item row. Hover highlight, bevel-out icon frame.",
  kbd: "Win32-style keyboard key cap. Bevel-out miniature button.",
  marker: "Win32-style text marker with etched separator lines.",
  message: "Win32-style chat message layout with square bevel-out avatar frame.",
  "message-scroller": "Win32-style chat scroller. Bevel-out scroll buttons, classic scrollbar.",
  "native-select": "Win32-style native select. Bevel-in sunken field with triangle arrow glyph.",
  sidebar: "Win32-style app sidebar. Collapsible menu, primary highlight selection, etched sub-tree.",
  spinner: "Win32-style busy indicator. Three-step stepped rotation, no smooth animation.",
  "use-mobile": "Hook tracking the mobile breakpoint (768px) for sidebar switching.",
};

// Пакеты, ставящиеся как зависимости registry-итема
const depMap = {
  "radix-ui": "radix-ui",
  "class-variance-authority": "class-variance-authority",
  "lucide-react": "lucide-react",
  "react-day-picker": "react-day-picker",
  sonner: "sonner",
  "next-themes": "next-themes",
  "input-otp": "input-otp",
  cmdk: "cmdk",
  "embla-carousel-react": "embla-carousel-react",
  "react-resizable-panels": "react-resizable-panels",
  vaul: "vaul",
  "react-hook-form": "react-hook-form",
  zod: "zod",
  "@hookform/resolvers": "@hookform/resolvers",
  "date-fns": "date-fns",
  recharts: "recharts",
  "@base-ui/react": "@base-ui/react",
  "@shadcn/react": "@shadcn/react",
};

function titleize(name) {
  return name
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

const reg = JSON.parse(fs.readFileSync(REG_PATH, "utf8"));

const entries = [
  ...fs
    .readdirSync(UI_DIR)
    .filter((f) => f.endsWith(".tsx"))
    .sort()
    .map((file) => ({ file, dir: "ui", type: "registry:ui" })),
  ...fs
    .readdirSync(path.join(ROOT, "registry/steam2003/hooks"))
    .filter((f) => f.endsWith(".ts") || f.endsWith(".tsx"))
    .sort()
    .map((file) => ({ file, dir: "hooks", type: "registry:hook" })),
];

let added = 0;
for (const { file, dir, type } of entries) {
  const name = file.replace(/\.(tsx?|ts)$/, "");
  const existing = reg.items.find((item) => item.name === name);

  const src = fs.readFileSync(path.join(ROOT, `registry/steam2003/${dir}`, file), "utf8");
  const deps = new Set();
  const regDeps = new Set(["utils", "theme"]);

  for (const m of src.matchAll(/from\s+["']([^"']+)["']/g)) {
    const imp = m[1];
    for (const key of Object.keys(depMap)) {
      if (imp === key || imp.startsWith(key + "/")) {
        const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
        deps.add(`${depMap[key]}@${pkg.dependencies[depMap[key]]}`);
        break;
      }
    }
    const inner = imp.match(/^@\/registry\/steam2003\/(?:ui|hooks)\/(.+?)(?:\.(?:tsx?|ts))?$/);
    if (inner && inner[1] !== name) regDeps.add(inner[1]);
  }

  const item = {
    name,
    type,
    title: titleize(name),
    description: existing?.description || DESCRIPTIONS[name] || `Win32-style ${titleize(name).toLowerCase()} component.`,
    dependencies: [...deps].sort(),
    files: [{ path: `registry/steam2003/${dir}/${file}`, type }],
  };
  if (regDeps.size) item.registryDependencies = [...regDeps].sort();

  if (existing) Object.assign(existing, item);
  else reg.items.push(item);
  if (!existing) added++;
}

reg.items.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(REG_PATH, JSON.stringify(reg, null, 2) + "\n");
console.log(`\nДобавлено ${added}, всего ${reg.items.length}`);
