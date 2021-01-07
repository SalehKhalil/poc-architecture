import { UserModel } from '../models/user.model'

export class UserRepository {
  private users: UserModel[]

  constructor () {
    this.users = []
  }

  create (user: UserModel): UserModel {
    this.users.push(user)

    return user
  }
}
