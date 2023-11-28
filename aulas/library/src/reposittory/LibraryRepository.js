
const { ObjectId } = require("mongodb")

class MongoBookRepository {
  constructor( bookCollectionParam ) {
    this.bookCollection = bookCollectionParam
  }

  async create( book ) {
    try{
      const newBook = await this.bookCollection.insertOne( book )

      return newBook
    } catch( error ) {
      console.log( error )
    }
  }

  async findAll() {
    try{
      const authorSearch = await this.bookCollection.find( {} ).toArray()

      return authorSearch
    } catch( error ) {
      console.log( error )
    }
  }

  async findAllTitle( titleParam ) {
    try{
      const titleSearch = await this.bookCollection.findOne( { title: titleParam } )

      return titleSearch
    } catch( error ) {
      console.log( error )
    }
  }

  async findAllBy(author) {
    try{
      const authorSearch = await this.bookCollection.find( { author: author} ).toArray()

      return authorSearch
    } catch( error ) {
      console.log( error )
    }
  }

  async uptade( id, book ) {
    try{
      const updateBook = await this.bookCollection.updateOne( 
        { 
          _id: new ObjectId(id) 
        }, 
        { 
          $set: { 
            title: book.title,
            description: book.description,
            releasedYear: book.releasedYear,
            author: book.author,
            category: book.category,
            isAvailable: book.isAvailable,
           } 
        } 
      )
  
      return updateBook
    } catch( error ) {
      console.log( error )
    }
  }

  async delete( id ) {
    try{
      const deletedBook = await this.bookCollection.deleteMany( { _id: new ObjectId( id )} )

      return deletedBook
    } catch( error ){
      console.log( error )
    }
  }
}

module.exports = MongoBookRepository 
