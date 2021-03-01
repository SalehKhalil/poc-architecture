import { IAddress } from './address.interface';

export interface IUserInterface {
  id: string
  name: string
  age: number
  address: IAddress
}
