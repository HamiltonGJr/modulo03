
class OrderController {
  constructor( service ) {
    this.service = service
  }

  async create( request, response ) {
    try{ 
      const { nameOrder, address, nameBuyer } = request.body
  
      const result = await this.service.createOrder( nameOrder, address, nameBuyer )
    
      response.status( 201 ).json( result )
    }catch( error ) {
      console.log( error )
    }
  }

  async findAll( request, response ) {
    try{
      const result = await this.service.findAllOrder()
    
      response.status( 200 ).json( result )
    }catch( error ) {
      console.log( error )
    }
  }
}

module.exports = OrderController 
