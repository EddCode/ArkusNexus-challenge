import { useAuth } from '@/app/context/auth'

function withUser (Component) {
  const WithUser = _ => {
    const { user } = useAuth()

    return (
      <Component token={user.token}/>
    )
  }
  return WithUser
}

export default withUser
