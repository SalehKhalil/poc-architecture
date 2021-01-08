import { IEnvironment } from '../interfaces/enviroment.interface'
import { UserModel } from '../domains/user/user.model'

export class DataBase {
  users: UserModel[]

  constructor () {
    const database = {
      test: [],
      dev: []
    }[process.env.ENV as IEnvironment]

    this.users = database
  }
}
