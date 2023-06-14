import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import router from './appRouter'
import './styles/global.css'
<<<<<<< HEAD
=======
import AuthProvider from './context/auth'
>>>>>>> 7c3aff0 (features)

function App () {
  return (
    <QueryClientProvider client={new QueryClient()}>
<<<<<<< HEAD
      <RouterProvider router={router} />
=======
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
>>>>>>> 7c3aff0 (features)
    </QueryClientProvider>
  )
}

export default App
