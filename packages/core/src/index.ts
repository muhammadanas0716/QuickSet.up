// Types
export type {
  ProjectConfig,
  InstallerContext,
  InstallerResult,
  Installer,
  EnvVariable,
  TemplateEngine,
  PackageJsonAdditions,
  Logger,
  GenerationResult,
} from './types/index.js';

// Generators
export { generateProject } from './generators/project-generator.js';

// Template Engine
export { createTemplateEngine } from './engine/template-engine.js';

// Installers
export {
  getInstaller,
  getAllInstallers,
  registerInstaller,
} from './installers/index.js';

// Utilities
export { createLogger } from './utils/logger.js';
