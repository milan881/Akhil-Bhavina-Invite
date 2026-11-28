import { Link } from 'react-router-dom'

import { Button } from '@/components/ui'
import { couple } from '@/data'
import { ROUTES } from '@/constants'

/**
 * Styled 404 page for invalid routes.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-gutter py-section-sm">
      <div className="mx-auto max-w-md rounded-2xl border border-gold/20 bg-card p-8 text-center shadow-elevated">
        <p className="font-heading text-2xl tracking-[0.2em] text-primary">
          {couple.monogram}
        </p>
        <h1 className="type-heading-2 mt-4 text-primary">Page Not Found</h1>
        <p className="type-body-muted mt-3">
          This page is not part of the wedding invitation.
        </p>
        <Button
          asChild
          className="mt-6 h-11 rounded-xl bg-gold px-6 text-white hover:bg-gold-dark"
        >
          <Link to={ROUTES.HOME}>Return to Invitation</Link>
        </Button>
      </div>
    </main>
  )
}
