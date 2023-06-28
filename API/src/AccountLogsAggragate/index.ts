import createLog from "../Logs/infra/inputConexionAdapter"

type AccountLogsAggregate = {
  addLog: (type: string, users: any[]) => Promise<void>,
}

export default function AccountLogsAggregate(account: string): AccountLogsAggregate {
  const addLog = async (type: string, users: any[]) => {
    const logs = users.map((user: any) => ({
      account: account,
      user: user.name,
      startDate: null,
      endDate: null,
      logType: type
    }))

    await createLog(logs, type)
  }

  return {
    addLog
  }
}
