
const { ObjectId } = require( 'mongodb' )

class TransactionRepository {
  constructor( transactionCollectionParam ) {
    this.transactionCollection = transactionCollectionParam
  }

  async register( transactionParam ) {
    try{
     const registerNewTransaction = await this.transactionCollection.insertOne( transactionParam )

     return registerNewTransaction
    }catch( error ) {
      console.log( error )
    }
  }
}

module.exports = TransactionRepository 
