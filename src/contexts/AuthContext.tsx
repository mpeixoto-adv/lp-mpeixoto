import React, { createContext, useContext, useState, useEffect } from 'react'
import { login as loginRequest, logout as logoutRequest, recuperarSessao } from '@/utils/auth'

interface AuthContextType {
  isAuthenticated: boolean
  usuario: string | null
  login: (usuario: string, senha: string) => Promise<boolean>
  logout: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [usuario, setUsuario] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Verifica sessão persistida via backend
  useEffect(() => {
    let ativo = true

    recuperarSessao()
      .then(usuarioDaSessao => {
        if (!ativo) return
        if (usuarioDaSessao) {
          setIsAuthenticated(true)
          setUsuario(usuarioDaSessao)
        }
      })
      .finally(() => {
        if (ativo) setLoading(false)
      })

    return () => {
      ativo = false
    }
  }, [])

  const login = async (inputUsuario: string, senha: string): Promise<boolean> => {
    try {
      const usuarioAutenticado = await loginRequest(inputUsuario, senha)
      setIsAuthenticated(true)
      setUsuario(usuarioAutenticado)
      return true
    } catch (error) {
      console.error('Erro no login:', error)
      return false
    }
  }

  const logout = async () => {
    try {
      await logoutRequest()
    } finally {
      setIsAuthenticated(false)
      setUsuario(null)
    }
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
