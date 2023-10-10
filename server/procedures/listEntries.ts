import { z } from 'zod'

import { procedure } from '../trpc'
import dataModel from '../model/DataModel'
import entryValidator from '../validators/entryValidator'

export default procedure
  .output(z.array(entryValidator))
  .query(() => dataModel.getAll())
