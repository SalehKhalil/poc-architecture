import { UserRepository } from '../../respositories/user.repository'
import { UserModel } from '../../models/user.model'
import { HttpError } from '../../helpers/errors/http.error'
import { IService } from '../../interfaces/service.interface'

interface Request {
  name: string
  age: number
}

export class CreateUserService implements IService {
  userRespository: UserRepository

  constructor (repository: UserRepository) {
    this.userRespository = repository
  }

  execute (request: Request): UserModel {
    const user = new UserModel(request)

    if (user.age < 18) {
      throw new HttpError('User is too young', 403)
    }

    const userCreated = this.userRespository.create(user)

    return userCreated
  }
}
