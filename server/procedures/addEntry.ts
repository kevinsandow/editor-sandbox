import { procedure } from '../trpc'
import contentModel from '../model/DataModel'
import entryValidator from '../validators/entryValidator'

export default procedure
  .input(entryValidator.omit({ id: true }))
  .mutation(({ input }) => {
    contentModel.addEntry(input.title, input.content)
  })
