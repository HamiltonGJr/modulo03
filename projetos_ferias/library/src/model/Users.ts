import mongoose from 'mongoose'
import { IUsers } from '../entities/IUsers'

const usersSchema = new mongoose.Schema<IUsers>({
  fullname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  borrowedBooks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'books'
  }
})

export const Users = mongoose.model<IUsers>('users', usersSchema)