import CreateUserService from '../../src/services/user/create.service'

describe('Create User', () => {
  it('Should be return success user created', async () => {
    const userCreated = await CreateUserService({ name: 'Joao', age: 20, cep: '01001000' })

    expect(userCreated).toHaveProperty('id')
    expect(userCreated).toHaveProperty('name', 'Joao')
    expect(userCreated).toHaveProperty('age', 20)
  })

  it('Should be return failed, because user is under eighteen', async () => {
    try {
      await CreateUserService({ name: 'Joao', age: 17, cep: '01001000' })
    } catch (err) {
      expect(err).toHaveProperty('message', 'User is too young')
    }
  })
})
