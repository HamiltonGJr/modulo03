import { model, connect } from 'mongoose'

import express, { request, response } from 'express'
import * as Yup from 'yup'

import { User } from './models/User'
import { postSchema } from './models/Post'

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/sistema_blog';

(async () => {
  try {
    await connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const app = express()
    const port = 3333
    app.use(express.json())

    const Post = model('post', postSchema)

    // USER
    app.get('/users', async (request, response) => {
      const user = await User.find().populate('post').exec()

      response.send(user);
    })

    app.post('/users', async (request, response) => {
      const userSchema = Yup.object({
        fullname: Yup.string().required(),
        nickname: Yup.string().required(),
        email: Yup.string(),
        password: Yup.number().required(),
        post: Yup.string()
      })

      try {
        const user = await userSchema.validate(request.body)
        const newUser = await new User(user).save()
        const userWithPost = await newUser.populate('post')

        response.status(201).send(userWithPost)
      } catch (error) {
        const { errors } = error as Yup.ValidationError

        response.status(400).send({ validationError: errors })
      }
    })

    // POST
    app.get('/posts', async (request, response) => {
      const post = await Post.find()

      response.send(post);
    })

    app.post('/posts', async (request, response) => {
      const postSchema = Yup.object({
        title: Yup.string().required(),
        content: Yup.string().required(),
        likes: Yup.number()
      })

      try {
        const post = await postSchema.validate(request.body)
        const newPost = await new Post(post).save()

        response.status(201).send(newPost)
      } catch (error) {
        const { errors } = error as Yup.ValidationError

        response.status(400).send({ validationErrors: errors })
      }
    })

    app.listen(port, () => {
      console.log(`!!O app de exemplo esta ouvindo a porta ${port}!!`)
    })
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
