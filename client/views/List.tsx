import {
  Alert,
  Box,
  Button,
  Container,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import { Fragment } from 'react'
import { Outlet, Link as RouterLink } from 'react-router-dom'

import { api } from '../api'

export default function List() {
  const { data, isLoading, error } = api.listEntries.useQuery()

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return <Alert color="error">{error.message}</Alert>
  }

  return (
    <>
      <Stack gap={2}>
        {data.map((entry) => (
          <Paper key={entry.id}>
            <Container component="section">
              <Stack gap={2} mt={2} mb={2}>
                <Stack
                  flexDirection="row"
                  gap={1}
                  justifyContent="space-between"
                >
                  <Typography sx={{ flex: '1' }} variant="h4" component="h2">
                    {entry.title}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={`/entries/${entry.id}/delete`}
                    color="error"
                  >
                    Delete
                  </Button>
                  <Button
                    component={RouterLink}
                    to={`/entries/${entry.id}/edit`}
                  >
                    Edit
                  </Button>
                </Stack>
                <Box>
                  {entry.content.split('\n').map((line, idx) => (
                    <Fragment key={idx}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </Box>
              </Stack>
            </Container>
          </Paper>
        ))}
      </Stack>
      <Outlet />
    </>
  )
}
