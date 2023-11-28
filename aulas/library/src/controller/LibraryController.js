
class BookController {
  constructor( serviceParam ) {
    this.service = serviceParam
  }

  async createBookController( request, response) {
    try{
      const { title, description, releasedYear, author, category, isAvailable } = request.body

      const result = await this.service.createBook( title, description, releasedYear, author, category, isAvailable )

      response.status( 201 ).json( result )
    } catch( error ){
      console.log( error )
    }
  }

  async findAllBooksController( request, response ) {
   try{
    const result = await this.service.findAllBooks()

    response.status( 200 ).json( result )
   } catch( error ){
    console.log( error )
   }   
  }

  async findAllTitleController( request, response ) {
    try{
      const { title } = request.body

      const result = await this.service.findByTitle( title )

      response.status( 200 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }

  async findAllByAuthorController( request, response ) {
    try{
      const { author } = request.body
      
      const result = await this.service.findAllByAuthor( author )

      response.status( 200 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }

  async uptadeByIdController( request, response ) {
    try{
      const { _id, title, description, releasedYear, author, category, isAvailable } = request.body

      const result = await this.service.uptadeById( _id, title, description, releasedYear, author, category, isAvailable )

      response.status( 200 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }

  async deleteByIdController( request, response ) {
    try{
      const { _id } = request.body

      const result = await this.service.deleteById( _id )

      response.status( 204 ).json( result )
    } catch( error ) {
      console.log( error )
    }
  }
}

module.exports = BookController
