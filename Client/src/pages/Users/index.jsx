import { useParams } from 'react-router-dom'

import UserTable from '@/features/Users/list'
import UserDetails from '@/features/Users/details/ui'
import { useAuth } from '@/app/context/auth'

function User () {
  const { id } = useParams()
  const { user } = useAuth()

  if (user.role === 'user' || id) {
    return <UserDetails id={ id || user.id}/>
  }

  return <UserTable />
}

export default User
