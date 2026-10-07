import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'prakharupadhyay407@gmail.com'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (error) setError('')
    if (success) setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!trimmedName) {
      setError('Please enter your name.')
      return
    }

    if (!trimmedEmail) {
      setError('Please enter your email address.')
      return
    }

    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!trimmedMessage) {
      setError('Please enter your message.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website: formData.website,
        }),
      })

      const data = await response.json().catch(() => null)

      if (response.ok && data?.success) {
        setSuccess('Message sent successfully.')
        setFormData({
          name: '',
          email: '',
          message: '',
          website: '',
        })
      } else {
        setError(data?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 bg-[#F7F6F2] px-6 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-28 lg:pb-16 text-[#111111] transition-colors duration-200 dark:bg-[#11110F] dark:text-[#F5F3ED]"
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

        {/* Main Content Layout */}
        <div className="grid items-start gap-8 pt-6 sm:pt-7 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Direct Email, Social Links */}
          <div className="flex flex-col space-y-6 sm:space-y-7 lg:col-span-5">
            <div>
              <h2 className="text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl lg:text-[34px] text-[#111111] dark:text-[#F5F3ED]">
                Let's build something meaningful.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#55534E] dark:text-[#A5A39C]">
                I'm open to opportunities, collaborations and interesting web
                development projects. Feel free to reach out directly via email,
                connect through social platforms, or send me a message through
                the form.
              </p>

              {/* Direct Email Action */}
              <div className="mt-5 border-t border-[#D8D6CF] pt-4 dark:border-[#33322E]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                  Direct Inquiries
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-lg font-medium tracking-tight text-[#111111] underline decoration-[#D8D6CF] underline-offset-8 transition-colors hover:decoration-[#111111] dark:text-[#F5F3ED] dark:decoration-[#33322E] dark:hover:decoration-[#F5F3ED] sm:text-xl break-all"
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

            {/* Social Links */}
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
                    className="group flex items-center justify-between border-b border-[#D8D6CF] py-2.5 transition-colors hover:bg-[#EFECE6]/30 dark:border-[#33322E] dark:hover:bg-[#171613]"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center border border-[#D8D6CF] bg-[#EFECE6]/50 text-[#111111] transition-colors group-hover:border-[#111111] dark:border-[#33322E] dark:bg-[#1A1916] dark:text-[#F5F3ED] dark:group-hover:border-[#F5F3ED]">
                        <Icon size={15} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#111111] dark:text-[#F5F3ED]">
                          {link.name}
                        </p>
                        <p className="text-xs text-[#88857E] dark:text-[#706E66]">
                          {link.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#88857E] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#111111] dark:text-[#706E66] dark:group-hover:text-[#F5F3ED]"
                    />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="border-t border-[#D8D6CF] pt-8 sm:pt-10 lg:col-span-7 lg:border-t-0 lg:pt-20 dark:border-[#33322E]">
            <div className="border-b border-[#D8D6CF] pb-2 dark:border-[#33322E]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#88857E] dark:text-[#706E66]">
                Send A Message
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-4 sm:mt-5 space-y-3.5 sm:space-y-4">
              {/* Honeypot field (hidden from view and screen readers) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-[#55534E] dark:text-[#A5A39C]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={loading}
                  className="mt-1.5 w-full rounded-[7px] border border-[#D8D6CF] bg-[#EFECE6]/30 px-3.5 py-2 text-sm text-[#111111] placeholder-[#88857E] transition-colors focus:border-[#111111] focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-[#111111] disabled:opacity-60 dark:border-[#33322E] dark:bg-[#1A1916]/50 dark:text-[#F5F3ED] dark:placeholder-[#706E66] dark:focus:border-[#F5F3ED] dark:focus:ring-[#F5F3ED]"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-[#55534E] dark:text-[#A5A39C]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                  className="mt-1.5 w-full rounded-[7px] border border-[#D8D6CF] bg-[#EFECE6]/30 px-3.5 py-2 text-sm text-[#111111] placeholder-[#88857E] transition-colors focus:border-[#111111] focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-[#111111] disabled:opacity-60 dark:border-[#33322E] dark:bg-[#1A1916]/50 dark:text-[#F5F3ED] dark:placeholder-[#706E66] dark:focus:border-[#F5F3ED] dark:focus:ring-[#F5F3ED]"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.15em] text-[#55534E] dark:text-[#A5A39C]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  disabled={loading}
                  className="mt-1.5 w-full resize-y rounded-[7px] border border-[#D8D6CF] bg-[#EFECE6]/30 px-3.5 py-2 text-sm text-[#111111] placeholder-[#88857E] transition-colors focus:border-[#111111] focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-[#111111] disabled:opacity-60 dark:border-[#33322E] dark:bg-[#1A1916]/50 dark:text-[#F5F3ED] dark:placeholder-[#706E66] dark:focus:border-[#F5F3ED] dark:focus:ring-[#F5F3ED]"
                />
              </div>

              {/* Feedback Alerts */}
              {success && (
                <div
                  role="status"
                  className="flex items-center gap-2 rounded-[7px] border border-emerald-600/30 bg-emerald-500/10 px-3.5 py-2.5 text-xs font-medium text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
                >
                  <Check size={14} className="shrink-0" />
                  <span>{success}</span>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="flex items-center gap-2 rounded-[7px] border border-rose-600/30 bg-rose-500/10 px-3.5 py-2.5 text-xs font-medium text-rose-800 dark:border-rose-400/30 dark:bg-rose-400/10 dark:text-rose-300"
                >
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-0.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-1.5 rounded-[7px] border border-[#111111] bg-[#111111] px-5 py-2.5 text-xs font-medium tracking-tight text-[#F7F6F2] transition-colors hover:bg-[#252420] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111111] disabled:cursor-not-allowed disabled:opacity-60 dark:border-[#F5F3ED] dark:bg-[#F5F3ED] dark:text-[#11110F] dark:hover:bg-[#E5E2DA] dark:focus-visible:ring-[#F5F3ED]"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowUpRight size={14} strokeWidth={1.8} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact