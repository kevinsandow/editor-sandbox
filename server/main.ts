import { createHTTPServer } from '@trpc/server/adapters/standalone'

import { appRouter } from './router'

const PORT = 3000

const server = createHTTPServer({
  // createContext,
  router: appRouter,
  batching: {
    enabled: false,
  },
})

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)
