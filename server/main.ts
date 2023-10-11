import { createHTTPServer } from '@trpc/server/adapters/standalone'

import { appRouter } from './router'

const PORT = 5100

const server = createHTTPServer({
  router: appRouter,
  batching: {
    enabled: false,
  },
})

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
