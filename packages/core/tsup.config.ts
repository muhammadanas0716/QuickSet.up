import { defineConfig } from 'tsup';
import { cp } from 'fs/promises';
import { join } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'node20',
  async onSuccess() {
    // Copy templates to dist folder
    await cp(
      join(import.meta.dirname, 'templates'),
      join(import.meta.dirname, 'dist', 'templates'),
      { recursive: true }
    );
    console.log('Templates copied to dist/');
  },
});
