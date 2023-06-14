import { VscAccount } from 'react-icons/vsc'
import { useAuth } from '@/app/context/auth'

import { ArkusTitleContainer, HeaderContainer, UserContainer } from './Header.styles'

function Header () {
  const { user } = useAuth()

  return (
    <HeaderContainer>
      <ArkusTitleContainer>
        <p>ArkusNexus</p>
      </ArkusTitleContainer>
      <UserContainer>
        <VscAccount size={30} />
        <span>{user?.name}</span>
      </UserContainer>
    </HeaderContainer>
  )
}

export default Header
