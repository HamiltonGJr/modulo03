import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import router from './routes/Routes.Car'

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/carrossistema';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/carros', router);

mongoose.connect(uri)
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3000, () => {
      console.log(`Servidor rodando`);
    });
  })
  .catch((error) => console.error('Erro ao conectar'))
