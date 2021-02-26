import { IAddress } from '../interfaces/address.interface'

export interface UserModel {
  id: string
  name: string
  age: number
  address: IAddress
}
