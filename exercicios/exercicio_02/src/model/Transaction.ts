
import mongoose, { Schema } from "mongoose";

export const TransacaoSchema = new Schema({
  valor:{
    type: Number
    // required: true
  },
  descricao: {
    type: String
  }, 
  tipo: {
    type: String
    // required: true 
  },
  dataCriacao: {
    type: Date,
    default: new Date()
  }, 
  dataCancelado: {
    type: Date
  } 
});

export const Transacao = mongoose.model('transacao_projeto', TransacaoSchema)
