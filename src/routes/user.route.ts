import { Router } from 'express'
import { Container } from 'typedi'

import { CreateUserController } from '../controllers/user/create.controller'

const userRouter = Router()

userRouter.post('/create', async (req, res) => {
  try {
    const { name, age, cep } = req.body
    const createUserController = Container.get(CreateUserController)
    const userCreated = await createUserController.execute({ name, age, cep })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

export { userRouter }
