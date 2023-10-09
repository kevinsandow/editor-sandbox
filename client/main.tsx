import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient } from '@tanstack/react-query'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import App from './App.tsx'

import { api, apiClient } from './api'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <api.Provider queryClient={queryClient} client={apiClient}>
      <CssBaseline />
      <App />
    </api.Provider>
  </StrictMode>,
)
