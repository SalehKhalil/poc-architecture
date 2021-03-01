import { Service } from 'typedi';

import { IEnvironment } from '../interfaces/enviroment.interface';
import { IUserInterface } from '../interfaces/user.interface';

@Service()
export default class DataBase {
  users: IUserInterface[]

  constructor() {
    const database = {
      test: [],
      dev: [],
    }[process.env.ENV as IEnvironment || 'dev'];

    this.users = database;
  }
}
