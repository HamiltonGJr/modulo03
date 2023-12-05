
export class Order {
  productName: string
  clientName: string
  clientAndress: string
  createdAt: Date

  constructor( 
    productNameParam: string, 
    clientNameParam: string, 
    clientAndressParam: string
    ) {
      this.productName = productNameParam
      this.clientName = clientNameParam
      this.clientAndress = clientAndressParam
      this.createdAt = new Date()
  }
}

const order = new Order( 'Caneca', 'Hamilton', 'Rua Tal, 000' )
