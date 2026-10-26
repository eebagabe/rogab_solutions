import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { projects } from '../data/projects'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from './site'

const OG_IMAGE = `${SITE_URL}/logo.png`

/** Resolve título, descrição e caminho canônico de uma rota. */
export function getMeta(pathname = '/') {
  if (pathname.startsWith('/projetos/')) {
    const slug = pathname.replace('/projetos/', '').replace(/\/$/, '')
    const project = projects.find((p) => p.slug === slug)
    if (project) {
      return {
        title: `${project.name} | ${SITE_NAME}`,
        description: project.shortDescription,
        path: `/projetos/${project.slug}`,
        image: OG_IMAGE,
      }
    }
  }
  return {
    title: `${SITE_NAME} | Fábrica de software sob medida`,
    description: DEFAULT_DESCRIPTION,
    path: '/',
    image: OG_IMAGE,
  }
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Mantém title/description/canonical/OG sincronizados na navegação client-side. */
export function useSeo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = getMeta(pathname)
    const url = SITE_URL + meta.path
    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
  }, [pathname])
}
