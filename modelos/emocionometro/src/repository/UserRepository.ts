
import { User } from '../model/User'

interface IUserParams {
  name: string,
  feelings: [{ date: Date, value: number}]
}

interface IRepository {
  create: ( user: IUserParams ) => void
}

export class UserRepository implements IRepository {
  model: typeof User
  
  constructor( model: typeof User ) {
    this.model = model
  }

  create( user: IUserParams ) {

  }
}
