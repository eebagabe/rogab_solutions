import type { CSSProperties } from 'react'

// Tokens da paleta (adaptam ao tema) + amarelo exclusivo dos projetos.
const ACCENTS = ['var(--primary)', 'var(--accent)', 'var(--primary-dark)', '#e8a020']

/** Cor de destaque do projeto, exposta como --project para as classes *-project. */
export const projectAccent = (index: number) => ({ '--project': ACCENTS[index % ACCENTS.length] }) as CSSProperties
