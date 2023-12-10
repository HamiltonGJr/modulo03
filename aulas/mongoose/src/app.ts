import { model, connect } from 'mongoose';
import express from 'express';

import { brandSchema } from './models/Brand';
import { carSchema } from './models/Car';

import routes from './routes/index';

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/mongoose';

export const Car = model('car', carSchema);
export const Brand = model('brand', brandSchema);

(async () => {
  try {
    await connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const app = express()
    const port = 3333
    app.use(express.json())

    app.use(routes)

    app.listen(port, () => {
      console.log(`!!O app de exemplo esta ouvindo a porta ${port}!!`)
    })
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
