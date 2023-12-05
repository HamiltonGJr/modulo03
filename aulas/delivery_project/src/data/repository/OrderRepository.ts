
interface CreatedParams {
  productName: string,
  clientAddress: string,
  clientName: string,
  isDeliverered: boolean,
  createdAt: Date
}

export class OrderRepository {
  collection: any
  
  constructor( collection: CreatedParams ) {
    this.collection = collection
  }

  async creted( order: CreatedParams ){
    await this.collection.insertOne( order )
  }
}