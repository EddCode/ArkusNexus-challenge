import Table from '@/shared/components/Table'
import CreateUserModal from '../../create/ui'
import useGetUser from '../model/hook/useGetUser'

import columns from '../model/table'
import { Actions, Container } from './Users.styles'

function UserTable () {
  const { users } = useGetUser()

  return (
    <Container>
      <Actions>
        <div>
          <CreateUserModal />
        </div>
      </Actions>
      <Table columns={columns} data={users.data}/>
    </Container>
  )
}

export default UserTable
