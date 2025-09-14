import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { LoginForm } from '@/components/LoginForm'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, usuario, logout, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm />
  }

  return (
    <div>
      {/* Header com logout - fixo no topo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-600">Logado como:</span>
            <span className="text-xs font-medium text-primary">{usuario}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={logout}
            className="flex items-center space-x-1 text-xs h-7"
          >
            <LogOut className="h-3 w-3" />
            <span>Sair</span>
          </Button>
        </div>
      </div>

      {/* Conteúdo protegido com margin-top para compensar o header fixo */}
      <div className="pt-12">
        {children}
      </div>
    </div>
  )
}