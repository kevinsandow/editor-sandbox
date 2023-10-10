import addEntry from './procedures/addEntry'
import deleteEntry from './procedures/deleteEntry'
import getEntry from './procedures/getEntry'
import listEntries from './procedures/listEntries'
import updateEntry from './procedures/updateEntry'
import { router } from './trpc'

export const appRouter = router({
  addEntry,
  deleteEntry,
  getEntry,
  listEntries,
  updateEntry,
})

export type AppRouter = typeof appRouter
