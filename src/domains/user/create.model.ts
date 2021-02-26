import { v4 } from 'uuid'
import { IAddress } from '../../interfaces/address.interface'
import { HttpError } from '../../helpers/errors/http.error'
import { UserModel } from '../../models/user.model'

export class CreateUser implements UserModel {
  id: string
  name: string
  age: number
  address: IAddress

  constructor ({ name, age, address }: Omit<CreateUser, 'id'>) {
    this.id = v4()
    this.name = name
    this.age = this.validateAge(age)
    this.address = address
  }

  private validateAge (age: number): number {
    if (age < 18) {
      throw new HttpError('Deve ser maior que 18 anos', 400)
    }

    return age
  }
}
