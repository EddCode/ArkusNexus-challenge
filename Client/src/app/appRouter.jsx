import { createBrowserRouter } from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'

import LoginPage from '../pages/Login'
import ProtectedLayout from './layouts/ProtectedLayout'
import Accounts from '@/pages/Account'
import Dashboard from '@/pages/Dashboard'
import Users from '@/pages/Users'

const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
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
        element: <Dashboard />
      },
      {
        path: '/users/:id?',
        element: <Users />
      },
      {
        path: '/accounts',
        element: <Accounts />
      }
    ]
  }
])

export default appRouter
