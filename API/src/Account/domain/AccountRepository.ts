export interface AccountRepository {
  create: (user: AccountEntity) => Promise<void>
  getById: (id: string) => Promise<AccountEntity | null>
  getAll: () => Promise<AccountEntity[]>
  update: (id: string, user: any) => Promise<void>
  remove: (id: string) => Promise<void>
}

export type AccountMember = {
  id: string;
  name: string;
}

export interface AccountEntity {
  id?: string;
  name?: string;
  client?: string;
  responsable?: string;
  accountMember?: Array<AccountMember>
}
