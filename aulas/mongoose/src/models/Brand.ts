import { Schema } from 'mongoose'

export const brandSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})
