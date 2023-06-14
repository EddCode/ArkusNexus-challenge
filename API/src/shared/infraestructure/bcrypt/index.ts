import bycript from 'bcrypt'

export const hashString = async (password: string):Promise<string> =>  await bycript.hash(password, 10)

export const compare = async (plainPassword: string, hasedPassword: string): Promise<Boolean> => await bycript.compare(plainPassword, hasedPassword)
