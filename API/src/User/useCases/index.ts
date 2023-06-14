import { UserEntity, UserRepository } from '../domain/UserRepository'
import User from '../domain/UserEntity'
import generateUuid from '../../shared/infraestructure/uuid/generate'
import { compare, hashString } from '../../shared/infraestructure/bcrypt'
import signToken from '../../shared/infraestructure/jwt/sign'

interface UserWithToken {
  id: string;
  email: string;
<<<<<<< HEAD
=======
  name: string;
>>>>>>> 7c3aff0 (features)
  role: string;
  token: string;
}

type User = {
  id?: string;
  email?: string;
  password?: string;
  name?: string;
  resume?: string;
  englishLevel?: string;
  skills?: string;
  role?: string;
}

function UserUseCase(repository: UserRepository) {
  const login = async (email: string, password: string): Promise<UserWithToken> => {
    const user = await repository.findByEmail(email)
    if (!user) throw new Error('Unauthorized')

    const areEqual = await compare(password, user.password)
    if (!areEqual) throw new Error('Unauthorized')

    const token = signToken({email: user.email, role: user.role, id: user.id})

    return { 
      id: user.id, 
      email: user.email,
      role: user.role,
<<<<<<< HEAD
=======
      name: user.name,
>>>>>>> 7c3aff0 (features)
      token 
    }
  }
  
  const create = async (userInfo: { email: string, password: string, name: string, role: string}): Promise<UserEntity> => {
    const isUserExist = await repository.findByEmail(userInfo.email) as UserEntity
    if (isUserExist) throw new Error('User already exist')

    const user = User({ id: generateUuid(), ...userInfo }).build()
    const hashedPassword = await hashString(user.password)
    await repository.create({ ...user, password: hashedPassword })
    return user
  }

  const getById = async (id: string): Promise<User| null> => {
    try {
      const user = await repository.getById(id)
      if (!user) throw new Error('User not found')

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        resume: user.resume,
        englishLevel: user.englishLevel,
        skills: user.skills
      }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const updateByAdmin = async (id: string, userInfo: User): Promise<Object> => {
    try {
      const { resume, skills, englishLevel, password, email, name } = userInfo
      const hashPassword = password ? await hashString(password) : undefined

      if (!email && !name && !password) throw new Error('Missing fields')
      if (resume || skills || englishLevel) throw new Error('Unauthorized to update resume, skills and english level')

      const userUpdate: User = {}

      email && (userUpdate.email = email)
      name && (userUpdate.name = name)
      hashPassword && (userUpdate.password = hashPassword)

      await repository.update(id, userUpdate)

      return userUpdate
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const updateByUser = async (id: string, userInfo: User): Promise<Object> => {
    try {
      const { resume, skills, englishLevel, name, email } = userInfo

      if (email) throw new Error('You cannot update your email')
      const userUpdate: User = {}

      name && (userUpdate.name = name)
      resume && (userUpdate.resume = resume)
      skills && (userUpdate.skills = skills)
      englishLevel && (userUpdate.englishLevel = englishLevel)

      await repository.update(id, userUpdate)
      return userUpdate
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const update = async (id: string, role: string, payload: User): Promise<Object> => {
    try {
      const user = await repository.getById(id)
      if (!user) throw new Error('User not found')

      const newValues = role !== 'user' 
        ? await updateByAdmin(id, payload)
        : await updateByUser(id, payload)

      return {...newValues}
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
    login,
    create,
    getById,
    update,
    deleteById
  }
}

export default UserUseCase
