import { useQuery } from '@tanstack/react-query'
import Table from '@/shared/components/Table'

import { Container, Actions } from './Accounts.styles'
import columns from '../model/table'
import useGetAll from '../model/hooks/getAll'
import { useEffect } from 'react'
import { useAccountCtx } from '@/app/context/accounts'

function Accounts () {
  const { account, setAccount } = useAccountCtx()
  const getAccounts = useGetAll()
  const { data } = useQuery(['accounts'], getAccounts)

  useEffect(() => {
    data && setAccount(data)
  }, [data])

  return (
    <Container>
      <Actions>
        <div>
            hello
        </div>
      </Actions>
      <Table columns={columns} data={account}/>
    </Container>

  )
}

export default Accounts
