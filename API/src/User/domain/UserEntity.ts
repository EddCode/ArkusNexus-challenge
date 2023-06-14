import { UserEntity } from './UserRepository'
import UserEmail from './UserEmail'
import UserId from './UserId'
import Username from './Username'
import UserPassword from './UserPassword'
import UserRole from './UserRole'

export type UserEntityAccions = {
  build: () => UserEntity,
  updateEmail: (newEmail: string) => void,
  updatePassword: (newPassword: string) => void
}

export default function User(user: Readonly<UserEntity>): UserEntityAccions {
  try {
    let { value: id } = new UserId(user.id)
    let { value: name } = new Username(user.name)
    let { value: email } = new UserEmail(user.email)
    let { value: password } = new UserPassword(user.password)
    let { role } = new UserRole(user.role)

    function updateEmail (newEmail: string): void {
      email = new UserEmail(newEmail).value
    }

    function updatePassword (newPassword: string): void {
      password = new UserPassword(newPassword).value
    }

    return {
      updateEmail,
      updatePassword,
      build: (): UserEntity => ({id,  name, email, password, role})
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
