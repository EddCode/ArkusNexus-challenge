import Users from "../../../infra/db/collections/Users"
import { UserEntity, UserRepository } from "../../domain/UserRepository"

function MongoRepository (): UserRepository {
  const create = async (user: any): Promise<void> => {
    const userData = new Users({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password,
    })
    await userData.save()
  }

  const findByEmail = async (email: string): Promise<UserEntity | null>  => {
    const result = await Users.findOne({ email }) as UserEntity
    return result
  }

  const getById = async (id: string): Promise<UserEntity | null> => {
    const result = await Users.findOne({ _id: id }) as UserEntity
    return result
  }

  const update = async (id: string, user: any): Promise<void> => {
    await Users.updateOne({ _id: id }, user)
  }

  const remove = async (id: string): Promise<any> => {
    const deletedUser = await Users.deleteOne({ _id: id })
    return deletedUser
  }

  return {
    findByEmail,
    create,
    getById,
    update,
    remove
  }
}

export default MongoRepository
