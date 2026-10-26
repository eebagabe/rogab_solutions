import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useTheme } from '../lib/theme'

const SHOW_CONTACT = true

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToSection = (id: string) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a
          className="logo"
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
        >
          <img src={logo} alt="Rogab Solutions" className="logo-img" />
          Rogab Solutions
        </a>

        <div className="header-end">
          <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
            {[
              { id: 'sobre',    label: 'Sobre'    },
              { id: 'servicos', label: 'Serviços' },
              { id: 'projetos', label: 'Projetos' },
              ...(SHOW_CONTACT ? [{ id: 'contato', label: 'Contato' }] : []),
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
              >
                {label}
              </a>
            ))}
            {SHOW_CONTACT && (
              <a
                className="nav-cta"
                href="#contato"
                onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}
              >
                Fale conosco
              </a>
            )}
          </nav>

          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          >
            {theme === 'dark' ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-2a1 1 0 0 0 1-1V2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm0 16a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM4.22 5.64 2.81 4.22a1 1 0 0 0-1.41 1.41l1.41 1.42a1 1 0 1 0 1.41-1.41zm14.14 12.72 1.41 1.41a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 1.41zM21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM4 12a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm13.66-7.78a1 1 0 0 0-1.41 0l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0 0-1.41zM6.34 17.66 4.93 19.07a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 1 0-1.41-1.41z"/>
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
