import { z } from 'zod'

import { procedure } from '../trpc'
import dataModel from '../model/DataModel'

export default procedure
  .input(z.string())
  .mutation(({ input }) => dataModel.deleteEntry(input))
