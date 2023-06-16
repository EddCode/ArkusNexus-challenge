import { verifyToken, verifyUserRol } from '../../../../shared/infraestructure/jwt/sign'
import { create, retrive, update, del } from '../../requestHandler/account'

const routesV1 = (router: any) => {
  router.post('/', verifyToken, verifyUserRol(['super admin', 'admin']), create) 
  router.get('/', verifyToken, verifyUserRol(['super admin', 'admin']), retrive)
  router.get('/:id', verifyToken, verifyUserRol(['super admin', 'admin']), retrive)
  router.patch('/:id', verifyToken, verifyUserRol(['super admin', 'admin']), update)
  router.delete('/:id', verifyToken, verifyUserRol(['super admin', 'admin']), del )
}

export default routesV1
