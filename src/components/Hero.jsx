import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative overflow-hidden bg-[#F7F6F2] text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED]"
    >
      <div className="mx-auto max-w-7xl px-6 pt-26 pb-5 sm:pt-28 sm:pb-6 lg:px-8 lg:pt-32 lg:pb-6">
        {/* Top Editorial Label */}
        <div className="border-b border-[#D8D6CF] pb-3 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#66645F] dark:text-[#A5A39C]">
            Portfolio / 2026
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid items-center gap-7 py-6 sm:py-7 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10 xl:gap-14">
          {/* Left Column: Typography & Info */}
          <div className="max-w-2xl lg:max-w-none">
            {/* Hero Name: Single line on desktop, natural wrap on mobile/tablet */}
            <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-[-0.035em] text-[#111111] dark:text-[#F5F3ED] sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] 2xl:text-[5.25rem]">
              <span className="inline-block">PRAKHAR</span>{' '}
              <span className="inline-block">UPADHYAY</span>
            </h1>

            <div className="mt-4 max-w-xl sm:mt-5">
              <p className="text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C] sm:text-lg">
                A Computer Science student and full-stack developer focused on
                building clean, modern and purposeful web experiences.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-7 sm:gap-6">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 bg-[#111111] px-5 py-2.5 text-sm font-medium text-[#F7F6F2] transition-colors duration-200 hover:bg-[#33322E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:bg-[#F5F3ED] dark:text-[#11110F] dark:hover:bg-[#E5E3DC] dark:focus-visible:ring-[#F5F3ED]"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/Prakhar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 border-b border-[#111111] pb-1 text-sm font-medium text-[#111111] transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:border-[#F5F3ED] dark:text-[#F5F3ED] dark:focus-visible:ring-[#F5F3ED]"
              >
                <span>View Resume</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Portrait & Metadata */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex flex-col items-center">
              {/* Circular portrait container */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-68 lg:w-68">
                <img
                  src="/images/profile.jpeg"
                  alt="Prakhar Upadhyay - Full-Stack Developer"
                  loading="eager"
                  className="h-full w-full object-cover object-[52%_35%] scale-[1.95]"
                />
              </div>

              {/* Compact Metadata underneath: Only FULL-STACK DEVELOPER */}
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-[#66645F] dark:text-[#A5A39C] text-center">
                FULL-STACK DEVELOPER
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-1 border-t border-[#D8D6CF] pt-3 dark:border-[#33322E]">
          <a
            href="#about"
            className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#66645F] transition-colors hover:text-[#111111] dark:text-[#A5A39C] dark:hover:text-[#F5F3ED]"
          >
            <span>Scroll to explore</span>
            <ArrowDownRight
              size={14}
              strokeWidth={1.8}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero