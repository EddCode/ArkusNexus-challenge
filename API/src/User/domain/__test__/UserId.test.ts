import UserId from '../UserId'

describe('UserId', () => {
  test('Should create a UserId object with correct properties', () => {
  })

  test('Should throw if not provided id', () => {
    let error: any;

    try {
     new UserId('') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Id not defined')
  })

  test('Should throw if provided invalid id', () => {
    let error: any;

    try {
     new UserId('invalid_id') 
    } catch (err) {
     error = err
    }

    expect(error).toBeDefined()
    expect(error.message).toBe('Invalid id')
  })

  test('Should return a valid id', () => {
    const id = '445bb585-daee-4589-89ac-4ca63f68486a'
    const userId = new UserId(id)

    expect(userId.value).toBe(id)
  })
})
