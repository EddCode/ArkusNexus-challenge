export default function UserPassword (password: string) {
  try {
    isPasswordDefined(password)
    isPasswordValid(password)

    this.value = password

    this.isEquals = (otherPassword: string) => this.value === otherPassword
  } catch (error: any) {
    throw new Error(error.message)
  }
}

function isPasswordDefined (password: string) {
  if (!password || password === '') {
    throw new Error('Password is required')
  }
}

function isPasswordValid (password: string) {

  if (password.length < 3) {
    throw new Error('Invalid password')
  }
}
