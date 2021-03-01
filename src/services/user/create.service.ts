import { Service } from 'typedi';

import { IService } from '../../interfaces/service.interface';
import { IUserInterface } from '../../interfaces/user.interface';
import UserRepository from '../../respositories/user.repository';
import getAddressData from '../../clients/viacep.client';
import CreateUser from '../../domains/user/create.domain';

interface Request {
  name: string
  age: number
  cep: string
}

@Service()
export default class CreateUserService implements IService {
  constructor(public repository: UserRepository) {}

  async execute(request: Request): Promise<IUserInterface> {
    const { name, age, cep } = request;

    const address = await getAddressData(cep);

    const user = new CreateUser({ name, age, address });

    const userCreated = this.repository.create(user);

    return userCreated;
  }
}
