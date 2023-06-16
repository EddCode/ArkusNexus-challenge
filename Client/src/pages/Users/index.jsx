import UserTable from '@/features/Users/list'
import useLocalStorage from '@/shared/hooks/useLocalStorage'
import UserDetails from '@/features/Users/details/ui'

function User () {
  const user = useLocalStorage().getValue('user')

  if (user.role === 'user') {
    return <UserDetails id={user.id}/>
  }

  return <UserTable />
}

export default User
