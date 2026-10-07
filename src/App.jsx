import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      if (saved) return saved === 'dark'
    }
    // Light mode is default as per requirements
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('portfolio-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('portfolio-theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED]">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App