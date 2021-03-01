import { Router } from 'express';

import UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/create', UserController.create);

export default userRouter;
