export default function AccountResponable(responsable: Readonly<string>) {
  isIdDefined(responsable)

  this.responsable = responsable
}

function isIdDefined(responsable: string) {
  if (!responsable || responsable === '') {
    throw new Error('Client not defined')
  }
}
