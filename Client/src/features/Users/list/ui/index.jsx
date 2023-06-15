import Table from '@/shared/components/Table'
import Button from '@/widgets/Button'
import useGetUser from '../model/hook/useGetUser'

import columns from '../model/table'
import { Actions, Container } from './Users.styles'

function UserTable () {
  const {users} = useGetUser()

  return (
    <Container>
      <Actions>
        <div>
          <Button>Create User</Button>
        </div>
      </Actions>
      <Table columns={columns} data={users.data}/>
    </Container>
  )
}

export default UserTable
