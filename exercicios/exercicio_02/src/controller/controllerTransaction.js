
class TransactionController {
  constructor( service ) {
    this.service = service
  } 

  async registerController( request, response ) {
    try{
    const { value, description, kind } = request.body

    const result = await this.service.registerTransaction( value, description, kind )

    response.status( 201 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }
}

module.exports = TransactionController 
