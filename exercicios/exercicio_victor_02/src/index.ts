
import 'dotenv/config'

import express from 'express'
import { conexao } from './database/Configdatabase'

import { User } from './model/User'
import { UserRepository } from './repository/RepositoryUser'
import { UserService } from './service/ServiceUser'
import { UserController } from './controller/ControllerUser'

const userRepository = new UserRepository(User)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const app = express()

conexao()

app.use(express.json())

app.post('/user', async (request, response) => {
  try {
    await userController.createUserController(request, response)
  } catch (error) {
    console.log(error)
  }
})

app.listen(process.env.PORT, () => {
  console.log('!!Servidor esta rodando - Projeto User!!')
})
