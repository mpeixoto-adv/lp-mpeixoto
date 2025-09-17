export function getEnv(name: string, fallback?: string): string {
  const value = process.env[name]
  if (value === undefined || value === '') {
    if (fallback !== undefined) {
      return fallback
    }
    throw new Error(`Environment variable ${name} is not defined`)
  }
  return value
}

export function optionalEnv(name: string): string | undefined {
  const value = process.env[name]
  return value === undefined || value === '' ? undefined : value
}
