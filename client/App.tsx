import { api } from './api'
import {Alert, LinearProgress} from "@mui/material"

function App() {
  const { data, isLoading, error } = api.getContent.useQuery()

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return <Alert>{error.message}</Alert>
  }

  return (
    <>
      <h1>Content</h1>
      <div>
        {data.content}
      </div>
    </>
  )
}

export default App
