import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'prakharupadhyay407@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      handle: 'github.com/prakharupadhyay03',
      url: 'https://github.com/prakharupadhyay03',
      icon: GithubIcon,
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/prakhar-upadhyay',
      url: 'https://www.linkedin.com/in/prakhar-upadhyay-6b8a2535b/',
      icon: LinkedinIcon,
    },
    {
      name: 'Email',
      handle: email,
      url: `mailto:${email}`,
      icon: Mail,
    },
  ]

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-[#F7F6F2] px-6 py-12 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED] sm:py-12 lg:px-8 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#D8D6CF] pb-2.5 dark:border-[#33322E]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#66645F] dark:text-[#A5A39C]">
            Contact
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
            06
          </span>
        </div>

        {/* Main Content */}
        <div className="grid gap-7 pt-5 sm:pt-6 lg:grid-cols-12 lg:gap-12">
          {/* Headline Column */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-[34px] text-[#111111] dark:text-[#F5F3ED]">
              Let's build something meaningful.
            </h2>
            <p className="mt-3.5 max-w-xl text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
              I'm open to opportunities, collaborations and interesting web
              development projects. Feel free to reach out directly via email or
              connect through social platforms.
            </p>

            {/* Direct Email Action */}
            <div className="mt-5 border-t border-[#D8D6CF] pt-4.5 dark:border-[#33322E]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                Direct Inquiries
              </p>
              <div className="mt-2.5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-lg font-medium tracking-tight text-[#111111] underline decoration-[#D8D6CF] underline-offset-8 transition-colors hover:decoration-[#111111] dark:text-[#F5F3ED] dark:decoration-[#33322E] dark:hover:decoration-[#F5F3ED] sm:text-xl"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 border border-[#D8D6CF] bg-[#EFECE6]/40 px-2.5 py-1 text-xs font-medium text-[#55534E] transition-colors hover:border-[#111111] hover:text-[#111111] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#A5A39C] dark:hover:border-[#F5F3ED] dark:hover:text-[#F5F3ED] dark:focus-visible:ring-[#F5F3ED]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600 dark:text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Social Connections Column */}
          <div className="lg:col-span-5">
            <div className="border-t border-[#D8D6CF] dark:border-[#33322E]">
              <div className="py-2 border-b border-[#D8D6CF] dark:border-[#33322E]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                  Available On
                </p>
              </div>

              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-[#D8D6CF] py-2.5 sm:py-3 transition-colors hover:bg-[#EFECE6]/30 dark:border-[#33322E] dark:hover:bg-[#171613]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 items-center justify-center border border-[#D8D6CF] bg-[#EFECE6]/50 text-[#111111] transition-colors group-hover:border-[#111111] dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#F5F3ED] dark:group-hover:border-[#F5F3ED]">
                        <Icon size={16} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-medium text-[#111111] dark:text-[#F5F3ED]">
                          {link.name}
                        </p>
                        <p className="text-xs text-[#88857E] dark:text-[#706E66]">
                          {link.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="text-[#88857E] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#111111] dark:text-[#706E66] dark:group-hover:text-[#F5F3ED]"
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact