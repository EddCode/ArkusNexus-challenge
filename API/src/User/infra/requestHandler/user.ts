import { Request, Response } from 'express'
import UserUseCase from '../../useCases'
import MongoRepository from '../repository/db'
import httpCode from '../../../shared/infraestructure/httpCode'
import ROLES from '../../../shared/infraestructure/dictionaries/roles'
import { CreatedErrorHandler, GetErrorHandler, UpdateErrorHandler } from '../Errors/errorHandler'
import logger from '../../../shared/infraestructure/logs'

const repository = MongoRepository()
const useCases = UserUseCase(repository)

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    const result = await useCases.login(email, password)
    res.status(httpCode.OK.status).json(result)
  }catch(err: any) {
    logger.error(`Error in login: ${err.message}`)
    if (err.message === 'Unauthorized') {
      return res.status(httpCode.UNAUTHORIZED.status).json({ message: 'Email/Passowrd are invalid' })
    }

    res.status(httpCode.INTERNAL_SERVER_ERROR.status).json({ error: httpCode. INTERNAL_SERVER_ERROR.message })
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { email, password, name, role, jwtDecode } = req.body
    
    if (jwtDecode.role === ROLES.USER) {
      return res.status(httpCode.UNAUTHORIZED.status).json({ message: 'You are not authorized to perform this action' })
    }

    const user = await useCases.create({ email, password, name, role })

    res.status(httpCode.CREATED.status).json({
      message: 'User created',
      data: user
    })
  } catch (error: any) {
    const { status, message} = CreatedErrorHandler(error)
    logger.error(`Error creating user: ${message} - ${status}`)
    res.status(status).json({ message })
  }
}

export async function retrive(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { jwtDecode } = req.body

    if (jwtDecode.role === ROLES.USER && jwtDecode.id != id) {
      return res.status(httpCode.UNAUTHORIZED.status).json({ message: 'You are not authorized to perform this action' })
    }

    const result = !id ? await useCases.getAll() :  await useCases.getById(id)

    res.status(httpCode.OK.status).json({ message: httpCode.OK.message, data: result })
  } catch (error: any) {
    const { status, message} = GetErrorHandler(error)
    logger.error(`Error creating user: ${message} - ${status}`)
    res.status(status).json({ message })
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { 
      jwtDecode, 
      email, 
      name, 
      password,
      englishLevel,
      resume,
      skills
    } = req.body

    if (!id) {
      throw new Error('Id is required')
    }   

    if (jwtDecode.role === ROLES.USER && jwtDecode.id !== id) {
      return res.status(httpCode.UNAUTHORIZED.status).json({ message: 'Unauthorized' })
    }

    const user = await useCases.update(id, jwtDecode.role, { email, name, password, englishLevel, resume, skills })

    res.status(httpCode.OK.status).json({ message: httpCode.OK.message, data: { id, ...user } })
  } catch (error: any) {
    const { status, message} = UpdateErrorHandler(error)
    logger.error(`Error updating user: ${message} - ${status}`)
    res.status(status).json({ message })
  }
}

export async function del(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { jwtDecode } = req.body
      if (!id) {
        throw new Error('Id is required')
      }

      if (jwtDecode.role === ROLES.USER) {
        return res.status(httpCode.UNAUTHORIZED.status).json({ message: 'You are not authorized to perform this action' })
      }

      await useCases.deleteById(id)

      res.status(httpCode.OK.status).json({ message: httpCode.OK.message, data: { id } })
    } catch (error: any) {
      const { status, message} = GetErrorHandler(error)
      logger.error(`Error deleting user: ${message} - ${status}`)
      res.status(status).json({ message })
    }
}
