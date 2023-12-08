
import { User } from '../model/User'

interface IUser {
  name: String,
  email: String,
  password: Number
}

interface IRepository {
  create: (user: IUser) => void
}

export class UserRepository implements IRepository {
  model: typeof User

  constructor(model: typeof User) {
    this.model = model
  }

  async create(user: IUser) {
    try {
      await this.model.create(user)
    } catch (error) {
      console.log(error)
    }
  }
}
