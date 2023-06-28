import type { Log, LogRepository } from '../domain/LogRepository'
import LogEntity from '../domain/LogEntity'

type LogService = {
  getLogs: (filter: any) => Promise<Log[]>
  createLog: (logs: Log[]) => Promise<Log>
}

export enum typeLog {
  CREATE = 'CREATE',
  UPDATE = 'MODIFY',
  REMOVE = 'REMOVE'
}

export default function LogService(repository: LogRepository): LogService {
  const getLogs = async (filter: any = null): Promise<Log[]> => {
    const logs = await repository.getLogs(filter)
    return logs
  }

  const createLog = async (logs: Log[]): Promise<any> => {
    const createdLogs = logs.map((log: Log) => {
      const logEntity = LogEntity()
        .withClient(log.user)
        .withAccount(log.account)
        .withLogType(log.logType)

      if (log) {
        logEntity.withEndDate()
      }
      return logEntity.build()
    })

    
    await repository.createLog(createdLogs)
  }

  return {
    getLogs, 
    createLog
  }
}
