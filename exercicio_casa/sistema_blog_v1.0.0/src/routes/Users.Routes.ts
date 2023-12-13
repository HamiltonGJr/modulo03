import { Router } from 'express';

import { UserController } from '../controllers/User.Controller'

const router = Router()

const userController = new UserController()

router.get('/', userController.listUser.bind(userController))

router.post('/', userController.createUser.bind(userController))

router.get('/:id', userController.listUserById.bind(userController))

router.delete('/:id', userController.deleteUser.bind(userController))

router.put('/:id', userController.updateUser.bind(userController))

export default router
