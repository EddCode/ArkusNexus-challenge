import { useQuery } from '@tanstack/react-query'
import Table from '@/shared/components/Table'

import { Container, Actions } from './Accounts.styles'
import columns from '../model/table'
import useGetAll from '../model/hooks/getAll'

function Accounts () {
  const getAccounts = useGetAll()
  const { data } = useQuery(['accounts'], getAccounts)

  return (
    <Container>
      <Actions>
        <div>
            hello
        </div>
      </Actions>
      <Table columns={columns} data={data || []}/>
    </Container>

  )
}

export default Accounts
