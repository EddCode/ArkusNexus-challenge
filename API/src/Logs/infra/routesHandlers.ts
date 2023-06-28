import { Application, Router } from 'express'
import routesV1 from './routes/v1'

const routes = (app: Application) => {
  const router = Router()

  app.use('/api/v1/user', router)
  routesV1(router)
}

export default routes
