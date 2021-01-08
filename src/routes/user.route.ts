import { Router } from 'express'
import { CreateUserService } from '../services/user/create.service'
import { UserRepository } from '../respositories/user.repository'
import { DataBase } from '../config/database.config'

const userRouter = Router()
const database = new DataBase()
const userRespository = new UserRepository(database)
const createUserService = new CreateUserService(userRespository)

userRouter.post('/create', (req, res) => {
  try {
    const { name, age } = req.body
    const userCreated = createUserService.execute({ name, age })

    return res.status(200).json(userCreated)
  } catch (err) {
    return res.status(err.statusCode ?? 500).json(err)
  }
})

export { userRouter }
