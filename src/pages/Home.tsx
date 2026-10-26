import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const SHOW_CONTACT = true
const WHATSAPP_URL = 'https://wa.me/5582991828178'

const SERVICES = [
  {
    icon: '🖥️',
    name: 'Desenvolvimento',
    desc: 'Sites, landing pages, apps mobile (iOS e Android), sistemas web, plataformas SaaS, APIs, integrações e e-commerces.',
  },
  {
    icon: '🤖',
    name: 'IA e Automação',
    desc: 'Chatbots e assistentes virtuais com OpenAI, Gemini e Claude, automação de processos (RPA) e análise de dados.',
  },
  {
    icon: '🎨',
    name: 'Design e Experiência',
    desc: 'UI/UX Design, prototipação, wireframes e design systems para produtos consistentes e agradáveis de usar.',
  },
  {
    icon: '☁️',
    name: 'Infraestrutura e Qualidade',
    desc: 'Deploy em nuvem (AWS, GCP, Azure), monitoramento, testes automatizados, segurança e performance.',
  },
  {
    icon: '🧭',
    name: 'Consultoria',
    desc: 'Arquitetura de software, code review, mentoria técnica e apoio à transformação digital.',
  },
]

const VALUES = [
  { icon: '🎯', title: 'Foco no resultado', desc: 'Entregamos o que importa: software que funciona e gera valor.' },
  { icon: '⏱️', title: 'Agilidade', desc: 'Ciclos curtos, entregas frequentes e tempo recorde.' },
  { icon: '💎', title: 'Qualidade absoluta', desc: 'Código limpo, testado e pronto para escalar.' },
  { icon: '🤝', title: 'Transparência', desc: 'Comunicação direta e honesta em cada etapa do projeto.' },
]

function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

const CAROUSEL_VISIBLE = 3
const AUTOPLAY_INTERVAL = 3500

function ServicesCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const total = SERVICES.length

  const goTo = useCallback((idx: number, wrap = true) => {
    if (animating) return
    setAnimating(true)
    const next = wrap ? (idx + total) % total : idx
    setCurrent(next)
    setTimeout(() => setAnimating(false), 450)
  }, [animating, total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  // Build the ordered slice to show
  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < CAROUSEL_VISIBLE; i++) {
      cards.push(SERVICES[(current + i) % total])
    }
    return cards
  }

  return (
    <div
      className="services-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        className="carousel-btn carousel-btn-prev"
        onClick={prev}
        aria-label="Serviço anterior"
      >
        ‹
      </button>

      <div className={`carousel-track ${animating ? 'carousel-fade' : ''}`}>
        {getVisibleCards().map((s, i) => (
          <div key={`${s.name}-${current}-${i}`} className="service-card carousel-card">
            <span className="service-icon">{s.icon}</span>
            <div className="service-name">{s.name}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn carousel-btn-next"
        onClick={next}
        aria-label="Próximo serviço"
      >
        ›
      </button>

      <div className="carousel-indicators">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i, false)}
            aria-label={`Ir para serviço ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>●</span> Fábrica de software
            </div>
            <h1 className="hero-title">
              Entregamos solução<br />
              em <em>tempo recorde</em><br />
              e com <em>qualidade absoluta.</em>
            </h1>
            <p className="hero-sub">
              Da ideia ao deploy: desenvolvemos sistemas web e mobile com foco em resultado,
              agilidade e código que dura.
            </p>
            <div className="hero-actions">
              <Link to="#projetos" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Ver Projetos →
              </Link>
              {SHOW_CONTACT && (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Fale conosco
                </a>
              )}
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/rogab-escuro.png" alt="Rogab Solutions" className="hero-logo-img light-only" />
            <img src="/images/rogab-branco.png" alt="Rogab Solutions" className="hero-logo-img dark-only" />
          </div>
        </div>
      </section>

      {/* ── Sobre ────────────────────────────────────────── */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <span className="section-label">Sobre nós</span>
              <h2 className="section-title">Uma fábrica de software orientada a resultado</h2>
              <p className="section-sub">
                Somos uma equipe de desenvolvedores em atuação desde 2026, focada em entregar soluções
                digitais completas, do briefing ao deploy. Atendemos desde projetos pontuais até parcerias
                de longo prazo, sempre com comunicação clara, prazos cumpridos e código de qualidade.
              </p>
              <p className="section-sub" style={{ marginTop: '16px' }}>
                Construímos soluções sob medida para empresas de diferentes segmentos, tratando cada projeto
                com foco no funcionamento real do negócio, não só no código.
              </p>

              <div className="sobre-values" style={{ marginTop: '32px' }}>
                {VALUES.map((v) => (
                  <div key={v.title} className="value-card animate-on-scroll">
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sobre-visual">
              {[
                { icon: '🚀', number: '2026', label: 'Atuando desde' },
                { icon: '📐', number: '100%', label: 'Do briefing ao deploy' },
                { icon: '💼', number: '20+', label: 'Projetos entregues' },
                { icon: '⚡', number: '5', label: 'Áreas de atuação' },
              ].map((s) => (
                <div key={s.label} className="stat-card animate-on-scroll">
                  <div className="stat-icon">{s.icon}</div>
                  <div>
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Serviços ─────────────────────────────────────── */}
      <section className="section section-alt" id="servicos">
        <div className="container">
          <span className="section-label">O que fazemos</span>
          <h2 className="section-title">Nossos serviços</h2>
          <p className="section-sub">
            Atuamos em toda a cadeia de desenvolvimento de software, da concepção ao pós-lançamento.
          </p>

          {/* Desktop: carrossel automático */}
          <ServicesCarousel />

          {/* Mobile: grid original */}
          <div className="services-grid services-grid-mobile">
            {SERVICES.map((s) => (
              <div key={s.name} className="service-card animate-on-scroll">
                <span className="service-icon">{s.icon}</span>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projetos ─────────────────────────────────────── */}
      <section className="section" id="projetos">
        <div className="container">
          <span className="section-label">Portfólio</span>
          <h2 className="section-title">Projetos desenvolvidos</h2>
          <p className="section-sub">
            Cada projeto é resultado de uma parceria real: problemas reais resolvidos com tecnologia bem aplicada.
          </p>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <Link to="/projetos" className="btn btn-outline" style={{ padding: '14px 36px', fontSize: '1rem' }}>
              Ver Outros →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contato ──────────────────────────────────────── */}
      {SHOW_CONTACT && (
        <section className="section section-alt" id="contato">
          <div className="container">
            <div className="contact-wrapper">
              <h2 className="contact-title">Tem um projeto em mente?</h2>
              <p className="contact-sub">
                Nos conte o que você precisa. Respondemos rápido e sem enrolação.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +55 (82) 9182-8178
                </a>
                <a
                  href="mailto:rogabsolutions@gmail.com"
                  className="contact-email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  rogabsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
