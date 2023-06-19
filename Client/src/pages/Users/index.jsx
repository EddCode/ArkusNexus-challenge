import { useParams } from 'react-router-dom'

import UserTable from '@/features/Users/list'
import UserDetails from '@/features/Users/details/ui'
import { useAuth } from '@/app/context/auth'
import UserProvider from '@/app/context/user'

function User () {
  const { id } = useParams()
  const { user } = useAuth()

  if (user.role === 'user' || id) {
    return <UserDetails id={ id || user.id}/>
  }

  return (
    <UserProvider>
      <UserTable />
    </UserProvider>
  )
}

export default User
