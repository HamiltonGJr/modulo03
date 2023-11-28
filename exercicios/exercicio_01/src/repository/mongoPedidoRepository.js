
const { ObjectId } = require("mongodb")

class MongoOrderRepository {
  constructor( orderCollectionParam ) {
    this.orderCollection = orderCollectionParam
  }

  async create( orderParam ) {
    try{
      const newOrder = await this.orderCollection.insertOne( orderParam )

      return newOrder
    }catch( error ) {
      console.log( error )
    }
  }

  async findAll( ) {
    try{
      const searchedOrder = await this.orderCollection.find( ).toArray( )

      return searchedOrder
    }catch( error ) {
      console.log( error )
    }
  }

  async update( idParam, ordersDeliveredParam ) {
    const uptadeOrderDelivered = await this.orderCollection.updateOne(
      {
        _id: new ObjectId( idParam )
      }, 
      {
        $set: { orderDelivered: ordersDeliveredParam }
      }
    )

    return uptadeOrderDelivered
  }
}

module.exports = { MongoOrderRepository }
