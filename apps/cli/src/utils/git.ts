import { spawn } from 'child_process';

export async function initGit(projectPath: string): Promise<void> {
  await runCommand('git', ['init'], projectPath);
  await runCommand('git', ['add', '-A'], projectPath);
  await runCommand('git', ['commit', '-m', 'Initial commit from QuickSet.up'], projectPath);
}

async function runCommand(
  command: string,
  args: string[],
  cwd: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'pipe',
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command "${command} ${args.join(' ')}" failed with code ${code}`));
      }
    });

    child.on('error', (error) => {
      reject(error);
    });
  });
}

export async function isGitInstalled(): Promise<boolean> {
  try {
    await runCommand('git', ['--version'], process.cwd());
    return true;
  } catch {
    return false;
  }
}
