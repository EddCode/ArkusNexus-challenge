export default function UserId(id: Readonly<string>) {
  this.value = id

  isIdDefined(id)
  isIdValid(id)
}

function isIdDefined(id: string) {
  if (!id || id === '') {
    throw new Error('Id not defined')
  }
}

function isIdValid(id: string) {
  const idRegex = new RegExp('^[a-f0-9]{8}(-[a-f0-9]{4}){4}[a-f0-9]{8}$')
  if (!idRegex.test(id)) {
    throw new Error('Invalid id')
  }
}
