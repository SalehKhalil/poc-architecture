import { Service } from 'typedi'

import { UserRepository } from '../../respositories/user.repository'
import { IController } from '../../interfaces/service.interface'
import { getAddressData } from '../../clients/viacep.client'
import { CreateUser } from '../../domains/user/create.model'
import { UserModel } from '../../models/user.model'

interface Request {
  name: string
  age: number
  cep: string
}

@Service()
export class CreateUserController implements IController {
  constructor (public repository: UserRepository) {}

  async execute (request: Request): Promise<UserModel> {
    const { name, age, cep } = request

    const address = await getAddressData(cep)

    const user = new CreateUser({ name, age, address })

    const userCreated = this.repository.create(user)

    return userCreated
  }
}
