import { Router } from 'express'
import { CreateUserService } from '../services/user/create.service'

const userRouter = Router()

userRouter.post('/create', (req, res) => {
  try {
    const { name, age } = req.body

    const createUserService = new CreateUserService()
    const userCreated = createUserService.execute({ name, age })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode || 500).json(err)
  }
})

export { userRouter }
