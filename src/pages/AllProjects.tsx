import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function AllProjects() {
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
      { threshold: 0.1 }
    )
    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="detail-page">
      <div className="detail-hero">
        <div className="container">
          <div className="detail-back">
            <Link to="/" className="btn btn-ghost" style={{ fontSize: '0.88rem', padding: '8px 18px' }}>
              ← Voltar ao início
            </Link>
          </div>

          <span className="section-label">Portfólio</span>
          <h1 className="detail-title">Todos os projetos</h1>
          <p className="detail-short">
            <strong style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>
              {projects.length}
            </strong>{' '}
            {projects.length === 1 ? 'projeto desenvolvido' : 'projetos desenvolvidos'} — cada um resultado de uma parceria real.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
