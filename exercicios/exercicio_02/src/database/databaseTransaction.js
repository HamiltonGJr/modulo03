
const { MongoClient } = require( 'mongodb' )

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient( uri )

const dbName = 'transaction_system'

const transactionCollection = client.db( dbName ).collection( 'transaction' )

module.exports = { transactionCollection, client }
