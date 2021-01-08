import { v4 } from 'uuid'
import { IAddress } from '../interfaces/address.interface'

export interface IUserModel {
  id: string
  name: string
  age: number
  address: IAddress
}

export function UserModel ({ name, age, address }: Omit<IUserModel, 'id'>): IUserModel {
  const user = {
    id: v4(),
    name: name,
    age: age,
    address: address
  }

  return user
}
