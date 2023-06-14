import app from './resources/app'
import connectDb from './infra/db/coneccion'
import createSuperAdmin from './infra/db/migration/superAdmin'

const server = async () => {
  await connectDb()
  await createSuperAdmin()
  app()
}

server()
