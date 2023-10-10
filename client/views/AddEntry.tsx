import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { FormEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../api'
import EntryForm from '../forms/EntryForm'

export default function AddEntry() {
  const navigate = useNavigate()
  const apiCtx = api.useContext()

  const { mutate } = api.addEntry.useMutation({
    onSuccess: async () => {
      await apiCtx.listEntries.invalidate()

      navigate('/')
    },
  })

  const handleClose = useCallback(() => navigate('/'), [navigate])

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)

      mutate({
        title: formData.get('title')?.toString() ?? '',
        content: formData.get('content')?.toString() ?? '',
      })
    },
    [mutate],
  )

  return (
    <Dialog open={true} onClose={handleClose} fullWidth>
      <DialogTitle>Add Entry</DialogTitle>
      <DialogContent>
        <EntryForm id="add-entry" onSubmit={handleSubmit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="add-entry">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}
