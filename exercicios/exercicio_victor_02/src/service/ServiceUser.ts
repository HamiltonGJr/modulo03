
export class UserService {
  repository: any

  constructor(repositoryParam: any) {
    this.repository = repositoryParam
  }

  async createUser(name: string, email: string, password: number) {
    try {
      const userCreated = {
        name,
        email,
        password
      }

      await this.repository.create(userCreated)
    } catch (error) {
      console.log(error)
    }
  }
}
