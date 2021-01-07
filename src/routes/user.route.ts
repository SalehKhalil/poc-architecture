import { Router } from 'express'
import { CreateUserService } from '../services/user/create.service'

const userRouter = Router()

userRouter.post('/create', (req, res) => {
  try {
    const { name, age } = req.body

    const createUserService = new CreateUserService()
    const userCreated = createUserService.execute({ name, age })

    return res.json(userCreated).status(200)
  } catch (err) {
    return res.json(err).status(500)
  }
})

export { userRouter }
