import { server } from './config/express.config'
import { validatorMiddleware } from './middlewares/validator.middleware'
import { logMiddleware } from './middlewares/log.middleware'
import { userRouter } from './routes/user.route'

server.use(validatorMiddleware)
server.use(logMiddleware)
server.use('/user', userRouter)

server.listen(
  process.env.PORT,
  () => console.log(`Server is running on port ${process.env.PORT ?? 3000}`)
)
