import { IEnvironment } from '../interfaces/enviroment.interface'
import { UserModel } from '../models/user.model'

export class DataBase {
  users: UserModel[]

  constructor () {
    const database = {
      test: [],
      dev: [{ id: '1', name: 'Saleh', age: 22 }]
    }[process.env.ENV as IEnvironment]

    this.users = database
  }
}
