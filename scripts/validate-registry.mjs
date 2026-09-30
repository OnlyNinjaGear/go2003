import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "registry.json"), "utf8"));
const names = new Set(registry.items.map((item) => item.name));
const packages = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).dependencies;
for (const item of registry.items) {
  const built = JSON.parse(fs.readFileSync(path.join(root, `public/r/${item.name}.json`), "utf8"));
  for (const dep of built.registryDependencies ?? []) {
    assert.match(dep, /^https:\/\/raw\.githubusercontent\.com\/OnlyNinjaGear\/go2003\/main\/public\/r\/.+\.json$/);
    assert(names.has(dep.split("/").at(-1).replace(/\.json$/, "")), `Missing item: ${dep}`);
  }
  for (const file of built.files ?? []) {
    assert(file.content?.length, `Empty file: ${file.path}`);
    for (const match of file.content.matchAll(/from\s+["']([^"']+)["']/g)) {
      const imp = match[1];
      if (imp.startsWith("@/registry/steam2003/")) {
        const name = imp.split("/").at(-1);
        assert(built.registryDependencies?.some((dep) => dep.endsWith(`/${name}.json`)), `${item.name}: missing ${name}`);
      } else if (!imp.startsWith(".") && !imp.startsWith("@/") && !["react", "react-dom"].includes(imp)) {
        const pkg = imp.startsWith("@") ? imp.split("/").slice(0, 2).join("/") : imp.split("/")[0];
        assert(packages[pkg], `Unknown package: ${pkg}`);
        assert(built.dependencies?.some((dep) => dep === pkg || dep.startsWith(`${pkg}@`)), `${item.name}: missing ${pkg}`);
      }
    }
  }
}
console.log(`Validated ${names.size} registry items and their dependencies.`);
