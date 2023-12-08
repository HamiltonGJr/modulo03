
import { Request, Response } from 'express'

interface ICOntroller {
  createUserController: (request: Request, response: Response) => void
}

export class UserController implements ICOntroller {
  service: any

  constructor(serviceParam: any) {
    this.service = serviceParam
  }

  async createUserController(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body

      const result = await this.service.createUser(name, email, password)

      response.status(201).json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
