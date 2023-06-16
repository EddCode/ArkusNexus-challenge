import Accounts from "../../../infra/db/collections/accounts"
import { AccountEntity, AccountRepository } from "../../domain/AccountRepository"

function MongoRepository (): AccountRepository {
  const create = async (account: any): Promise<void> => {
    try {
      const AccountData = new Accounts({
        _id: account.id,
        accountName: account.name,
        clientName: account.client,
        responsabilityCenter: account.responsable,
        teamsQuery: ''
      })
      console.log({ AccountData })
      await AccountData.save()
    } catch (error: any) {
      return Promise.reject(error.message)
    }
    
  }

  const getById = async (id: string): Promise<AccountEntity | null> => {
    const result = await Accounts.findOne({ _id: id })
    return {
      id: result?._id,
      name: result?.accountName,
      client: result?.clientName,
      responsable: result?.responsabilityCenter
    }
  }

  const getAll = async (): Promise<AccountEntity[]> => {
    const result = await Accounts.find()
    return result.map(account => ({
      id: account._id,
      name: account.accountName,
      client: account.clientName,
      responsable: account.responsabilityCenter
    }))
  }

  const update = async (id: string, user: any): Promise<void> => {
    await Accounts.updateOne({ _id: id }, user)
  }

  const remove = async (id: string): Promise<any> => {
    const deletedUser = await Accounts.deleteOne({ _id: id })
    return deletedUser
  }

  return {
    create,
    getById,
    getAll,
    update,
    remove
  }
}

export default MongoRepository
