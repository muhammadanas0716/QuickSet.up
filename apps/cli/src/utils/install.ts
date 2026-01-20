import { spawn } from 'child_process';

export async function installDependencies(
  projectPath: string,
  packageManager: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const command = packageManager;
    const args = ['install'];

    const child = spawn(command, args, {
      cwd: projectPath,
      stdio: 'pipe',
      shell: true,
    });

    let stderr = '';

    child.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Installation failed: ${stderr}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

export function getInstallCommand(packageManager: string): string {
  switch (packageManager) {
    case 'npm':
      return 'npm install';
    case 'yarn':
      return 'yarn';
    case 'pnpm':
      return 'pnpm install';
    case 'bun':
      return 'bun install';
    default:
      return 'npm install';
  }
}

export function getRunCommand(packageManager: string, script: string): string {
  switch (packageManager) {
    case 'npm':
      return `npm run ${script}`;
    case 'yarn':
      return `yarn ${script}`;
    case 'pnpm':
      return `pnpm ${script}`;
    case 'bun':
      return `bun run ${script}`;
    default:
      return `npm run ${script}`;
  }
}
