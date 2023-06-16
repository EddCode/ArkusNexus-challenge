import { VscSignOut } from 'react-icons/vsc'
import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from './Sidebar.styles'
import { AiOutlineUsergroupDelete, AiOutlineBank } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

import { useAuth } from '@/app/context/auth'
import arkusLogo from '@/app/assets/arkus.svg'

function Sidebar () {
  const { user, logout } = useAuth()
  const location = useLocation()

  const match = path => location.pathname.includes(path)

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Link to="/" className={match('/') ? 'active' : ''}>
          <img src={arkusLogo} alt="arkus logo" srcSet=""/>
        </Link>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to="/users" className={match('/users') ? 'active' : ''}>
              <AiOutlineUsergroupDelete size={24}/>
            </Link>
          </SidebarMenuItem>
          {user.role !== 'user' && (
            <SidebarMenuItem>
              <Link to="/accounts" className={match('/accounts') ? 'active' : ''}>
                <AiOutlineBank size={24} />
              </Link>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarFooter onClick={logout}>
        <VscSignOut size={24} />
      </SidebarFooter>
    </SidebarContainer>
  )
}

export default Sidebar
