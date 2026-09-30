// Генерирует item "theme" (полный theme.css файлом) и "all" (весь набор).
// theme.css — самодостаточный globals.css для проекта-потребителя.
// Собирается из app/globals.css: app-shell правила (html/body overflow,
// data-scroll-locked) в поставку не входят. Идемпотентно.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const REG_PATH = path.join(ROOT, "registry.json");
const THEME_CSS_PATH = path.join(ROOT, "registry/steam2003/css/theme.css");

const css = fs.readFileSync(path.join(ROOT, "app/globals.css"), "utf8").replace(/\r\n/g, "\n");

// --- хелперы извлечения ---
function block(re, label) {
  const m = css.match(re);
  if (!m) throw new Error(`${label} не найден`);
  return m[0];
}

const themeInline = block(/@theme inline\s*\{[\s\S]*?\n\}/, "@theme inline");
const rootVars = block(/:root\s*\{[\s\S]*?\n\}/, ":root");

// @layer base без app-shell правил
const layerMatch = css.match(/@layer base\s*\{([\s\S]*?)\n\}/);
if (!layerMatch) throw new Error("@layer base не найден");
let base = layerMatch[1];
base = base.replace(/\n\s*\/\*[^*]*Прокрутка страницы[\s\S]*?\*\/\s*\n\s*html\s*\{[^}]*\}/, "");
base = base.replace(/\n\s*html\s*\{[^}]*\}/, "");
base = base.replace(/@supports not selector\(::-webkit-scrollbar\)\s*\{[\s\S]*?\n\s*\}/, "");
base = base.replace(/\/\*[^*]*Radix scroll-lock[\s\S]*?\n\s*\}/, "");
base = base.replace(
  /\/\*[\s\S]*?\*\//g,
  (m) =>
    /#app-scroll|layout\.tsx|Firefox|scroll-lock|всегда существует|классический скроллбар/i.test(m)
      ? ""
      : m
);
base = base.replace(/body\s*\{([^}]*)\}/, (m, body) => {
  const cleaned = body
    .split(";")
    .filter((l) => !/height|overflow/.test(l))
    .join(";");
  return `body {${cleaned}}`;
});

const utilities = [...css.matchAll(/@utility [\w-]+\s*\{[\s\S]*?\n\}/g)]
  .map((m) => m[0])
  .join("\n\n");
const tailStart = css.indexOf("/* Sonner overrides */");
const tail = tailStart >= 0 ? css.slice(tailStart) : "";

const themeCss = [
  "/* steam2003 theme — полный globals.css для проекта-потребителя.",
  "   Генерируется scripts/gen-theme.mjs из app/globals.css. */",
  '@import "tailwindcss";',
  "",
  "@custom-variant dark (&:is(.dark *));",
  "",
  themeInline,
  "",
  rootVars,
  `\n@layer base {${base}}`,
  utilities,
  "\n" + tail,
]
  .join("\n")
  .replace(/\r\n/g, "\n")
  .replace(/\n{3,}/g, "\n\n")
  .trim() + "\n";

fs.mkdirSync(path.dirname(THEME_CSS_PATH), { recursive: true });
fs.writeFileSync(THEME_CSS_PATH, themeCss);

// --- итемы реестра ---
const reg = JSON.parse(fs.readFileSync(REG_PATH, "utf8"));
const componentNames = reg.items
  .filter((i) => i.type === "registry:ui" || i.type === "registry:hook")
  .map((i) => i.name);

const themeItem = {
  name: "theme",
  type: "registry:item",
  title: "Steam 2003 Theme",
  description:
    "Полный globals.css темы steam2003: палитра, токены @theme, фаски bevel-out/bevel-in/win32-focus, классические скроллбары, Tahoma. Заменяет app/globals.css проекта.",
  files: [
    {
      path: "registry/steam2003/css/theme.css",
      type: "registry:file",
      target: "@lib/steam2003.css",
    },
  ],
};

const allItem = {
  name: "all",
  type: "registry:item",
  title: "Steam 2003 — полный набор",
  description:
    "Весь набор steam2003: тема и все компоненты. Ставит тему и все registry-итемы разом.",
  registryDependencies: ["theme", ...componentNames],
};

const utilsItem = {
  name: "utils", type: "registry:lib",
  dependencies: ["clsx@^2.1.1", "tailwind-merge@^3.3.1"],
  files: [{ path: "lib/utils.ts", type: "registry:lib" }],
};
themeItem.description = "Steam 2003 theme. Import the installed lib/steam2003.css from your global stylesheet.";
const others = reg.items.filter((i) => !["theme", "all", "utils"].includes(i.name));
reg.items = [...others, utilsItem, themeItem, allItem];
fs.writeFileSync(REG_PATH, JSON.stringify(reg, null, 2) + "\n");

console.log(
  `theme.css: ${themeCss.length} bytes | all: ${allItem.registryDependencies.length} зависимостей | итемов: ${reg.items.length}`
);
