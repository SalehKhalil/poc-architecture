import { DataBase } from '../../config/database.config'
import { UserModel } from './user.model'

export class UserRepository {
  private readonly database

  constructor () {
    this.database = new DataBase()
  }

  create (user: UserModel): UserModel {
    this.database.users.push(user)

    return user
  }
}
