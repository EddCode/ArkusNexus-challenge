import {LogAccions} from "./LogRepository"
import type {Log} from "./LogRepository"
import LogDate from "./LogDate"

export default function Log(): LogAccions{
  const log: Log = {
    account: "",
    user: "",
    startDate: null,
    endDate: null,
    logType: ""
  }

  return {
    build(): Log {
      return log
    },
    withAccount(name: string): LogAccions {
      log.account = name
      return this
    },
    withClient(client: string): LogAccions {
      log.user = client
      return this
    },
    withStartDate(): LogAccions {
      log.startDate = new LogDate().date
      return this
    },
    withEndDate(): LogAccions {
      log.endDate = new LogDate().date
      return this
    },
    withLogType(logType: string): LogAccions {
      log.logType = logType
      return this
    }
  }
}
