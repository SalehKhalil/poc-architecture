import { IUserModel } from '../models/user.model'
import { database } from '../config/database.config'

export interface IUserRepository {
  create: (user: IUserModel) => IUserModel
}

function create (user: IUserModel): IUserModel {
  database().users.push(user)

  return user
}

export default {
  create
}
