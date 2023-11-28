
class Book {
  constructor( title, description, releasedYear, author, category, isAvailable ) {
    this.title = title,
    this.description = description,
    this.releasedYear = releasedYear,
    this.author = author,
    this.category = category, 
    this.isAvailable = isAvailable
    this.createAt = new Date()
  }
}

module.exports = Book
