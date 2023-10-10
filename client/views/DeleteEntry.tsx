import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../api'

export default function DeleteEntry() {
  const { id } = useParams()
  const navigate = useNavigate()
  const apiCtx = api.useContext()

  const { data, isLoading, error } = api.getEntry.useQuery(id!, {
    enabled: typeof id === 'string',
  })
  const { mutate } = api.deleteEntry.useMutation({
    onSuccess: async () => {
      await Promise.all([apiCtx.listEntries.invalidate()])

      navigate('/')
    },
  })

  const handleClose = useCallback(() => navigate('/'), [navigate])

  const handleSubmit = useCallback(() => mutate(id!), [mutate, id])

  return (
    <Dialog open={!isLoading && !error} onClose={handleClose}>
      <DialogTitle>Confirm Entry Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to delete entry "{data?.title ?? '-'}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button color="error" onClick={handleSubmit}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
