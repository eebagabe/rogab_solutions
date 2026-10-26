import type { CSSProperties } from 'react'

const ACCENTS = ['#3a7ca5', '#e8601a', '#2c6188', '#e8a020']

/** Cor de destaque do projeto, exposta como --project para as classes *-project. */
export const projectAccent = (index: number) => ({ '--project': ACCENTS[index % ACCENTS.length] }) as CSSProperties
