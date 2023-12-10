import { model, connect } from 'mongoose';

import express from 'express';

import { userSchema } from './models/User';
import { postSchema } from './models/Post';

import routes from './routes/index';

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/sistema_blog';

export const Post = model('post', postSchema);
export const User = model('user', userSchema);

(async () => {
  try {
    await connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const app = express()
    const port = 3333
    app.use(express.json())

    app.use(routes)

    app.listen(port, () => {
      console.log(`!!Ouvindo a porta ${port}!!`)
    })
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
