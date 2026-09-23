import userController from '../controllers/user.controller.js';
import { Router } from 'express';

const userRouter = Router();
userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userController.create);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;