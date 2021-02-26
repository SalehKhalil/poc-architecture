import { Service } from 'typedi'

import { IEnvironment } from '../interfaces/enviroment.interface'
import { UserModel } from '../models/user.model'

@Service()
export class DataBase {
  users: UserModel[]

  constructor () {
    const database = {
      test: [],
      dev: []
    }[process.env.ENV as IEnvironment || 'dev']

    this.users = database
  }
}
