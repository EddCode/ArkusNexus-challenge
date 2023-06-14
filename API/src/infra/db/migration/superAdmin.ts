import Users from "../collections/Users"
import { UserEntity } from "../../../User/domain/UserRepository"

import {hashString} from "../../../shared/infraestructure/bcrypt"
import logger from "../../../shared/infraestructure/logs"
import generateUuid from "../../../shared/infraestructure/uuid/generate"

async function createSuperAdmin() {
  const password = await hashString("123456")

  const userData = await Users.findOne({email: "superadmin@arkusnexus.com"});

  const isUser = (userData as UserEntity)

  if (isUser) {
    logger.info("Super Admin already exists")
    return
  }

  const user = new Users({
    _id: generateUuid(),
    email: "superadmin@arkusnexus.com",
    name: 'Super Admin',
    password: password,
    role: "super admin"
  })

  await user.save()
  logger.info("Super Admin created")
}

export default createSuperAdmin
