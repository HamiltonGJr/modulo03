import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

export const User = model('user', userSchema)
