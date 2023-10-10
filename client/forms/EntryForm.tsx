import { Stack, TextField } from '@mui/material'
import { FormEvent } from 'react'

export default function EntryForm({
  id,
  onSubmit,
  title = '',
  content = '',
}: {
  id: string
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  title?: string
  content?: string
}) {
  return (
    <form id={id} onSubmit={onSubmit}>
      <Stack mt={2} gap={2}>
        <TextField defaultValue={title} label="Title" name="title" />
        <TextField
          defaultValue={content}
          multiline
          rows={20}
          label="Content"
          name="content"
        />
      </Stack>
    </form>
  )
}
