import { AppBar, Box, Container, Link, Toolbar } from '@mui/material'
import { Link as RouterLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flex: 1 }} />
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            to="/"
            sx={{ fontSize: 24 }}
          >
            Editor Sandbox
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              component={RouterLink}
              variant="h6"
              underline="none"
              color="inherit"
              to="/entries/add"
              sx={{
                fontSize: 16,
                ml: 3,
                // color: 'secondary.main',
              }}
            >
              Add
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container component="main" sx={{ my: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default App
