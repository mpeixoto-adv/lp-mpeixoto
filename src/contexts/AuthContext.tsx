import React, { createContext, useContext, useState, useEffect } from 'react'
import { verificarSenha, gerarToken, verificarToken, authStorage } from '@/utils/auth'

interface AuthContextType {
  isAuthenticated: boolean
  usuario: string | null
  login: (usuario: string, senha: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [usuario, setUsuario] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Verificar autenticação ao inicializar
  useEffect(() => {
    const token = authStorage.getToken()
    if (token) {
      const { usuario: tokenUsuario, valid } = verificarToken(token)
      if (valid) {
        setIsAuthenticated(true)
        setUsuario(tokenUsuario)
      } else {
        authStorage.removeToken()
      }
    }
    setLoading(false)
  }, [])

  const login = async (inputUsuario: string, senha: string): Promise<boolean> => {
    try {
      // Verificar credenciais
      if (inputUsuario !== 'adv') {
        return false
      }

      const senhaValida = await verificarSenha(senha)
      if (!senhaValida) {
        return false
      }

      // Gerar e armazenar token
      const token = gerarToken(inputUsuario)
      authStorage.setToken(token)

      setIsAuthenticated(true)
      setUsuario(inputUsuario)

      return true
    } catch (error) {
      console.error('Erro no login:', error)
      return false
    }
  }

  const logout = () => {
    authStorage.removeToken()
    setIsAuthenticated(false)
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      usuario,
      login,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}