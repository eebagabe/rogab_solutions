import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bot,
  Briefcase,
  Check,
  Cloud,
  CodeXml,
  Compass,
  Gem,
  Handshake,
  Layers,
  Mail,
  Palette,
  PenTool,
  Rocket,
  Search,
  Send,
  Sparkles,
  Target,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../lib/site'
import { button } from '../lib/ui'

interface Item {
  icon: LucideIcon
  title: string
  desc: string
}

const SERVICES: Item[] = [
  {
    icon: CodeXml,
    title: 'Desenvolvimento',
    desc: 'Sites, landing pages, apps mobile (iOS e Android), sistemas web, plataformas SaaS, APIs, integrações e e-commerces.',
  },
  {
    icon: Bot,
    title: 'IA e Automação',
    desc: 'Chatbots e assistentes virtuais com OpenAI, Gemini e Claude, automação de processos (RPA) e análise de dados.',
  },
  {
    icon: Palette,
    title: 'Design e Experiência',
    desc: 'UI/UX Design, prototipação, wireframes e design systems para produtos consistentes e agradáveis de usar.',
  },
  {
    icon: Cloud,
    title: 'Infraestrutura e Qualidade',
    desc: 'Deploy em nuvem (AWS, GCP, Azure), monitoramento, testes automatizados, segurança e performance.',
  },
  {
    icon: Compass,
    title: 'Consultoria',
    desc: 'Arquitetura de software, code review, mentoria técnica e apoio à transformação digital.',
  },
]

const VALUES: Item[] = [
  { icon: Target, title: 'Foco no resultado', desc: 'Entregamos o que importa: software que funciona e gera valor.' },
  { icon: Zap, title: 'Agilidade', desc: 'Ciclos curtos, entregas frequentes e tempo recorde.' },
  { icon: Gem, title: 'Qualidade absoluta', desc: 'Código limpo, testado e pronto para escalar.' },
  { icon: Handshake, title: 'Transparência', desc: 'Comunicação direta e honesta em cada etapa do projeto.' },
]

const STATS = [
  { icon: Rocket, value: '2026', label: 'Atuando desde' },
  { icon: Layers, value: '100%', label: 'Do briefing ao deploy' },
  { icon: Briefcase, value: '20+', label: 'Projetos entregues' },
  { icon: Sparkles, value: '5', label: 'Áreas de atuação' },
]

const STEPS: Item[] = [
  { icon: Search, title: 'Descoberta', desc: 'Entendemos o negócio, os objetivos e o que precisa ser resolvido.' },
  { icon: PenTool, title: 'Design', desc: 'Prototipamos e validamos a solução com você antes de escrever código.' },
  { icon: CodeXml, title: 'Desenvolvimento', desc: 'Ciclos curtos com entregas frequentes para você acompanhar a evolução.' },
  { icon: Send, title: 'Entrega e suporte', desc: 'Deploy, monitoramento e evolução contínua depois do lançamento.' },
]

const HIGHLIGHTS = ['Do briefing ao deploy', 'Entregas frequentes', 'Código testado']

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:flex lg:min-h-[min(100svh,60rem)] lg:items-center lg:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-[size:48px_48px] opacity-60" />
        <div className="absolute -top-32 -right-32 size-[36rem] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 size-[28rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="motion-safe:animate-fade-up">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-light px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Fábrica de software
          </span>

          <h1 className="font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-fg sm:text-5xl lg:text-6xl">
            Entregamos solução em{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">tempo recorde</span> e
            com <span className="text-primary">qualidade absoluta.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Da ideia ao deploy: desenvolvemos sistemas web e mobile com foco em resultado, agilidade e código que dura.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to={{ pathname: '/', hash: 'projetos' }} className={button.primary}>
              Ver projetos
              <ArrowRight className="size-4" />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={button.ghost}>
              <WhatsAppIcon className="size-4" />
              Fale conosco
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary-light text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md motion-safe:animate-fade-up motion-safe:[animation-delay:200ms]">
          <div className="absolute inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />
          <img src="/images/rogab-escuro.png" alt="Rogab Solutions" className="w-full dark:hidden" />
          <img src="/images/rogab-branco.png" alt="Rogab Solutions" className="hidden w-full dark:block" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div>
          <SectionHeading label="Sobre nós" title="Uma fábrica de software orientada a resultado">
            Somos uma equipe de desenvolvedores em atuação desde 2026, focada em entregar soluções digitais completas, do
            briefing ao deploy. Atendemos desde projetos pontuais até parcerias de longo prazo, sempre com comunicação
            clara, prazos cumpridos e código de qualidade.
          </SectionHeading>
          <p className="-mt-8 mb-10 max-w-2xl leading-relaxed text-muted sm:text-lg">
            Construímos soluções sob medida para empresas de diferentes segmentos, tratando cada projeto com foco no
            funcionamento real do negócio, não só no código.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5 transition hover:border-primary/40">
                  <Icon className="mb-3 size-6 text-primary" />
                  <h3 className="font-heading font-semibold text-fg">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:mt-16">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-gradient-to-br from-surface to-primary-light/60 p-6">
                <Icon className="mb-4 size-6 text-accent" />
                <div className="font-heading text-3xl font-extrabold text-primary">{value}</div>
                <div className="mt-1 text-sm text-muted">{label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="bg-bg-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="O que fazemos" title="Nossos serviços">
          Atuamos em toda a cadeia de desenvolvimento de software, da concepção ao pós-lançamento.
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 80} className={i === 0 ? 'lg:col-span-2' : ''}>
              <div className="group h-full rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white dark:group-hover:text-bg">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-fg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="processo" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Como trabalhamos" title="Do briefing ao deploy, sem surpresas" center>
          Um processo simples e transparente, com você acompanhando cada etapa.
        </SectionHeading>

        <ol className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block" />
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title}>
              <Reveal delay={i * 100} className="relative text-center">
                <span className="relative mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-border bg-surface text-primary shadow-sm">
                  <Icon className="size-6" />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-heading font-semibold text-fg">{title}</h3>
                <p className="mx-auto mt-2 max-w-60 text-sm leading-relaxed text-muted">{desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projetos" className="bg-bg-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading label="Portfólio" title="Projetos desenvolvidos">
            Cada projeto é resultado de uma parceria real: problemas reais resolvidos com tecnologia bem aplicada.
          </SectionHeading>
          <Link to="/projetos" className={`${button.outline} mb-12`}>
            Ver todos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark px-8 py-16 text-center text-white shadow-2xl shadow-primary/30 sm:px-16 dark:from-primary-light dark:to-surface">
            <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-white/10 blur-3xl" />

            <h2 className="relative font-heading text-3xl font-bold text-balance sm:text-4xl">Tem um projeto em mente?</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-lg text-white/80 dark:text-muted">
              Nos conte o que você precisa. Respondemos rápido e sem enrolação.
            </p>

            <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-lg transition hover:-translate-y-0.5 dark:bg-primary dark:text-bg"
              >
                <WhatsAppIcon className="size-5" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 dark:border-border dark:text-fg"
              >
                <Mail className="size-5" />
                {EMAIL}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Projects />
      <Contact />
    </>
  )
}
