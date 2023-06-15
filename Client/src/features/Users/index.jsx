import Table from '../../shared/components/Table'
import Button from '../../widgets/Button'

import columns from './model/table'
import { Actions, Container } from './Users.styles'

const users = [
  {
    id: 2,
    name: 'Jane Doe',
    email: 'sample@sample.com',
    role: 'user'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'sample@sample.com',
    role: 'user'
  }
]

function UserTable () {
  return (
    <Container>
      <Actions>
        <div>
          <Button>Create User</Button>
        </div>
      </Actions>
      <Table columns={columns} data={users}/>
    </Container>
  )
}

export default UserTable
