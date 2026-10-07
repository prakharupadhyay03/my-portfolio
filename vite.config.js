import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-api-contact-handler',
      configureServer(server) {
        server.middlewares.use('/api/contact', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405
            res.setHeader('Content-Type', 'application/json')
            return res.end(
              JSON.stringify({ success: false, message: 'Method Not Allowed' })
            )
          }

          let bodyBuffer = ''
          req.on('data', (chunk) => {
            bodyBuffer += chunk
          })

          req.on('end', async () => {
            try {
              req.body = bodyBuffer ? JSON.parse(bodyBuffer) : {}
            } catch {
              req.body = {}
            }

            res.status = (code) => {
              res.statusCode = code
              return res
            }

            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
            }

            try {
              const { default: handler } = await import('./api/contact.js')
              await handler(req, res)
            } catch (err) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  success: false,
                  message: err?.message || 'Internal server error',
                })
              )
            }
          })
        })
      },
    },
  ],
})