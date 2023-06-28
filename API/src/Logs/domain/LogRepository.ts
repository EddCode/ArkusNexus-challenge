export type  Log = {
  account: string
  user: string
  startDate: Date | null
  endDate: Date | null
  logType: string
}

export type LogAccions = {
  build: () => Log,
  withAccount: (name: string) => LogAccions
  withClient: (clinet: string) => LogAccions
  withStartDate: () => LogAccions
  withEndDate: () => LogAccions
  withLogType: (logType: string) => LogAccions
}

export interface LogRepository {
  getLogs: (filter: any) => Promise<Log[]>
  createLog: (log: Log[]) => Promise<any>
}

