import bcrypt from 'bcryptjs'

// Hash da senha do advogado (mude esta senha!)
// Senha atual: "advocacia2024" - MUDE ESTA SENHA!
const SENHA_HASH = '$2b$10$VoXXVraN7qMoMPTXfVZgBOgObP7ZWZTAMjMJQgsJelTTzZsXmbEaS'

// Gerar novo hash (use este código para criar novo hash quando mudar a senha)
export async function gerarHashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, 10)
}

// Verificar senha
export async function verificarSenha(senha: string): Promise<boolean> {
  try {
    return await bcrypt.compare(senha, SENHA_HASH)
  } catch (error) {
    console.error('Erro ao verificar senha:', error)
    return false
  }
}

// Gerar JWT simples (sem biblioteca externa)
export function gerarToken(usuario: string): string {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({
    usuario,
    exp: Date.now() + (24 * 60 * 60 * 1000), // 24 horas
    iat: Date.now()
  }))

  // Assinatura simples (para produção, use uma chave secreta mais robusta)
  const signature = btoa(`${header}.${payload}.advocacia-secret-key`)

  return `${header}.${payload}.${signature}`
}

// Verificar e decodificar token
export function verificarToken(token: string): { usuario: string; valid: boolean } {
  try {
    const [header, payload, signature] = token.split('.')

    // Verificar assinatura
    const expectedSignature = btoa(`${header}.${payload}.advocacia-secret-key`)
    if (signature !== expectedSignature) {
      return { usuario: '', valid: false }
    }

    // Decodificar payload
    const decoded = JSON.parse(atob(payload))

    // Verificar expiração
    if (decoded.exp < Date.now()) {
      return { usuario: '', valid: false }
    }

    return { usuario: decoded.usuario, valid: true }
  } catch (error) {
    return { usuario: '', valid: false }
  }
}

// Storage do token
export const authStorage = {
  setToken: (token: string) => localStorage.setItem('auth-token', token),
  getToken: () => localStorage.getItem('auth-token'),
  removeToken: () => localStorage.removeItem('auth-token'),

  isAuthenticated: () => {
    const token = localStorage.getItem('auth-token')
    if (!token) return false

    const { valid } = verificarToken(token)
    if (!valid) {
      localStorage.removeItem('auth-token')
      return false
    }

    return true
  }
}