import { createBrowserRouter } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'

import LoginPage from '../pages/Login'
<<<<<<< HEAD
=======
import ProtectedLayout from './layouts/ProtectedLayout'
>>>>>>> 7c3aff0 (features)

const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
<<<<<<< HEAD
        path: '/',
        element: <LoginPage />
      }
    ]
=======
        path: '/login',
        element: <LoginPage />
      }
    ]
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <h1>dashboard</h1>
      },
      {
        path: '/users',
        element: <h1>users</h1>
      },
      {
        path: '/accounts',
        element: <h1>accounts</h1>
      }
    ]
>>>>>>> 7c3aff0 (features)
  }
])

export default appRouter
