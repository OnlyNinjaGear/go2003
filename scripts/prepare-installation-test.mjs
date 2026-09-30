// Build an isolated consumer fixture from the generated installation payloads.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dir = path.join(root, "installation-test");
fs.mkdirSync(path.join(dir, "app"), { recursive: true });
fs.copyFileSync(path.join(root, "pnpm-workspace.yaml"), path.join(dir, "pnpm-workspace.yaml"));
const registry = JSON.parse(fs.readFileSync(path.join(root, "registry.json"), "utf8"));
const files = [];
const dependencies = new Set();
for (const item of registry.items) {
  const payload = JSON.parse(fs.readFileSync(path.join(root, `public/r/${item.name}.json`), "utf8"));
  files.push(...(payload.files ?? []));
  for (const dependency of payload.dependencies ?? []) dependencies.add(dependency);
}
fs.writeFileSync(path.join(dir, "all.json"), JSON.stringify({
  name: "installation-test", type: "registry:item", files, dependencies: [...dependencies],
}));
const config = JSON.parse(fs.readFileSync(path.join(root, "components.json"), "utf8"));
config.style = "new-york";
fs.writeFileSync(path.join(dir, "components.json"), JSON.stringify(config));
fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify({
  name: "go2003-installation-test", private: true,
  dependencies: { next: "15.5.9", react: "19.1.0", "react-dom": "19.1.0", tailwindcss: "^4.1.11" },
  devDependencies: { typescript: "^5.9.2", "@types/react": "19.1.2", "@types/react-dom": "19.1.2", "@types/node": "^20.19.9" },
}));
fs.writeFileSync(path.join(dir, "tsconfig.json"), JSON.stringify({
  compilerOptions: { target: "ES2017", lib: ["dom", "esnext"], strict: true, skipLibCheck: true,
    noEmit: true, esModuleInterop: true, module: "esnext", moduleResolution: "bundler", jsx: "react-jsx", paths: { "@/*": ["./*"] } },
  include: ["**/*.ts", "**/*.tsx"], exclude: ["node_modules"],
}));
fs.writeFileSync(path.join(dir, "app/globals.css"), '@import "tailwindcss";\n');
console.log(`Consumer fixture ready: ${files.length} files, ${dependencies.size} npm dependencies.`);
