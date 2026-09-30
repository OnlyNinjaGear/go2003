# go2003

React components styled after Steam 2003 / classic Windows. Distributed as a shadcn registry: component source files and their npm dependencies are installed into your project.

## Install

Requires React 19, TypeScript, Tailwind CSS 4 and Node.js 22+. Supports Next.js and Vite projects configured for shadcn.

1. In your project, initialize shadcn if `components.json` does not exist:

   ```sh
   npx shadcn@4.21.0 init
   ```

2. Install the complete set (including npm dependencies):

   ```sh
   npx shadcn@4.21.0 add https://raw.githubusercontent.com/OnlyNinjaGear/go2003/main/public/r/all.json
   ```

   To install individual components, replace `all.json` with `button.json`, `dialog.json`, etc. Their local component dependencies and theme are included automatically. Review overwrite prompts when your project already contains matching components.

3. Import the installed theme from your global CSS. With the default directories, `app/globals.css` or `src/app/globals.css` uses:

   ```css
   @import "../lib/steam2003.css";
   ```

   For Vite's `src/index.css`, use `@import "./lib/steam2003.css";`. Adjust the relative path if you configured another library directory. The theme includes Tailwind; replace the existing `@import "tailwindcss";` with this import and remove conflicting default shadcn theme declarations. The installer preserves your global stylesheet.

4. Import and use components:

   ```tsx
   import { Button } from "@/components/ui/button"

   export function Example() {
     return <Button>Open Steam</Button>
   }
   ```

## Development

```sh
pnpm install --frozen-lockfile
pnpm registry:build
pnpm typecheck
pnpm lint
pnpm build
```

`registry:build` regenerates the registry, theme, installable JSON payloads and absolute dependency URLs, then validates all component and npm dependency links. Commit `public/r` along with component changes so GitHub serves the updated installation files.

The application is a component showcase. No application server is needed to install the library: the registry is served directly from GitHub.

Registry format: [shadcn documentation](https://ui.shadcn.com/docs/registry/registry-item-json).
