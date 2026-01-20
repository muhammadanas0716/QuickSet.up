export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export function validateProjectName(name: string): ValidationResult {
  // Check if empty
  if (!name || name.trim().length === 0) {
    return { valid: false, message: 'Project name is required' };
  }

  // Check for invalid characters
  const validNameRegex = /^[a-zA-Z0-9-_]+$/;
  if (!validNameRegex.test(name)) {
    return {
      valid: false,
      message: 'Project name can only contain letters, numbers, hyphens, and underscores',
    };
  }

  // Check for reserved names
  const reservedNames = ['node_modules', 'package', 'package.json', 'src', 'dist', 'build'];
  if (reservedNames.includes(name.toLowerCase())) {
    return { valid: false, message: `"${name}" is a reserved name` };
  }

  // Check length
  if (name.length > 214) {
    return { valid: false, message: 'Project name is too long (max 214 characters)' };
  }

  return { valid: true };
}

export function needsOrm(database: string): boolean {
  // Convex has its own data layer, no ORM needed
  const noOrmDatabases = ['convex', 'none'];
  return !noOrmDatabases.includes(database);
}

export function validateCombination(config: {
  database?: string;
  auth?: string;
  orm?: string;
}): ValidationResult {
  // Supabase Auth requires Supabase database
  if (config.auth === 'supabase-auth' && config.database !== 'supabase') {
    return {
      valid: false,
      message: 'Supabase Auth requires Supabase as the database',
    };
  }

  return { valid: true };
}
