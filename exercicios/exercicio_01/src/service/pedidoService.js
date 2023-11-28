
const Order = require( '../model/pedido' )

class OrderService {
  constructor( orderRepositoryParam ) {
    this.orderRepository = orderRepositoryParam
  }

  async createOrder( nameOrderParam, addressParam, nameBuyerParam ) {
    try{
      const order = new Order( nameOrderParam, addressParam, nameBuyerParam )

      const newOrder = await this.orderRepository.create( order )
  
      return newOrder
    }catch( error ) {
      console.log( error )
    }
  }

  async findAllOrder( ) {
    try{
      const searchedOrder = await this.orderRepository.findAll( )

      console.log( searchedOrder )

      return searchedOrder
    }catch( error ) {
      console.log( error )
    }
  }

  async updateByIdOrder( idParam, ordersDeliveredParam ) {
    const ordersDeliveredChange = await this.orderRepository.update( idParam, ordersDeliveredParam )

    return ordersDeliveredChange
  }
}

module.exports = { OrderService }
