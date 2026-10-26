import { Link } from 'react-router-dom'
import { useTheme } from '../lib/theme'
import type { Project } from '../data/projects'

const ACCENTS = [
  { bar: '#3a7ca5', iconBg: '#d6eaf8', iconBgDark: '#162d45', emoji: '💡' },
  { bar: '#e8601a', iconBg: '#fde8d9', iconBgDark: '#3d1a08', emoji: '🏡' },
  { bar: '#2c6188', iconBg: '#d0e5f5', iconBgDark: '#0d2a40', emoji: '📊' },
  { bar: '#e8a020', iconBg: '#fdf3d9', iconBgDark: '#3d2c08', emoji: '🎓' },
]

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = ACCENTS[index % ACCENTS.length]
  const { theme } = useTheme()

  return (
    <article className="project-card animate-on-scroll">
      <div className="project-card-accent" style={{ background: accent.bar }} />

      <div className="project-card-header">
        <div
          className="project-card-icon"
          style={{ background: theme === 'dark' ? accent.iconBgDark : accent.iconBg }}
        >
          {project.icon || accent.emoji}
        </div>
        <span className="project-category">{project.category}</span>
      </div>

      <div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-short-desc">{project.shortDescription}</p>
      </div>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="project-card-footer">
        <Link to={`/projetos/${project.slug}`} className="btn btn-outline">
          Ver mais →
        </Link>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-live"
          >
            Site ao vivo ↗
          </a>
        )}
      </div>
    </article>
  )
}
