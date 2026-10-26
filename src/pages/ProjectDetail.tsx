import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight, Lightbulb } from 'lucide-react'
import { projects } from '../data/projects'
import ImageGallery from '../components/ImageGallery'
import WhatsAppIcon from '../components/WhatsAppIcon'
import NotFound from './NotFound'
import { projectAccent } from '../lib/accents'
import { WHATSAPP_URL } from '../lib/site'

const accentButton =
  'inline-flex items-center justify-center gap-2 rounded-full bg-project px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-project/25 transition hover:-translate-y-0.5 hover:brightness-110'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  if (!project) return <NotFound title="Projeto não encontrado" />

  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div style={projectAccent(index)}>
      <section className="relative overflow-hidden border-b border-border pt-28 pb-16">
        <div className="pointer-events-none absolute -top-40 -right-40 -z-10 size-[32rem] rounded-full bg-project/15 blur-3xl" />
        <div className="mx-auto max-w-6xl px-6">
          <nav aria-label="Trilha" className="mb-10 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to="/" className="transition hover:text-primary">Início</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                <Link to="/projetos" className="transition hover:text-primary">Projetos</Link>
              </li>
              <li aria-current="page" className="flex items-center gap-1.5 font-medium text-fg">
                <ChevronRight className="size-3.5" aria-hidden="true" />
                {project.name}
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-project/15 text-3xl" aria-hidden="true">
              {project.icon}
            </span>
            <span className="rounded-full border border-project/30 bg-project/10 px-3 py-1 text-xs font-semibold text-project">
              {project.category}
            </span>
          </div>

          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-balance text-fg sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.shortDescription}</p>

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${accentButton} mt-8`}>
              Ver site ao vivo
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 font-heading text-xl font-bold text-fg">Sobre o projeto</h2>
              <div className="space-y-4 leading-relaxed text-muted">
                {project.description.split('\n').map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-project/25 bg-project/5 p-6 sm:p-8">
              <h2 className="mb-3 flex items-center gap-2 font-heading text-xl font-bold text-fg">
                <Lightbulb className="size-5 text-project" />
                Desafio e solução
              </h2>
              <p className="leading-relaxed text-muted">{project.challenge}</p>
            </div>

            <ImageGallery images={project.images} />
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-fg uppercase">Tecnologias</h2>
              <ul className="space-y-2.5">
                {project.techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2.5 text-sm text-fg">
                    <span className="size-2 rounded-full bg-project" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-fg uppercase">Tags</h2>
              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-md bg-bg-alt px-2 py-1 text-xs font-medium text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-project/25 bg-project/10 p-6">
              <p className="text-sm leading-relaxed text-muted">
                Gostou do que viu? Fale com a gente pelo WhatsApp e conte seu projeto.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${accentButton} mt-4 w-full`}>
                <WhatsAppIcon className="size-4" />
                Fale conosco
              </a>
            </div>
          </aside>
        </div>
      </section>

      {projects.length > 1 && (
        <nav aria-label="Outros projetos" className="border-t border-border bg-bg-alt">
          <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-2">
            <Link
              to={`/projetos/${prev.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40"
            >
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <ArrowLeft className="size-3.5 transition group-hover:-translate-x-1" />
                Projeto anterior
              </span>
              <span className="mt-1 block font-heading font-semibold text-fg">{prev.name}</span>
            </Link>
            <Link
              to={`/projetos/${next.slug}`}
              className="group rounded-2xl border border-border bg-surface p-5 text-right transition hover:border-primary/40"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
                Próximo projeto
                <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
              </span>
              <span className="mt-1 block font-heading font-semibold text-fg">{next.name}</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  )
}
