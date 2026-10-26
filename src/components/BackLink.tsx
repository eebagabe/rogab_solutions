import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-primary"
    >
      <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
      {children}
    </Link>
  )
}
