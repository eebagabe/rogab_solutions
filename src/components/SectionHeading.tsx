import type { ReactNode } from 'react'

interface SectionHeadingProps {
  label: string
  title: ReactNode
  children?: ReactNode
  center?: boolean
  as?: 'h1' | 'h2'
}

export default function SectionHeading({ label, title, children, center, as: Title = 'h2' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
        {label}
      </span>
      <Title className="font-heading text-3xl leading-tight font-bold text-balance text-fg sm:text-4xl">{title}</Title>
      {children && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{children}</p>}
    </div>
  )
}
