import useLocalStorage from '../../hooks/useLocalStorage'

function withUser (Component) {
  const WithUser = _ => {
    const { getValue } = useLocalStorage()

    return (
      <Component user={getValue('user')}/>
    )
  }
  return WithUser
}

export default withUser
