import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import AllProjects from './pages/AllProjects'
import { useSeo } from './lib/seo'

/** Vai para a âncora da URL (ex.: /#contato) ou para o topo a cada navegação. */
function useScrollOnNavigate() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])
}

export default function AppRoutes() {
  useSeo()
  useScrollOnNavigate()

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<AllProjects />} />
          <Route path="/projetos/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
