
class Order {
  constructor( nameOrder, address, nameBuyer ) {
    this.nameOrder = nameOrder,
    this.address = address, 
    this.nameBuyer = nameBuyer, 
    this.orderDelivered = false, 
    this.date = new Date() 
  }
}

module.exports = Order
