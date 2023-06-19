import { AccountEntity, AccountMember } from './AccountRepository'
import AccountClient from './AccountClient'
import AccountId from './AccountId'
import AccountName from './AccountName'
import AccountResponable from './AccountResponsable'

export type AccountEntityAccions = {
  build: () => AccountEntity,
  withId: (id: string) => AccountEntityAccions,
  withName: (name: string) => AccountEntityAccions
  withClient: (clinet: string) => AccountEntityAccions
  withResponsable: (responsable: string) => AccountEntityAccions
  withAccountMember: (accountMember: Array<AccountMember>) => AccountEntityAccions
}

export default function Account(): AccountEntityAccions {
  const account: AccountEntity = {}

  return {
    withId: function(id: string): AccountEntityAccions {
      account.id = new AccountId(id).id
      return this
    },
    withName: function(name: string): AccountEntityAccions {
      account.name = new AccountName(name).name
      return this
    },
    withClient: function(name: string): AccountEntityAccions {
      account.client = new AccountClient(name).client
      return this
    },
    withResponsable: function(name: string): AccountEntityAccions {
      account.responsable = new AccountResponable(name).responsable
      return this
    },
    withAccountMember: function(accountMember: Array<AccountMember>): AccountEntityAccions {
      account.accountMember = accountMember
      return this
    },
    build: (): AccountEntity => (account)
  }
}
