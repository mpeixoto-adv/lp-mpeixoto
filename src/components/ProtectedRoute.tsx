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
      {/* Elegant Authentication Header - positioned below main navigation */}
      <div className="fixed top-[100px] left-0 right-0 z-[90] bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">Sessão ativa:</span>
                <span className="text-primary font-semibold">{usuario}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="flex items-center space-x-2 text-sm h-8 text-muted-foreground hover:text-primary hover:bg-accent/10 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Encerrar sessão</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Protected content with adjusted padding to account for both navigation and auth header */}
      <div className="pt-[156px]">
        {children}
      </div>
    </div>
  )
}