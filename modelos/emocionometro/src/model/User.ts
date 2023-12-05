
import { Schema, model } from 'mongoose'

const UserSchea = new Schema ({
  name: { type: String, required: true},
  bio: { type: String, maxLength: 200},
  feelings: {
    date: { type: Date, required: true },
    value: { type: Number, min: 0, max: 5}
  }
})

export const User = model( 'User', UserSchea )
