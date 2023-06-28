import { Request, Response } from 'express'
import LogService from '../../aplication/LogService'
import MongoRepository from '../repository/db'

const repository = MongoRepository()
const service = LogService(repository)

export function logs(req: Request, res: Response){
  console.log(req.query)
  service.getLogs(null)
  res.send('Hello World!')
}
