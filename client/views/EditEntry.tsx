import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { FormEvent, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../api'
import EntryForm from '../forms/EntryForm'

export default function EditEntry() {
  const { id } = useParams()
  const navigate = useNavigate()
  const apiCtx = api.useContext()

  const { data, isLoading, error } = api.getEntry.useQuery(id!, {
    enabled: typeof id === 'string',
  })
  const { mutate } = api.updateEntry.useMutation({
    onSuccess: async () => {
      await Promise.all([apiCtx.listEntries.invalidate()])

      navigate('/')
    },
  })

  const handleClose = useCallback(() => navigate('/'), [navigate])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)

      mutate({
        id: id!,
        title: formData.get('title')?.toString() ?? '',
        content: formData.get('content')?.toString() ?? '',
      })
    },
    [mutate, id],
  )

  return (
    <Dialog open={!isLoading && !error} onClose={handleClose} fullWidth>
      <DialogTitle>Edit Entry</DialogTitle>
      <DialogContent>
        <EntryForm
          id="edit-entry"
          onSubmit={handleSubmit}
          title={data?.title}
          content={data?.content}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="edit-entry">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
