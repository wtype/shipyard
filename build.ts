import * as esbuild from 'https://deno.land/x/esbuild@v0.15.10/mod.js';
import { bold, red, green, blue } from 'https://deno.land/std@0.160.0/fmt/colors.ts';
import { walk } from 'https://deno.land/std@0.110.0/fs/walk.ts';

console.log(bold(green('esbuild -> building project')));

const entries = new Set<string>();
for await (const entry of walk('src')) {
  if (!entry.isFile) continue;
  entries.add(entry.path);
}

const result = await esbuild
  .build({
    outdir: 'dist',
    target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
    entryPoints: Array.from(entries),
    bundle: true,
  })
  .catch((e: unknown) => {
    console.log(bold(red('esbuild -> build failed')));
    throw e;
  });

for (const warning of result.warnings) {
  console.info(blue(warning.text));
}

console.log(bold(green('esbuild -> build finished')));

Deno.exit();
