import { IDataBase } from '../interfaces/database.interface'
import { IEnvironment } from '../interfaces/enviroment.interface'
import { IUserModel } from '../models/user.model'

export const database = (() => {
  let instance: IDataBase

  function createInstance (): IDataBase {
    const dbEnvironment = {
      test: [],
      dev: []
    }[process.env.ENV as IEnvironment]

    const users: IUserModel[] = dbEnvironment

    return {
      users
    }
  }

  return () => {
    if (!instance) instance = createInstance()

    return instance
  }
})()
