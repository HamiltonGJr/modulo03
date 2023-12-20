import { UserRepository } from '../repository/RepositoryUser'

export class UserService {
  constructor(private repository: UserRepository) { }

  async create(fullname: string, role: string, email: string, password: string) {
    try {
      const user = { fullname, email, password }

      const newUser = await this.repository.create(user)

      return newUser
    } catch (error) {
      console.log(error)
    }
  }
}
