import { uuid } from 'uuidv4'

export class UserModel {
  id: string
  name: string
  age: number

  constructor ({ name, age }: Omit<UserModel, 'id'>) {
    this.id = uuid()
    this.name = name
    this.age = age
  }
}
