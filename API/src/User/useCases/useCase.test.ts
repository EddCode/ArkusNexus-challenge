import UserUseCase from "."
import { UserRepository } from "../domain/UserRepository"

jest.mock('../../shared/infraestructure/bcrypt', () => ({
  compare: jest.fn().mockResolvedValue(true),
  hashString: jest.fn().mockResolvedValue(true)
}))

describe('User use case', () => {
  let repository: UserRepository
  let userUseCase: any

  beforeAll(() => {
    userUseCase = UserUseCase(repository)
  })

  beforeEach(() => {
    repository = {
      findByEmail: jest.fn().mockReturnValue({ email: 'superadmin@arkusnexus.com' }),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      getById: jest.fn().mockReturnValue({ id: 'uuid', email: 'admin@arkusnexus.com', name: 'admin', role: 'admin' })
    }
  })

  test('Should implement user repository interface', () => {
    expect(userUseCase).toHaveProperty('create')
    expect(userUseCase).toHaveProperty('update')
    expect(userUseCase).toHaveProperty('deleteById')
    expect(userUseCase).toHaveProperty('getById')
  })

  test('Should login a user', async () => {
    const user = await userUseCase.login('superadmin@arkusnexus.com', '123456')

    expect(user).toHaveProperty('token')
    expect(user.email).toBe('superadmin@arkusnexus.com')
  })

  test('Should create a user', async () => {
    repository.findByEmail = jest.fn().mockReturnValue(null)
    const userInfo = {
      email: 'jhone_doe@arkusnexus.com',
      password: 'Any_password@123',
      name: 'Jhone Doe',
      role: 'admin',
    }

    const user = await userUseCase.create(userInfo)

    expect(repository.create).toHaveBeenCalled()
    expect(user).toHaveProperty('id')
  })

  test('Should get a user by id', async () => {
    const user = await userUseCase.getById('uudi')

    expect(repository.getById).toHaveBeenCalled()
    expect(user).toMatchObject({ id: 'uuid', email: 'admin@arkusnexus.com', name: 'admin', role: 'admin' })
  })
})
