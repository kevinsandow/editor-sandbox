import { z } from 'zod'

import { procedure } from '../trpc'
import dataModel from '../model/DataModel'
import entryValidator from '../validators/entryValidator'

export default procedure
  .input(z.string())
  .output(entryValidator)
  .query(({ input }) => dataModel.getEntry(input))
