import { useUserCtx } from '@/app/context/user'
import Table from '@/shared/components/Table'
import CreateUserModal from '../../create/ui'
import useGetUser from '../model/hook/useGetUser'

import columns from '../model/table'
import { Actions, Container } from './Users.styles'

function UserTable () {
  useGetUser()
  const { user } = useUserCtx()

  return (
    <Container>
      <Actions>
        <div>
          <CreateUserModal />
        </div>
      </Actions>
      <Table columns={columns} data={user}/>
    </Container>
  )
}

export default UserTable
