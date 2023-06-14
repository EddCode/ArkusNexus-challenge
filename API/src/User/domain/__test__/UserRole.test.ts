import UserRole from '../UserRole'

describe('UserRole', () => {
  test('Should throw Role is required error', () => {
    try {
      new UserRole('member')
    } catch (error: any) {
      expect(error.message).toBe('Invalid role')
    }
  })
})
