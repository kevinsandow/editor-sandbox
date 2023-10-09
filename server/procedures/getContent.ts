import { z } from 'zod'

import { procedure } from '../trpc'
import contentModel from '../model/content'

export default procedure
  .output(z.object({
    content: z.string()
  }))
  .query(() => {
    return {
      content: contentModel.getContent()
    }
  })
