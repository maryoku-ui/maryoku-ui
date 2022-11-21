import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./plop/plopfile.ts'],
  outDir: './',
  format: 'esm',
  splitting: false,
  sourcemap: false,
});
