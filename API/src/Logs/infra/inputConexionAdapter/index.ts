import LogService, { typeLog } from '../../aplication/LogService'
import {Log} from '../../domain/LogRepository'
import MongoRepository from '../repository/db'

const repository = MongoRepository()
const service = LogService(repository)

export default async function  createLog(logs: Log[], type: string) {
  const typeLog = type.toUpperCase() as typeLog

  await service.createLog(logs, typeLog)
}


