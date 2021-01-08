import { uuid } from 'uuidv4'
import { IAddress } from '../interfaces/address.interface'

export class UserModel {
  id: string
  name: string
  age: number
  address: IAddress

  constructor ({ name, age, address }: Omit<UserModel, 'id'>) {
    this.id = uuid()
    this.name = name
    this.age = age
    this.address = address
  }
}
