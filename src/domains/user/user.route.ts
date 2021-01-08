import { Router } from 'express'
import { CreateUserService } from './services/create.service'
import { UserRepository } from './user.repository'

const router = Router()
const userRespository = new UserRepository()
const createUserService = new CreateUserService(userRespository)

router.post('/create', async (req, res) => {
  try {
    const { name, age, cep } = req.body
    const userCreated = await createUserService.execute({ name, age, cep })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

export { router }
