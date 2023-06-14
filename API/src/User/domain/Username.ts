export default function Username(username: string) {
  try {
    isUsernameDefined(username)
    isUsernameValid(username)

    this.value = username
  } catch (error: any) {
    throw new Error(error.message)
  }
}

function isUsernameDefined(username: string) {
  if (!username || username === '') {
    throw new Error('Name is required')
  }
}

function isUsernameValid(username: string) {
  const usernameRegex = new RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
  if (!usernameRegex.test(username)) {
    throw new Error('Invalid name')
  }
}
