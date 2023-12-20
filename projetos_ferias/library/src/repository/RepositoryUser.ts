import { Users } from '../model/Users'

export class UserRepository {
  create(newUser: any) {
    return Users.create(newUser)
  }
}
