import mongoose from 'mongoose'

interface ICar {
  marca: string
  modelo: string
  placa: string
  cor: string
  eUsado: boolean
  ano: number
  vendido: boolean
}

const CarSchema = new mongoose.Schema<ICar>({
  marca: String,
  modelo: String,
  placa: String,
  cor: String,
  eUsado: Boolean,
  ano: Number,
  vendido: Boolean
})

export const Car = mongoose.model<ICar>('carros', CarSchema)
