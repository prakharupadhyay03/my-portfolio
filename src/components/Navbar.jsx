import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react'

const RESUME_URL =
  'https://drive.google.com/file/d/1oTTXHzVmFqspBbUwaiqdL8rkTo7L3iNy/view?usp=sharing'

function Navbar({ darkMode, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#D8D6CF] bg-[#F7F6F2]/90 backdrop-blur-md dark:border-[#33322E] dark:bg-[#11110F]/90 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
          : 'border-b border-transparent bg-[#F7F6F2]/80 backdrop-blur-sm dark:bg-[#11110F]/80'
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Brand: Prakhar Upadhyay */}
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight text-[#111111] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:text-[#F5F3ED] dark:focus-visible:ring-[#F5F3ED] whitespace-nowrap"
          >
            Prakhar Upadhyay
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center md:gap-5 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded px-1 text-sm text-[#55534E] transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:text-[#A5A39C] dark:hover:text-[#F5F3ED] dark:focus-visible:ring-[#F5F3ED]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side: Theme Toggle + Resume Button + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D6CF] bg-[#EFECE6]/50 text-[#111111] transition-all hover:bg-[#E5E2DA] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#F5F3ED] dark:hover:bg-[#252420] dark:focus-visible:ring-[#F5F3ED]"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun size={17} strokeWidth={1.8} className="text-amber-400" />
              ) : (
                <Moon size={17} strokeWidth={1.8} className="text-[#333333]" />
              )}
            </button>

            {/* Desktop Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 rounded-[7px] border border-[#111111] px-3.5 py-1.5 text-xs font-medium tracking-tight text-[#111111] transition-colors duration-200 hover:bg-[#111111] hover:text-[#F7F6F2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:border-[#F5F3ED] dark:text-[#F5F3ED] dark:hover:bg-[#F5F3ED] dark:hover:text-[#11110F] dark:focus-visible:ring-[#F5F3ED]"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-[7px] border border-[#D8D6CF] bg-[#EFECE6]/50 text-[#111111] transition-colors md:hidden dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#F5F3ED]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-[#D8D6CF] bg-[#F7F6F2] py-5 shadow-xl transition-all md:hidden dark:border-[#33322E] dark:bg-[#11110F]">
            <div className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-2 text-sm font-medium text-[#111111] transition-colors hover:text-[#88857E] dark:text-[#F5F3ED] dark:hover:text-[#A5A39C]"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-[#D8D6CF] dark:border-[#33322E]">
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="inline-flex w-full items-center justify-between rounded-[7px] border border-[#111111] px-3.5 py-2 text-xs font-medium text-[#111111] transition-colors hover:bg-[#111111] hover:text-[#F7F6F2] dark:border-[#F5F3ED] dark:text-[#F5F3ED] dark:hover:bg-[#F5F3ED] dark:hover:text-[#11110F]"
                >
                  <span>Resume</span>
                  <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar