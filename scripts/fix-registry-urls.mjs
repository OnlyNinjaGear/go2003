// После registry:build заменяет имена в registryDependencies всех собранных
// JSON на абсолютные URL — иначе CLI резолвит их против дефолтного реестра.
import fs from "node:fs";
import path from "node:path";

const DIR = path.resolve(import.meta.dirname, "../public/r");
const BASE = "https://raw.githubusercontent.com/OnlyNinjaGear/go2003/main/public/r";

let touched = 0;
for (const file of fs.readdirSync(DIR)) {
  if (!file.endsWith(".json")) continue;
  const p = path.join(DIR, file);
  const j = JSON.parse(fs.readFileSync(p, "utf8"));
  let changed = false;
  for (const entry of [j, ...(j.items ?? [])]) {
    for (const file of entry.files ?? []) {
      if (file.content?.includes("\r\n")) {
        file.content = file.content.replace(/\r\n/g, "\n");
        changed = true;
      }
    }
  }

  const fix = (deps) =>
    deps.map((d) => {
      if (typeof d !== "string" || /^(https?:|@)/.test(d)) return d;
      changed = true;
      return `${BASE}/${d}.json`;
    });

  if (j.registryDependencies) j.registryDependencies = fix(j.registryDependencies);
  for (const item of j.items ?? []) {
    if (item.registryDependencies) item.registryDependencies = fix(item.registryDependencies);
  }

  if (changed) {
    fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n");
    touched++;
  }
}
console.log(`Абсолютные URL проставлены в ${touched} файлах`);
