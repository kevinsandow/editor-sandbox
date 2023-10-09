import { z } from 'zod'

import { procedure } from '../trpc'
import contentModel from '../model/content'

export default procedure
  .input(z.object({
    content: z.string()
  }))
  .query(({input}) => {
    contentModel.updateContent(input.content)
  })
