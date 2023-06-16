import { useParams } from 'react-router-dom'

import Accounts, { Details } from '@/features/Account'
import AccountWrapper from './Account.styles'

function Account () {
  const { id } = useParams()

  if (id) return (<Details id={id} />)

  return (
    <AccountWrapper>
      <Accounts />
    </AccountWrapper>
  )
}

export default Account
