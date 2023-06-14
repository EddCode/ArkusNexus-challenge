
export default function UserEmail(email: Readonly<string>): void {
  try {
    isEmailDefined(email)
    isEmailValid(email)

    this.value = email
    this.isEquals = (otherEmail: string): boolean => this.value === otherEmail
    this.toString = (): string => this.value
  } catch (error: any) {
    throw new Error(error.message)
  }
}

function isEmailDefined(email: string) {
  if (!email || email === '') {
    throw new Error('Email is required')
  }
}

function isEmailValid(email: string) {
  const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

  if (!emailRegex.test(email)) {
    throw new Error('Invalid email')
  }
}

