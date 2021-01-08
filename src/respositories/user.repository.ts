import { UserModel } from '../models/user.model'

export class UserRepository {
  private readonly users: UserModel[]

  constructor () {
    this.users = []
  }

  create (user: UserModel): UserModel {
    this.users.push(user)

    return user
  }
}
