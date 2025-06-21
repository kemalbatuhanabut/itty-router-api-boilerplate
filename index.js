import { Router } from 'itty-router'

// Create router instance
const router = Router()

// Example GET endpoint
router.get('/api/hello', () => {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    headers: { 'Content-Type': 'application/json' },
  })
})

// Example dynamic route
router.get('/api/greet/:name', ({ params }) => {
  return new Response(JSON.stringify({ greeting: `Hello, ${params.name}!` }), {
    headers: { 'Content-Type': 'application/json' },
  })
})

// 404 handler
router.all('*', () => new Response('Not Found', { status: 404 }))

// Serve with Node's http server
import http from 'http'

const server = http.createServer((req, res) => {
  const url = req.url || '/'
  const method = req.method || 'GET'

  router
    .handle({ url, method, headers: req.headers })
    .then(response => {
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()))
      response.body?.pipe?.(res) || res.end(response.body || '')
    })
    .catch(err => {
      console.error(err)
      res.writeHead(500)
      res.end('Internal Server Error')
    })
})

const PORT = process.env.PORT || 8787
server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})
