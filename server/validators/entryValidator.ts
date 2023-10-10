import z from 'zod'

export default z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
})
