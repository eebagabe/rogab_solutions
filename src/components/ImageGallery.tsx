import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import type { ProjectImage } from '../data/projects'

interface LightboxProps {
  images: ProjectImage[]
  startIndex: number
  onClose: () => void
}

const navButton =
  'absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25'

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const image = images[current]

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.label}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm motion-safe:animate-fade-up motion-safe:[animation-duration:200ms]"
    >
      <button type="button" onClick={onClose} aria-label="Fechar" className={`${navButton} top-6 right-6 translate-y-0`}>
        <X className="size-5" />
      </button>

      {images.length > 1 && (
        <>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Anterior" className={`${navButton} left-4`}>
            <ChevronLeft className="size-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Próxima" className={`${navButton} right-4`}>
            <ChevronRight className="size-6" />
          </button>
        </>
      )}

      <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
        <img key={current} src={image.src} alt={image.label} className="max-h-[80vh] rounded-xl object-contain" />
        <figcaption className="mt-4 flex justify-between gap-4 text-sm text-white/80">
          <span>{image.label}</span>
          {images.length > 1 && (
            <span>
              {current + 1} / {images.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}

export default function ImageGallery({ images }: { images: ProjectImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!images.length) return null

  return (
    <div>
      <h2 className="mb-5 font-heading text-xl font-bold text-fg">Capturas de tela</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`Ampliar ${img.label}`}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-bg-alt"
          >
            <img src={img.src} alt={img.label} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {img.label}
              <Expand className="size-4" />
            </span>
            <span className="absolute inset-x-0 bottom-0 h-1 bg-project" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={images} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </div>
  )
}
