import {Request, Response,  NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import config from '../../../resources/config'
import httpCode from '../httpCode'

const signToken = (payload: object, options = {}) => {
  return jwt.sign(payload, config.jwt.token, { expiresIn: '1h', ...options })
}

export const verifyToken = (req: Request, res: Response, next: NextFunction ) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(httpCode.FORBIDDEN.status).send({
      message: 'No token provided'
    })
  }

  try {
    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, config.jwt.token)
    req.body.jwtDecode = decoded
    next()
  } catch (error) {
    return res.status(httpCode.UNAUTHORIZED.status).send({
      message: httpCode.UNAUTHORIZED.message
    })
  }

}

export const verifyUserRol = (roles: [string, string?, string?]) => (req: Request, res: Response, next: NextFunction ) => {
  try {
    const { jwtDecode } = req.body
    if (!roles.includes(jwtDecode.role)) {
      throw new Error('Unauthorized')
    }
  } catch (error) {
    return res.status(httpCode.UNAUTHORIZED.status).send({
      message: httpCode.UNAUTHORIZED.message
    })
  }

  next()
}

export default signToken
