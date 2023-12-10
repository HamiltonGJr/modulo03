import { Schema, model } from 'mongoose'

export const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  content: {
    type: String,
    required: true,
    minLength: 3
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

// export const Post = model('post', postSchema)
