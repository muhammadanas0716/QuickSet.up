import os from 'os';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs-extra';

const LICENSE_CACHE_DIR = path.join(os.homedir(), '.quicksetup');
const LICENSE_CACHE_FILE = path.join(LICENSE_CACHE_DIR, 'license.json');
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

const API_BASE_URL = process.env.QUICKSETUP_API_URL || 'https://api.quicksetup.dev';

export interface LicenseResult {
  valid: boolean;
  email?: string;
  tier?: string;
  activationsUsed?: number;
  activationsLimit?: number;
  error?: string;
  offlineMode?: boolean;
}

export interface CachedLicense {
  key: string;
  email: string;
  tier: string;
  timestamp: number;
}

interface LicenseAPIResponse {
  valid: boolean;
  email?: string;
  tier?: string;
  activationsUsed?: number;
  activationsLimit?: number;
  error?: string;
}

export async function validateLicenseKey(
  licenseKey: string
): Promise<LicenseResult> {
  // Check cache first
  const cached = await getCachedLicenseData(licenseKey);
  if (cached && !isExpired(cached)) {
    return {
      valid: true,
      email: cached.email,
      tier: cached.tier,
    };
  }

  // Generate machine ID
  const machineId = generateMachineId();

  try {
    const response = await fetch(`${API_BASE_URL}/license/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'create-quicksetup',
      },
      body: JSON.stringify({
        licenseKey,
        machineId,
      }),
    });

    const data = (await response.json()) as LicenseAPIResponse;

    if (!response.ok || !data.valid) {
      return {
        valid: false,
        error: data.error || 'Invalid license key',
      };
    }

    // Cache the valid license
    await cacheLicense(licenseKey, {
      email: data.email || '',
      tier: data.tier || 'starter',
    });

    return {
      valid: true,
      email: data.email,
      tier: data.tier,
      activationsUsed: data.activationsUsed,
      activationsLimit: data.activationsLimit,
    };
  } catch (error) {
    // If offline and we have a cached license, use it even if expired
    if (cached) {
      return {
        valid: true,
        email: cached.email,
        tier: cached.tier,
        offlineMode: true,
      };
    }

    return {
      valid: false,
      error: 'Unable to validate license. Please check your internet connection.',
    };
  }
}

export async function getCachedLicense(): Promise<CachedLicense | null> {
  try {
    if (!(await fs.pathExists(LICENSE_CACHE_FILE))) {
      return null;
    }

    const data = await fs.readJSON(LICENSE_CACHE_FILE);
    return data as CachedLicense;
  } catch {
    return null;
  }
}

export async function clearCachedLicense(): Promise<void> {
  try {
    await fs.remove(LICENSE_CACHE_FILE);
  } catch {
    // Ignore errors
  }
}

async function getCachedLicenseData(
  licenseKey: string
): Promise<CachedLicense | null> {
  const cached = await getCachedLicense();

  if (cached && cached.key === licenseKey) {
    return cached;
  }

  return null;
}

async function cacheLicense(
  licenseKey: string,
  data: { email: string; tier: string }
): Promise<void> {
  try {
    await fs.ensureDir(LICENSE_CACHE_DIR);
    await fs.writeJSON(LICENSE_CACHE_FILE, {
      key: licenseKey,
      email: data.email,
      tier: data.tier,
      timestamp: Date.now(),
    });
  } catch {
    // Ignore cache write errors
  }
}

function isExpired(cached: CachedLicense): boolean {
  return Date.now() - cached.timestamp > CACHE_DURATION;
}

function generateMachineId(): string {
  const data = [
    os.hostname(),
    os.userInfo().username,
    os.platform(),
    os.arch(),
    os.cpus()[0]?.model || '',
  ].join('-');

  return crypto.createHash('sha256').update(data).digest('hex').slice(0, 32);
}

// For development/testing: bypass license validation
export function setDevelopmentMode(enabled: boolean): void {
  if (enabled) {
    process.env.QUICKSETUP_DEV_MODE = 'true';
  } else {
    delete process.env.QUICKSETUP_DEV_MODE;
  }
}

export function isDevelopmentMode(): boolean {
  return process.env.QUICKSETUP_DEV_MODE === 'true';
}
