import UserEntity from '../UserEntity'

describe('UserEntity',  () => {
  const user = {
    id: '445bb585-daee-4589-89ac-4ca63f68486a',
    name: 'jhon doe',
    email: 'jhon_doel@mail.com',
    password: 'Any_password@123',
    role: 'admin'
  }

  test('Shoud create a user object with correct properties', () => {
    
    const newUser = UserEntity(user).build()

    expect(newUser).toHaveProperty('id')
    expect(newUser).toHaveProperty('name')
    expect(newUser).toHaveProperty('email')
    expect(newUser).toHaveProperty('password')
  })

  test('Shoud update email', () => {
    const newEmail = 'jhon_doe@arkusnexus.com'
    const newUser = UserEntity(user)
    newUser.updateEmail(newEmail)

    expect(newUser.build().email).toBe(newEmail)
  })

  test('Shoud update email', () => {
    const password = 'SomeOtherPassword@123'
    const newUser = UserEntity(user)
    newUser.updatePassword(password)

    expect(newUser.build().password).toBe(password)
  })
})
