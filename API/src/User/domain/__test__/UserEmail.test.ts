import UserEmail from '../UserEmail'

describe('UserId', () => {
  test('Should create a UserId object with correct properties', () => {
  })

  test('Should throw if not provided email', () => {
    let error: any;

    try {
     new UserEmail('') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Email is required')
  })

  test('Should throw if provided invalid email', () => {
    let error: any;

    try {
     new UserEmail('invalid_email') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Invalid email')
  })

  test('Should return a valid email', () => {
    const email = 'johndoe@arkusnexus.com'
    const userEmail = new UserEmail(email)

    expect(userEmail.value).toBe(email)
  })
})
