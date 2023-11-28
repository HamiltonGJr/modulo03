
export class Order {
  productName: string
  clientName: string
  clientAndress: string

  constructor( 
    productName: string, 
    clientName: string, 
    clientAndress: string
    ) {
      this.productName = productName
      this.clientName = clientName
      this.clientAndress = clientAndress
  }
}

console.log(new Order('Caneca', 'Hamilton', 'Rua Pirulito'))
