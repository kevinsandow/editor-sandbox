import { api } from './api'
import {Alert, LinearProgress, Typography} from "@mui/material"

function App() {
  const { data, isLoading, error } = api.getContent.useQuery()

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return <Alert color='error'>{error.message}</Alert>
  }

  return (
    <>
      <Typography variant='h1'>Content</Typography>
      <div>
        {data.content}
      </div>
    </>
  )
}

export default App
