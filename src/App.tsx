import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

// Import all your pages
import Home from './pages/index'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ProjectsPage from './pages/projects'
import ServicesPage from './pages/services'
// import { Header } from './components/site/Header'
// import { Footer } from './components/site/Footer'

// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) // This runs only once on mount

  return null
}

// Alternative: Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling to top
    })
  }, [pathname]) // Runs every time the route changes
  
  return null
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-orange text-brand-navy-deep shadow-lg hover:bg-brand-orange/90 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Option 1: Simple scroll to top on mount */}
      {/* <ScrollToTop /> */}
      
      {/* Option 2: Scroll to top on every route change (recommended) */}
      <ScrollToTopOnRouteChange />
      
      <div className="min-h-screen bg-background flex flex-col">
        {/* <Header/> */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        {/* <Footer/> */}
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App