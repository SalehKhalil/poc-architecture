import { Service } from 'typedi'

import { DataBase } from '../config/database.config'
import { UserModel } from '../models/user.model'

@Service()
export class UserRepository {
  constructor (private readonly database: DataBase) {}

  create (user: UserModel): UserModel {
    this.database.users.push(user)

    return user
  }
}
