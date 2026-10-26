import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import { button } from '../lib/ui'

export default function NotFound({ title = 'Página não encontrada' }: { title?: string }) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 pb-24 text-center">
      <span className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
        <SearchX className="size-8" />
      </span>
      <h1 className="font-heading text-3xl font-bold text-fg">{title}</h1>
      <p className="mt-3 max-w-md text-muted">O conteúdo que você procura não existe ou foi removido.</p>
      <Link to="/" className={`${button.primary} mt-8`}>
        Voltar para o início
      </Link>
    </section>
  )
}
