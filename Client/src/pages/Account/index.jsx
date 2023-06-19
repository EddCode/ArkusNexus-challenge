import { useParams } from 'react-router-dom'
import AccountProvider from '@/app/context/accounts'

import Accounts, { Details } from '@/features/Account'
import AccountWrapper from './Account.styles'

function Account () {
  const { id } = useParams()

  if (id) return (<Details id={id} />)

  return (
    <AccountWrapper>
      <AccountProvider>
        <Accounts />
      </AccountProvider>
    </AccountWrapper>
  )
}

export default Account
