import pc from 'picocolors';
import type { Logger } from '../types/index.js';

export function createLogger(): Logger {
  return {
    info(message: string): void {
      console.log(pc.blue('ℹ'), message);
    },

    success(message: string): void {
      console.log(pc.green('✓'), message);
    },

    warn(message: string): void {
      console.log(pc.yellow('⚠'), message);
    },

    error(message: string): void {
      console.log(pc.red('✖'), message);
    },

    debug(message: string): void {
      if (process.env.DEBUG) {
        console.log(pc.dim('🔍'), pc.dim(message));
      }
    },
  };
}
