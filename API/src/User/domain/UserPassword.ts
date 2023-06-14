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
  const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])')

  if (!passwordRegex.test(password)) {
    throw new Error('Invalid password')
  }
}
