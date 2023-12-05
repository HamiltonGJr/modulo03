
import { Schema, model } from 'mongoose'

export const EstoqueSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  quantidade: {
    type: Number
  },
  criadoEm: {
    type:Date
  }
})

export const Estoque = model( 'controle_estoque', EstoqueSchema)
