export default function AccountClient(client: Readonly<string>) {
  this.client = client

  isIdDefined(client)
}

function isIdDefined(client: string) {
  if (!client || client === '') {
    throw new Error('Client not defined')
  }
}
