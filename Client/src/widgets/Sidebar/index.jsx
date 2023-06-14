import { VscSignOut } from 'react-icons/vsc'
import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from './Sidebar.styles'
import { AiOutlineUsergroupDelete, AiOutlineBank } from 'react-icons/ai'

import arkusLogo from '../../app/assets/arkus.svg'
import { useAuth } from '../../app/context/auth'
import { Link } from 'react-router-dom'

function Sidebar () {
  const { logout } = useAuth()

  return (
    <SidebarContainer>
      <SidebarHeader>
        <img src={arkusLogo} alt="arkus logo" srcSet=""/>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to="/users">
              <AiOutlineUsergroupDelete size={24}/>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/accounts">
              <AiOutlineBank size={24} />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarFooter onClick={logout}>
        <VscSignOut size={24} />
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
