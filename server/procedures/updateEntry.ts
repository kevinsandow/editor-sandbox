import { procedure } from '../trpc'
import contentModel from '../model/DataModel'
import entryValidator from '../validators/entryValidator'

export default procedure.input(entryValidator).mutation(({ input }) => {
  contentModel.updateEntry(input.id, input.title, input.content)
})
