import UserRepository from '../../repositories/user.repository'
import { IUserModel, UserModel } from '../../models/user.model'
import { HttpError } from '../../helpers/errors/http.error'
import { getAddressData } from '../../clients/viacep.client'

interface Request {
  name: string
  age: number
  cep: string
}

export default async function createUserService (request: Request): Promise<IUserModel> {
  const { name, age, cep } = request

  if (age < 18) {
    throw new HttpError('User is too young', 403)
  }

  const address = await getAddressData(cep)

  const user = UserModel({ name, age, address })

  const userCreated = UserRepository.create(user)

  return userCreated
}
