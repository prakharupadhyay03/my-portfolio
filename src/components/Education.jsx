function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-28 bg-[#F7F6F2] px-6 py-10 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:py-11 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2.5 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            EDUCATION
          </p>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            04
          </span>
        </div>

        {/* Section Headline */}
        <div className="pt-3 pb-3 sm:pt-3.5 sm:pb-3.5">
          <h2
            id="education-heading"
            className="text-xl font-medium tracking-tight text-[#111111] dark:text-[#F5F3ED] sm:text-2xl"
          >
            Education
          </h2>
        </div>

        {/* Structured Editorial Entry */}
        <div className="border-t border-[#D8D6CF] dark:border-[#33322E]">
          <div className="grid gap-3 border-b border-[#D8D6CF] py-4 transition-colors duration-200 hover:bg-[#EFECE6]/20 dark:border-[#33322E] dark:hover:bg-[#171613] md:grid-cols-[150px_240px_1fr] md:items-start md:gap-5 lg:grid-cols-[170px_280px_1fr] lg:gap-6 sm:py-4.5">
            {/* Status / Category */}
            <div>
              <span className="inline-flex items-center gap-1.5 border border-[#111111] bg-[#111111] px-2.5 py-1 text-[11px] font-semibold tracking-wider text-[#F7F6F2] dark:border-[#F5F3ED] dark:bg-[#F5F3ED] dark:text-[#11110F]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600" />
                CURRENT
              </span>
              <p className="mt-1 text-xs text-[#88857E] dark:text-[#706E66]">
                Currently Pursuing
              </p>
            </div>

            {/* University & Degree */}
            <div>
              <h3 className="text-base font-semibold tracking-tight text-[#111111] dark:text-[#F5F3ED] sm:text-lg">
                Sandip University
              </h3>
              <p className="mt-0.5 text-sm font-medium text-[#66645F] dark:text-[#A5A39C]">
                B.Tech — Computer Science &amp; Engineering
              </p>
            </div>

            {/* Education Details: CGPA & Location */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#111111] dark:text-[#F5F3ED] sm:text-base">
                Current CGPA: 7.4 / 10
              </p>
              <p className="text-xs text-[#88857E] dark:text-[#706E66] sm:text-sm">
                Nashik, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
