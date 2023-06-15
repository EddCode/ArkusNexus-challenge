import UserTable from '@/features/Users/list'
import { useAuth } from '@/app/context/auth'
import UserDetails from '@/features/Users/details/ui'

function User () {
  const { user } = useAuth()

  if (user.role === 'user') {
    return <UserDetails user={user}/>
  }

  return <UserTable />
}

export default User
