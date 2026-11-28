import { Component, type ErrorInfo, type ReactNode } from 'react'

import { Button } from '@/components/ui'
import { couple } from '@/data'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

/**
 * Catches unexpected runtime errors and presents a calm recovery screen.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Invitation runtime error:', error, info)
    }
  }

  private handleReload = () => {
    window.location.assign('/')
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main className="flex min-h-svh items-center justify-center bg-background px-gutter py-section-sm">
        <div className="mx-auto max-w-md rounded-2xl border border-gold/20 bg-card p-8 text-center shadow-elevated">
          <p className="font-heading text-2xl tracking-[0.2em] text-primary">
            {couple.monogram}
          </p>
          <h1 className="type-heading-2 mt-4 text-primary">
            Something unexpected happened
          </h1>
          <p className="type-body-muted mt-3">
            Please refresh the invitation to continue.
          </p>
          <Button
            type="button"
            onClick={this.handleReload}
            className="mt-6 h-11 rounded-xl bg-gold px-6 text-white hover:bg-gold-dark"
          >
            Reload Invitation
          </Button>
        </div>
      </main>
    )
  }
}
