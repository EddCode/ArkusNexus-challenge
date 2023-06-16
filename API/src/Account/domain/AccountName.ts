export default function AccountName(name: Readonly<string>) {
  this.name = name

  isIdDefined(name)
}

function isIdDefined(name: string) {
  if (!name || name === '') {
    throw new Error('Name not defined')
  }
}
