import { DataBase } from '../../src/config/database.config'
import { UserRepository } from '../../src/respositories/user.repository'
import { CreateUserService } from '../../src/services/user/create.service'

const database = new DataBase()
const userRespository = new UserRepository(database)
const createUserService = new CreateUserService(userRespository)

describe('Create User', () => {
  it('Should be return success user created', () => {
    const userCreated = createUserService.execute({ name: 'Joao', age: 20 })

    expect(userCreated).toHaveProperty('id')
    expect(userCreated).toHaveProperty('name', 'Joao')
    expect(userCreated).toHaveProperty('age', 20)
  })

  it('Should be return failed, because user is under eighteen', () => {
    try {
      createUserService.execute({ name: 'Joao', age: 17 })
    } catch (err) {
      expect(err).toHaveProperty('message', 'User is too young')
    }
  })
})
