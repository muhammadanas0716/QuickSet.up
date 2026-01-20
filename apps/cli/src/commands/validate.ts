import * as p from '@clack/prompts';
import pc from 'picocolors';
import { validateLicenseKey, clearCachedLicense } from '@quicksetup/license';

export async function validateLicense(providedKey?: string): Promise<void> {
  console.clear();
  p.intro(pc.bgCyan(pc.black(' QuickSet.up - License Validation ')));

  // Get license key
  let licenseKey = providedKey || process.env.QUICKSETUP_LICENSE;

  if (!licenseKey) {
    const key = await p.text({
      message: 'Enter your license key',
      placeholder: 'XXXX-XXXX-XXXX-XXXX',
      validate: (value) => {
        if (!value || value.trim().length === 0) {
          return 'License key is required';
        }
      },
    });

    if (p.isCancel(key)) {
      p.cancel('Operation cancelled');
      process.exit(0);
    }

    licenseKey = key as string;
  }

  const spinner = p.spinner();
  spinner.start('Validating license...');

  try {
    const result = await validateLicenseKey(licenseKey);

    if (result.valid) {
      spinner.stop('License is valid!');
      console.log();
      p.note(
        [
          `Email: ${pc.cyan(result.email)}`,
          `Tier: ${pc.green(result.tier)}`,
          `Activations: ${result.activationsUsed}/${result.activationsLimit}`,
        ].join('\n'),
        'License Details'
      );

      p.log.success('Your license is active and ready to use.');
    } else {
      spinner.stop('License validation failed');
      p.log.error(result.error || 'Invalid license key');

      const clearCache = await p.confirm({
        message: 'Clear cached license?',
        initialValue: true,
      });

      if (clearCache && !p.isCancel(clearCache)) {
        await clearCachedLicense();
        p.log.info('Cached license cleared');
      }

      p.note('Purchase a license at https://quicksetup.dev', 'Get a license');
      process.exit(1);
    }
  } catch (error) {
    spinner.stop('Validation failed');
    p.log.error(error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }

  p.outro('Done!');
}
