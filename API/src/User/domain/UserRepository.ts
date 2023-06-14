export interface UserRepository {
  findByEmail: (email: string) => Promise<UserEntity | null>
  create: (user: UserEntity) => Promise<void>
  getById: (id: string) => Promise<UserEntity | null>
  update: (id: string, user: any) => Promise<void>
  remove: (id: string) => Promise<void>
}

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
  resume?: string;
  skills?: string;
  englishLevel?: string;
}
