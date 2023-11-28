
const express = require( 'express' )

const { booksCollection, client } = require( './database/LibraryConfigDatabase' )
const MongoBookRepository  = require( './reposittory/LibraryRepository' )
const BookService = require( './service/LibraryService' )
const BookController = require( './controller/LibraryController' )

const bookRepository = new MongoBookRepository( booksCollection )
const bookService = new BookService( bookRepository )
const bookController = new BookController( bookService )

client.connect()

const app = express()
app.use( express.json() )

app.post( '/books', async ( request, response ) => {
  bookController.createBookController( request, response )
})

app.get( '/books', async ( request, response ) => {
  bookController.findAllBooksController( request, response )
})

app.get( '/books/title', async ( request, response ) => {
  bookController.findAllTitleController( request, response )
})

app.get( '/books/author', async( request, response ) => {
  bookController.findAllByAuthorController( request, response )
})

app.put( '/books', async( request, response ) => {
  bookController.uptadeByIdController( request, response )
})

app.delete( '/books', async( request, response ) => {
  bookController.deleteByIdController( request, response)
})

app.listen( 3333, console.log( 'Sistema de biblioteca - !INICIADO!' ) )
