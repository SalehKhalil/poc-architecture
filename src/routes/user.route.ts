import { Router } from 'express'
import createUserService from '../services/user/create.service'

const userRouter = Router()

userRouter.post('/create', async (req, res) => {
  try {
    const { name, age, cep } = req.body
    const userCreated = createUserService({ name, age, cep })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

export { userRouter }
