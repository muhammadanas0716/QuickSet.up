import ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';
import type { TemplateEngine, PackageJsonAdditions } from '../types/index.js';

export function createTemplateEngine(): TemplateEngine {
  return {
    async renderFile(
      templatePath: string,
      outputPath: string,
      data: Record<string, unknown>
    ): Promise<void> {
      const template = await fs.readFile(templatePath, 'utf-8');
      const rendered = ejs.render(template, data, {
        filename: templatePath,
      });

      // Remove .ejs extension from output path if present
      const finalOutputPath = outputPath.replace(/\.ejs$/, '');

      await fs.ensureDir(path.dirname(finalOutputPath));
      await fs.writeFile(finalOutputPath, rendered);
    },

    renderString(template: string, data: Record<string, unknown>): string {
      return ejs.render(template, data);
    },

    async copyFile(sourcePath: string, destPath: string): Promise<void> {
      await fs.ensureDir(path.dirname(destPath));
      await fs.copy(sourcePath, destPath);
    },

    async copyDirectory(sourceDir: string, destDir: string): Promise<void> {
      await fs.copy(sourceDir, destDir, {
        overwrite: true,
        filter: (src) => {
          // Skip node_modules and other unwanted directories
          const basename = path.basename(src);
          return !['node_modules', '.git', '.DS_Store'].includes(basename);
        },
      });
    },

    async mergePackageJson(
      basePath: string,
      additions: PackageJsonAdditions
    ): Promise<void> {
      const existing = await fs.readJSON(basePath);
      const merged = deepMergePackageJson(existing, additions);
      await fs.writeJSON(basePath, merged, { spaces: 2 });
    },

    async mergeJsonFile(
      filePath: string,
      additions: Record<string, unknown>
    ): Promise<void> {
      let existing: Record<string, unknown> = {};

      if (await fs.pathExists(filePath)) {
        existing = await fs.readJSON(filePath);
      }

      const merged = deepMerge(existing, additions);
      await fs.ensureDir(path.dirname(filePath));
      await fs.writeJSON(filePath, merged, { spaces: 2 });
    },
  };
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(
        (result[key] as Record<string, unknown>) || {},
        source[key] as Record<string, unknown>
      );
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

function deepMergePackageJson(
  target: Record<string, unknown>,
  source: PackageJsonAdditions
): Record<string, unknown> {
  const result = { ...target };

  // Merge dependencies (keep sorted)
  if (source.dependencies) {
    result.dependencies = sortObject({
      ...(result.dependencies as Record<string, string>),
      ...source.dependencies,
    });
  }

  // Merge devDependencies (keep sorted)
  if (source.devDependencies) {
    result.devDependencies = sortObject({
      ...(result.devDependencies as Record<string, string>),
      ...source.devDependencies,
    });
  }

  // Merge scripts
  if (source.scripts) {
    result.scripts = {
      ...(result.scripts as Record<string, string>),
      ...source.scripts,
    };
  }

  // Merge other keys
  for (const key of Object.keys(source)) {
    if (!['dependencies', 'devDependencies', 'scripts'].includes(key)) {
      result[key] = source[key];
    }
  }

  return result;
}

function sortObject(obj: Record<string, string>): Record<string, string> {
  return Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => {
        acc[key] = obj[key];
        return acc;
      },
      {} as Record<string, string>
    );
}
