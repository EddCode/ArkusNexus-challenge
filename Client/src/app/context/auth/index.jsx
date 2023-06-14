import { createContext, useState, useEffect, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from '../../../shared/hooks/useLocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const { setValue, getValue, removeValue } = useLocalStorage()

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(getValue('user'))
    }
  }, [])

  const login = (user) => {
    const storageUser = { email: user.email, token: user.token, role: user.role, name: user.name }
    setUser(storageUser)
    setValue('user', storageUser)
    window.location = '/'
  }

  const logout = () => {
    setUser(null)
    removeValue('user')
    window.location = '/login'
  }

  const contextValue = useMemo(_ => ({ user, login, logout }), [user])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvider
