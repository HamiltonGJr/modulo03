import mongoose from 'mongoose'
import { IBooks } from '../entities/IBooks'

const booksSchema = new mongoose.Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  releasedYear: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  coverPicture: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  loanedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})


export const Books = mongoose.model<IBooks>('books', booksSchema)