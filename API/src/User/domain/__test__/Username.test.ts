import Username from '../Username'

describe('UserId', () => {
  test('Should create a UserId object with correct properties', () => {
  })

  test('Should throw if not provided password', () => {
    let error: any;

    try {
     new Username('') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Name is required')
  })

  test('Should throw if provided invalid password', () => {
    let error: any;

    try {
     new Username('123') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Invalid name')
  })

  test('Should return a valid Full name', () => {
    const fullname = 'john doe'
    const userFullName  = new Username(fullname)

    expect(userFullName.value).toBe(fullname)
  })
})
