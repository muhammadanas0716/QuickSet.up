import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import type {
  Installer,
  InstallerContext,
  InstallerResult,
  ProjectConfig,
} from '../types/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createInstaller(
  options: {
    name: string;
    displayName: string;
    category: Installer['category'];
    requires?: string[];
    conflicts?: string[];
    isCompatibleWith?: (config: ProjectConfig) => boolean;
  },
  installFn: (ctx: InstallerContext) => Promise<InstallerResult>
): Installer {
  return {
    name: options.name,
    displayName: options.displayName,
    category: options.category,
    requires: options.requires,
    conflicts: options.conflicts,

    isCompatibleWith(config: ProjectConfig): boolean {
      if (options.isCompatibleWith) {
        return options.isCompatibleWith(config);
      }
      return true;
    },

    async install(ctx: InstallerContext): Promise<InstallerResult> {
      return installFn(ctx);
    },
  };
}

export function getTemplatesPath(
  category: string,
  name: string
): string {
  return path.resolve(__dirname, '../templates', category, name);
}

export async function copyTemplateFiles(
  ctx: InstallerContext,
  category: string,
  name: string,
  subPath: string = 'files'
): Promise<string[]> {
  const templatePath = path.join(getTemplatesPath(category, name), subPath);
  const filesCreated: string[] = [];

  if (!(await fs.pathExists(templatePath))) {
    return filesCreated;
  }

  const files = await getAllFilesRecursive(templatePath);

  for (const file of files) {
    const relativePath = path.relative(templatePath, file);
    const destPath = path.join(ctx.projectDir, relativePath);

    if (file.endsWith('.ejs')) {
      await ctx.templateEngine.renderFile(file, destPath, {
        config: ctx.config,
        projectName: ctx.projectName,
      });
      filesCreated.push(destPath.replace(/\.ejs$/, ''));
    } else {
      await ctx.templateEngine.copyFile(file, destPath);
      filesCreated.push(destPath);
    }
  }

  return filesCreated;
}

async function getAllFilesRecursive(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const subFiles = await getAllFilesRecursive(fullPath);
      files.push(...subFiles);
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

export function emptyResult(): InstallerResult {
  return {
    filesCreated: [],
    filesModified: [],
    dependencies: {},
    devDependencies: {},
    envVariables: [],
    postInstallInstructions: [],
  };
}
