/* global process */
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    })
  }

  // Parse request body if necessary
  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON payload.',
      })
    }
  }

  if (!body || typeof body !== 'object') {
    return res.status(400).json({
      success: false,
      message: 'Request body must be a JSON object.',
    })
  }

  const { name, email, message, website } = body

  // Anti-spam honeypot check: website field must be empty
  if (website) {
    return res.status(400).json({
      success: false,
      message: 'Spam submission detected.',
    })
  }

  // Server-side validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    })
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Please enter a message.',
    })
  }

  // Read SMTP settings from environment variables only
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } =
    process.env

  // Check if required environment variables are configured
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
    console.error(
      'Missing required SMTP configuration. Verify SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL.'
    )
    return res.status(500).json({
      success: false,
      message:
        'Server email configuration is missing. Please contact via direct email.',
    })
  }

  const cleanName = name.trim()
  const cleanEmail = email.trim()
  const cleanMessage = message.trim()

  const port = parseInt(SMTP_PORT || '587', 10)
  const isSecure = port === 465

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: port,
    secure: isSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  // Basic HTML entity encoding for email body
  const sanitize = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

  const mailOptions = {
    from: `Portfolio Contact <${SMTP_USER}>`,
    to: CONTACT_EMAIL,
    replyTo: cleanEmail,
    subject: `Portfolio Contact — ${cleanName}`,
    text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111111; line-height: 1.6;">
        <h2 style="margin-top: 0; font-size: 20px; border-bottom: 1px solid #D8D6CF; padding-bottom: 12px;">New Portfolio Contact Message</h2>
        <p style="margin: 12px 0;"><strong>Name:</strong> ${sanitize(cleanName)}</p>
        <p style="margin: 12px 0;"><strong>Email:</strong> <a href="mailto:${sanitize(cleanEmail)}">${sanitize(cleanEmail)}</a></p>
        <div style="margin-top: 20px; padding: 16px; background-color: #F7F6F2; border: 1px solid #D8D6CF; border-radius: 6px;">
          <strong style="display: block; margin-bottom: 8px;">Message:</strong>
          <p style="white-space: pre-wrap; margin: 0;">${sanitize(cleanMessage)}</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    })
  } catch (error) {
    console.error('Nodemailer send error:', error?.message || 'Failed to send')
    return res.status(500).json({
      success: false,
      message: 'Unable to send message. Please try again later or reach out via direct email.',
    })
  }
}
