import getContent from './procedures/getContent'
import updateContent from './procedures/updateContent'
import { router } from './trpc'

export const appRouter = router({
  getContent,
  updateContent,
})

export type AppRouter = typeof appRouter
