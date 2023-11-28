
const express = require( 'express' )

const { transactionCollection, client } = require( './database/databaseTransaction' )
const TransactionRepository = require( './repository/respositoryTransaction' )
const TransactionService = require( './service/serviceTransaction' )
const TransactionController = require( './controller/controllerTransaction' )

const transactionRepository = new TransactionRepository( transactionCollection )
const transactionService = new TransactionService( transactionRepository )
const transactionController = new TransactionController( transactionService )

client.connect()

const app = express(  )
app.use( express.json(  ) )

app.post( '/transaction', async( request, response ) => {
  transactionController.registerController( request, response )
})

app.listen( 3333, console.log( 'Sistema de controle financeiro - !INICIADO!' ) )
