function Footer() {
  const currentYear = 2026

  return (
    <footer className="border-t border-[#D8D6CF] bg-[#F7F6F2] px-6 py-8 text-[#111111] transition-colors duration-200 dark:border-[#33322E] dark:bg-[#11110F] dark:text-[#F5F3ED] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        {/* Identity */}
        <div>
          <p className="text-sm font-semibold tracking-tight text-[#111111] dark:text-[#F5F3ED]">
            Prakhar Upadhyay
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#88857E] dark:text-[#706E66]">
            Full-Stack Developer
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#55534E] dark:text-[#A5A39C]">
          <a
            href="https://github.com/prakharupadhyay03"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#111111] dark:hover:text-[#F5F3ED]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prakhar-upadhyay-6b8a2535b/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#111111] dark:hover:text-[#F5F3ED]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:prakharupadhyay407@gmail.com"
            className="transition-colors hover:text-[#111111] dark:hover:text-[#F5F3ED]"
          >
            Email
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-[#88857E] dark:text-[#706E66]">
            © {currentYear} Prakhar Upadhyay
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer