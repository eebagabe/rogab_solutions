import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { projectAccent } from '../lib/accents'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      style={projectAccent(index)}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-project/40 hover:shadow-xl hover:shadow-project/10"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-project" />
      <div className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-project/10 blur-2xl transition group-hover:bg-project/20" />

      <div className="mb-6 flex items-center justify-between gap-3">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-project/15 text-2xl" aria-hidden="true">
          {project.icon}
        </span>
        <span className="rounded-full border border-project/30 px-3 py-1 text-xs font-semibold text-project">
          {project.category}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold text-fg">
        {/* O link cobre o card inteiro; o link externo fica acima dele. */}
        <Link to={`/projetos/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {project.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.shortDescription}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.techs.map((tech) => (
          <li key={tech} className="rounded-md bg-bg-alt px-2 py-1 text-xs font-medium text-muted">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-7">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-project">
          Ver detalhes
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-sm font-medium text-muted transition hover:text-project"
          >
            Site ao vivo
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>
    </article>
  )
}
