import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import logo from '../assets/logo.png'
import { EMAIL, NAV_LINKS, PHONE_DISPLAY, SITE_NAME, WHATSAPP_URL } from '../lib/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-bold text-primary">
            <img src={logo} alt="" className="size-9 rounded-lg object-contain" />
            {SITE_NAME}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Fábrica de software sob medida. Da ideia ao deploy, com foco em resultado e código de qualidade.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-fg uppercase">Navegação</h2>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <Link to={{ pathname: '/', hash: id }} className="text-muted transition hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-fg uppercase">Contato</h2>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted transition hover:text-primary">
                <WhatsAppIcon className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 break-all text-muted transition hover:text-primary">
                <Mail className="size-4 shrink-0" />
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted">
          &copy; {year} {SITE_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
