import { AccountEntity, AccountMember, AccountRepository } from '../domain/AccountRepository'
import Account from '../domain/AccountEntity'
import generateUuid from '../../shared/infraestructure/uuid/generate'

function UserUseCase(repository: AccountRepository) {
  
  const create = async (accountInfo: { name: string, client: string, responsable: string, accountMembers?: Array<AccountMember> }): Promise<AccountEntity> => {
    const account = Account()
                    .withId(generateUuid())
                    .withName(accountInfo.name)
                    .withClient(accountInfo.client)
                    .withResponsable(accountInfo.responsable)

    if(accountInfo.accountMembers) {
      account.withAccountMember(accountInfo.accountMembers)
    }
    
    const accountCreated = account.build()

    await repository.create({ ...accountCreated })
    return accountCreated
  }

  const getAll = async (): Promise<AccountEntity[] > => {
    try {
      const accounts = await repository.getAll()

      return accounts.map(account => ({
        id: account.id,
        name: account.name,
        client: account.client,
        responsable: account.responsable,
        accountMember: account.accountMember
      }))
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const getById = async (id: string): Promise<AccountEntity| null> => {
    try {
      const account = await repository.getById(id)
      if (!account) throw new Error('Account not found')

      return {
        id: account.id,
        name: account.name,
        client: account.client,
        responsable: account.responsable,
        accountMember: account.accountMember
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const update = async (id: string, payload: any ): Promise<Object> => {
    try {
      const account = await repository.getById(id)
      if (!account) throw new Error('Account not found')

      const accountData = {}

      payload.name && (accountData['name'] = payload.name)
      payload.client && (accountData['client'] = payload.client)
      payload.responsable && (accountData['responsable'] = payload.responsable)
      payload.accountMembers && (accountData['teamsQuery'] = payload.accountMembers)

      await repository.update(id, accountData)

      return { ...payload }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const deleteById = async (id: string): Promise<void> => {
    try {
      const user = await repository.getById(id)
      if (!user) throw new Error('User not found')

      return await repository.remove(id)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  return {
    create,
    getById,
    getAll,
    update,
    deleteById
  }
}

export default UserUseCase
