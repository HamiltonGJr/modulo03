
const Book = require( '../model/Book' )

class BookService {
  constructor( bookRepository ) {
    this.bookRepository = bookRepository
  }

  async createBook( title, description, releasedYear, author, category, isAvailable ) {
    try{
      const book = new Book( title, description, releasedYear, author, category, isAvailable )

      const newBook = await this.bookRepository.create( book )
  
      return newBook   
    } catch( error ) {
      console.log( error )
    }
  }

  async findAllBooks() {
    try{
      return this.bookRepository.findAll()
    } catch( error ) {
      console.log( error )
    }
  }

  async findByTitle( titleSearched ) {
    try{
      const seachTitle = await this.bookRepository.findAllTitle( titleSearched )

      return seachTitle
    } catch( error ){
      console.log( error )
    }
  }

  async findAllByAuthor( authorSearched ) {
    try{
      const seachAuthor = await this.bookRepository.findAllBy( authorSearched )

      return seachAuthor
    } catch( error ) {
      console.log( error )
    }
  }

  async uptadeById( id, title, description, releasedYear, author, category, isAvailable ) {
    try{
      const book = new Book( title, description, releasedYear, author, category, isAvailable )

      const updateBook = await this.bookRepository.uptade( id, book )
  
      return updateBook
    } catch( error ) {
      console.log( error )
    }
  }

  async deleteById( id ) {
    try{
      const deletedBook = await this.bookRepository.delete( id )

      return deletedBook
    } catch( error ) {
      console.log( error )
    }
  }
}

module.exports = BookService
