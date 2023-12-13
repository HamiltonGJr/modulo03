import { model, connect } from 'mongoose';
import express from 'express';

import { brandSchema } from './models/Brand';
import { carSchema } from './models/Car';

import app from './app';

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/mongoose';
const port = 3333;

export const Car = model('car', carSchema);
export const Brand = model('brand', brandSchema);

(async () => {
  try {
    await connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    app.listen(port, () => {
      console.log(`!!Ouvindo a porta ${port}!!`)
    })
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
