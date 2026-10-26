import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import BackLink from '../components/BackLink'

export default function AllProjects() {
  return (
    <section className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <BackLink to="/">Voltar ao início</BackLink>

        <SectionHeading as="h1" label="Portfólio" title="Todos os projetos">
          <strong className="font-heading text-primary">{projects.length}</strong>{' '}
          {projects.length === 1 ? 'projeto desenvolvido' : 'projetos desenvolvidos'}, cada um resultado de uma
          parceria real.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
