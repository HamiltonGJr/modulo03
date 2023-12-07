
import { Schema, model } from 'mongoose'

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: Number
})

export const User = model( 'user', UserSchema )
