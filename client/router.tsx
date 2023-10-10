import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import List from './views/List'
import AddEntry from './views/AddEntry'
import DeleteEntry from './views/DeleteEntry'
import EditEntry from './views/EditEntry'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <List />,
        children: [
          { path: 'entries/add', element: <AddEntry /> },
          { path: 'entries/:id/delete', element: <DeleteEntry /> },
          { path: 'entries/:id/edit', element: <EditEntry /> },
        ],
      },
    ],
  },
])

export default router
