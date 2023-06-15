import { verifyToken } from '../../../../shared/infraestructure/jwt/sign'
import { create, retrive, update, del, login } from '../../requestHandler/user'

const routesV1 = (router: any) => {
  router.post('/', verifyToken,  create) 
  router.get('/', verifyToken, retrive)
  router.get('/:id', verifyToken, retrive)
  router.patch('/:id', verifyToken, update)
  router.delete('/:id', verifyToken, del )

  router.post('/login', login) 
}

export default routesV1
