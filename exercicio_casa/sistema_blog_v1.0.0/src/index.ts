import { model, connect } from 'mongoose'
import { User } from './models/User'
import { postSchema } from './models/Post'

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/sistema_blog';

(async () => {
  try {
    await connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const Post = model('post', postSchema)

    // CADASTRAR USER:
    // const newUser = await new User({
    //   fullname: 'Hamilton Gonçaalves',
    //   nickname: 'HamilEVini',
    //   email: 'hamilton27089@gmail.com',
    //   password: 123654789,
    //   post: '6575349fa051a5f656d12989'
    // }).save()
    // console.log(newUser)

    // CADASTRAR POST:
    // const newPost = await new Post({
    //   title: 'Aprendendo na marra!',
    //   content: 'Eu estou tentando acompnhar as aulas atrasadas, mas o rolê esta tenso',
    //   linkes: 1
    // }).save()
    // console.log(newPost)

    // LISTAR USERS E SEUS POSTS:
    // const userPosts = await User.find().populate('post').exec()
    // console.log(userPosts)
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
