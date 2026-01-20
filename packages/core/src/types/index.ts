export interface ProjectConfig {
  name: string;
  path: string;
  framework: string;
  auth: string;
  database: string;
  orm: string;
  payments: string;
  email: string;
  analytics: string;
  ui: string;
  theme: string;
  modules: string[];
  packageManager: string;
  git: boolean;
}

export interface InstallerContext {
  projectDir: string;
  projectName: string;
  config: ProjectConfig;
  templateEngine: TemplateEngine;
  logger: Logger;
}

export interface InstallerResult {
  filesCreated: string[];
  filesModified: string[];
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  envVariables: EnvVariable[];
  postInstallInstructions: string[];
}

export interface Installer {
  name: string;
  displayName: string;
  category:
    | 'auth'
    | 'database'
    | 'orm'
    | 'payments'
    | 'email'
    | 'analytics'
    | 'ui'
    | 'theme'
    | 'module';

  // Compatibility checks
  isCompatibleWith(config: ProjectConfig): boolean;
  requires?: string[];
  conflicts?: string[];

  // Main installation
  install(ctx: InstallerContext): Promise<InstallerResult>;

  // Optional hooks
  beforeInstall?(ctx: InstallerContext): Promise<void>;
  afterInstall?(ctx: InstallerContext): Promise<void>;
}

export interface EnvVariable {
  key: string;
  value: string;
  description: string;
  required: boolean;
}

export interface TemplateEngine {
  renderFile(
    templatePath: string,
    outputPath: string,
    data: Record<string, unknown>
  ): Promise<void>;

  renderString(template: string, data: Record<string, unknown>): string;

  copyFile(sourcePath: string, destPath: string): Promise<void>;

  copyDirectory(sourceDir: string, destDir: string): Promise<void>;

  mergePackageJson(
    basePath: string,
    additions: PackageJsonAdditions
  ): Promise<void>;

  mergeJsonFile(
    filePath: string,
    additions: Record<string, unknown>
  ): Promise<void>;
}

export interface PackageJsonAdditions {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
  [key: string]: unknown;
}

export interface Logger {
  info(message: string): void;
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

export interface GenerationResult {
  projectPath: string;
  filesCreated: string[];
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  envVariables: EnvVariable[];
  instructions: string[];
}
