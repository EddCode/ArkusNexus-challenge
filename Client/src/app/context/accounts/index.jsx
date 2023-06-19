import PropTypes from 'prop-types'
import { createContext, useContext, useState } from 'react'

const AccountsContext = createContext()

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState([])

  return (
    <AccountsContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountsContext.Provider>
  )
}

AccountProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useAccountCtx = _ => useContext(AccountsContext)

export default AccountProvider
