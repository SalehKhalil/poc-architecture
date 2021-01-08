import { Router } from 'express'
import { CreateUserService } from '../domains/user/services/create.service'
import { UserRepository } from '../domains/user/user.repository'

const userRouter = Router()
const userRespository = new UserRepository()
const createUserService = new CreateUserService(userRespository)

userRouter.post('/create', async (req, res) => {
  try {
    const { name, age, cep } = req.body
    const userCreated = await createUserService.execute({ name, age, cep })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

export { userRouter }
