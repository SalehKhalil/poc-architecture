import { IAddress } from '../../interfaces/address.interface';
import { IUserInterface } from '../../interfaces/user.interface';
import HttpError from '../../helpers/errors/http.error';

export default class CreateUser implements IUserInterface {
  id: string

  name: string

  age: number

  address: IAddress

  constructor({ name, age, address }: Omit<CreateUser, 'id'>) {
    this.id = new Date().getTime().toString();
    this.name = name;
    this.age = CreateUser.validateAge(age);
    this.address = address;
  }

  private static validateAge(age: number): number {
    if (age < 18) {
      throw new HttpError('Deve ser maior que 18 anos', 400);
    }

    return age;
  }
}
