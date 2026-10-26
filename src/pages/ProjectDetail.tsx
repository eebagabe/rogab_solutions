import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ImageGallery from '../components/ImageGallery'
import { useTheme } from '../lib/theme'

const SHOW_CONTACT = true
const WHATSAPP_URL = 'https://wa.me/5582991828178'

const ACCENTS = [
  { color: '#3a7ca5', light: '#d6eaf8', lightDark: '#162d45' },
  { color: '#e8601a', light: '#fde8d9', lightDark: '#3d1a08' },
  { color: '#2c6188', light: '#d0e5f5', lightDark: '#0d2a40' },
  { color: '#e8a020', light: '#fdf3d9', lightDark: '#3d2c08' },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const { theme } = useTheme()

  if (!project) {
    return (
      <div className="detail-page">
        <div className="not-found">
          <div className="not-found-icon">🔍</div>
          <h2>Projeto não encontrado</h2>
          <p>O projeto que você procura não existe ou foi removido.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
            ← Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  const accent = ACCENTS[index % ACCENTS.length]
  const accentBg = theme === 'dark' ? accent.lightDark : accent.light

  return (
    <div className="detail-page">
      {/* ── Hero ────────────────────────────────── */}
      <section className="detail-hero" style={{ borderTop: `4px solid ${accent.color}` }}>
        <div className="container">
          <div className="detail-back">
            <Link to="/" className="btn btn-ghost">
              ← Voltar aos projetos
            </Link>
          </div>

          <div className="detail-meta">
            <span
              className="project-category"
              style={{ background: accentBg, borderColor: accent.color + '44', color: accent.color }}
            >
              {project.category}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <h1 className="detail-title">{project.name}</h1>
          <p className="detail-short">{project.shortDescription}</p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '24px', background: accent.color }}
            >
              Ver site ao vivo ↗
            </a>
          )}
        </div>
      </section>

      {/* ── Body ────────────────────────────────── */}
      <section className="detail-body">
        <div className="container">
          <div className="detail-grid">
            {/* Main content */}
            <div>
              <h2 className="detail-section-title">Sobre o projeto</h2>
              <p className="detail-description">{project.description}</p>

              <h2 className="detail-section-title">Desafio & solução</h2>
              <div className="detail-challenge">
                {project.challenge}
              </div>

              <ImageGallery images={project.images} accentColor={accent.color} />
            </div>

            {/* Sidebar */}
            <aside className="detail-sidebar">
              <div className="detail-card">
                <h3 className="detail-section-title">Tecnologias</h3>
                <div className="tech-list">
                  {project.techs.map((tech) => (
                    <div key={tech} className="tech-item">
                      <span className="tech-dot" style={{ background: accent.color }} />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-card">
                <h3 className="detail-section-title">Categoria</h3>
                <div className="detail-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              {SHOW_CONTACT && (
                <div
                  className="detail-card"
                  style={{ background: accentBg, borderColor: accent.color + '33' }}
                >
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    Gostou do que viu? Fale com a gente pelo WhatsApp e conte seu projeto.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '16px', background: accent.color, width: '100%', justifyContent: 'center' }}
                  >
                    Fale conosco
                  </a>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
