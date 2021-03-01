import { Service } from 'typedi';

import DataBase from '../config/database.config';
import { IUserInterface } from '../interfaces/user.interface';

@Service()
export default class UserRepository {
  constructor(private readonly database: DataBase) {}

  create(user: IUserInterface): IUserInterface {
    this.database.users.push(user);

    return user;
  }
}
