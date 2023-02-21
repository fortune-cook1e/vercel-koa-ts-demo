import 'reflect-metadata'

import { createKoaServer } from 'routing-controllers'
import { UserController } from './controllers/user.controller'

const app = createKoaServer({
  controllers: [UserController] // we specify controllers we want to use
})

export default app
