
import {Schema, model} from 'mongoose'

export const carSchema = new Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  fuel: {
    type: String,
    default: "Flex"
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  brand:{
    type: Schema.Types.ObjectId,
    ref: 'brand'
  }
})

export const Car = model('car', carSchema)
