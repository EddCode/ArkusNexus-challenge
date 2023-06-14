import { VscSignOut } from 'react-icons/vsc'
import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from './Sidebar.styles'
import { AiOutlineUsergroupDelete, AiOutlineBank } from 'react-icons/ai'

import arkusLogo from '../../../public/arkus.svg'
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
              <AiOutlineUsergroupDelete size={30}/>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link to="/accounts">
              <AiOutlineBank size={30} />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarFooter onClick={logout}>
        <VscSignOut size={35} />
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
