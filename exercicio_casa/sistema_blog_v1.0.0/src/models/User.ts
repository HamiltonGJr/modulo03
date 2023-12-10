import { Schema, model } from 'mongoose'

export const userSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: new Date()
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post'
  }
})

// export const User = model('user', userSchema)
