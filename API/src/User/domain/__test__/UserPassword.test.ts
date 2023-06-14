import UserPassword from '../UserPassword'

describe('UserId', () => {
  test('Should create a UserId object with correct properties', () => {
  })

  test('Should throw if not provided password', () => {
    let error: any;

    try {
     new UserPassword('') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Password is required')
  })

  test('Should throw if provided invalid password', () => {
    let error: any;

    try {
     new UserPassword('123') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Invalid password')
  })

  test('Should return a valid password', () => {
    const password = 'Any_password@123'
    const userPassword = new UserPassword(password)

    expect(userPassword.value).toBe(password)
  })

  test('Should return true if password is equals', () => {
    const password = 'Any_password@123'
    const otherPassword = 'Any_password@123'

    const userPassword = new UserPassword(password)

    expect(userPassword.isEquals(otherPassword)).toBeTruthy()
  })
})
