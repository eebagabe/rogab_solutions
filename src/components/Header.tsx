import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { NAV_LINKS } from '../lib/site'
import { useTheme } from '../lib/theme'
import { button } from '../lib/ui'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.key])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-border bg-bg/80 shadow-sm backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-bold whitespace-nowrap text-primary">
          <img src={logo} alt="" className="size-9 rounded-lg object-contain" />
          Rogab Solutions
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              to={{ pathname: '/', hash: id }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-primary-light hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label="Alternar tema claro e escuro"
            className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-primary/40 hover:text-primary"
          >
            <Moon className="size-[18px] dark:hidden" />
            <Sun className="hidden size-[18px] dark:block" />
          </button>

          <Link to={{ pathname: '/', hash: 'contato' }} className={`${button.primary} py-2.5! max-md:hidden`}>
            Fale conosco
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full border border-border text-fg md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Menu móvel" className="border-t border-border px-6 pt-2 pb-6 md:hidden">
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              to={{ pathname: '/', hash: id }}
              className="block border-b border-border py-3.5 font-medium text-fg transition hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <Link to={{ pathname: '/', hash: 'contato' }} className={`${button.primary} mt-5 w-full`}>
            Fale conosco
          </Link>
        </nav>
      )}
    </header>
  )
}
