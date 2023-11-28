
class Transaction {
  constructor( value, description, kind ) {
    this.value = value, 
    this.description = description,
    this.kind = kind,
    this.createdAt = new Date(),
    this.updatedAt = new Date(),
    this.canceledAt = null
  }
}

module.exports = Transaction 
