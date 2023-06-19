import { Request, Response } from 'express'
import UserUseCase from '../../useCases'
import MongoRepository from '../repository/db'
import httpCode from '../../../shared/infraestructure/httpCode'
import { CreatedErrorHandler, GetErrorHandler, UpdateErrorHandler } from '../Errors/errorHandler'
import logger from '../../../shared/infraestructure/logs'

const repository = MongoRepository()
const useCases = UserUseCase(repository)

export async function create(req: Request, res: Response) {
  try {
    const { name, client, responsable, teamMembers } = req.body
    const account = await useCases.create({ name, client, responsable, accountMembers: teamMembers })

    res.status(httpCode.CREATED.status).json({
      message: 'User created',
      data: account
    })
  } catch (error: any) {
    const { status, message} = CreatedErrorHandler(error)
    logger.error(`Error creating account: ${message} - ${status}`)
    res.status(status).json({ message })
  }
}

export async function retrive(req: Request, res: Response) {
  try {
    const { id } = req.params

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
      name, 
      client,
      responsasble,
      teamMembers
    } = req.body

    if (!id) {
      throw new Error('Id is required')
    }   

    const user = await useCases.update(id, { name, client, responsasble, accountMembers: teamMembers })

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
      if (!id) {
        throw new Error('Id is required')
      }

      await useCases.deleteById(id)

      res.status(httpCode.OK.status).json({ message: httpCode.OK.message, data: { id } })
    } catch (error: any) {
      const { status, message} = GetErrorHandler(error)
      logger.error(`Error deleting user: ${message} - ${status}`)
      res.status(status).json({ message })
    }
}
