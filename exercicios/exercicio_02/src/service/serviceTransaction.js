
const Transaction  = require( '../model/transaction' )

class TransactionService {
  constructor( transactionRepositoryParam ) {
    this.transactionRepository = transactionRepositoryParam
  }

  async registerTransaction( valueParam, descriptionParam, kindParam ) {
    try{
      const transaction = new Transaction( valueParam, descriptionParam, kindParam )

      const newTransaction = await this.transactionRepository.register( transaction )

      return newTransaction
    }catch( error ) {
      console.log( error )
    }
  }
}

module.exports = TransactionService 
