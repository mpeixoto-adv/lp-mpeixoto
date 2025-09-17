export function base64ToString(base64: string): string {
  return Buffer.from(base64, 'base64').toString('utf-8')
}

export function stringToBase64(content: string): string {
  return Buffer.from(content, 'utf-8').toString('base64')
}
