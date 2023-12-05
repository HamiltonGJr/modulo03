
import { Order } from '../data/model/Order'

interface CreatedParams {
  productName: string,
  clientAddress: string,
  clientName: string,
  isDeliverered: boolean,
  createdAt: Date
}

export class OrderService {
  repository: any

  constructor( repository: CreatedParams ) {
    this.repository = repository
  }
  
  async creted(
    productNameParam: string, 
    clientNameParam: string, 
    clientAndressParam: string
  ) {
    const order = new Order( productNameParam, clientNameParam, clientAndressParam )

    await this.repository.creted( order )
  }
}