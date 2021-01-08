import { server } from './config/express.config'
import { validatorMiddleware } from './middlewares/validator.middleware'
import { logMiddleware } from './middlewares/log.middleware'
import { routesMiddleware } from './middlewares/routes.middleware'

server.use(validatorMiddleware)
server.use(logMiddleware)
routesMiddleware(server)
  .then(() => console.log('Routes registred!'))
  .catch(err => console.error(err))

server.listen(
  process.env.PORT,
  () => console.log(`Server is running on port ${process.env.PORT ?? 3000}`)
)
