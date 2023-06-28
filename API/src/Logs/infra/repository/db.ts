import {Log, LogRepository} from "../../domain/LogRepository";
import LogDB from '../../../infra/db/collections/logs'

export default function MongoRepository (): LogRepository {
  const getLogs = async (filter: any = null): Promise<Log[] | []> => {
    const logs = await LogDB.find(filter)
    console.log(logs)
    return []
  }

  const createLog = async (logs: Log[]): Promise<any> => {
    const newLog = await LogDB.insertMany(logs)
    return newLog
  }

  return {
    getLogs,
    createLog
  }
}
