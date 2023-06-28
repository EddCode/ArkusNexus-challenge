import { verifyToken } from '../../../../shared/infraestructure/jwt/sign'
import { logs } from '../../requestHandler'

const routesV1 = (router: any) => {
  router.get('/', verifyToken, logs)
}

export default routesV1
