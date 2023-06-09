import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import logger from '../shared/infraestructure/logs'
import userRoutes from '../User/infra/routeHandler'
import accountsRoutes  from '../Account/infra/routeHandler'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ 
  extended: true, 
  limit: '50mb', 
  parameterLimit: 50000 
}))

userRoutes(app)
accountsRoutes(app)
      

export default (port = 8080) => {
  app.listen(port, () =>
    logger.info(`Server is listening on port ${port}`)
  )
}
