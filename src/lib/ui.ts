const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

/** Classes de botão compartilhadas por <Link>, <a> e <button>. */
export const button = {
  primary: `${base} bg-primary text-white shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/40 dark:text-bg`,
  outline: `${base} border border-primary/40 text-primary hover:border-primary hover:bg-primary-light`,
  ghost: `${base} border border-border bg-surface/60 text-fg backdrop-blur hover:border-primary/40 hover:text-primary`,
}
