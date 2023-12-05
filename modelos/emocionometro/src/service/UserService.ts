
export class UserService {
  repository: any

  constructor( repostory: any ) {
    this.repository = repostory
  }

  async registerFeeling( name: string, feelingValue: number ) {
    const userFeeling = {
      name,
      feelings: [{
        date: new Date(), value: feelingValue
      }]
    }

    await this.repository.create(userFeeling)
  }
}