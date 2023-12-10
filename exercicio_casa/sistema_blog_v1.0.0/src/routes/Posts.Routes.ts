import { Router, request, response } from 'express';
import * as Yup from 'yup';

import { Post } from '../index';

const router = Router()

router.get('/', async (request, response) => {
  try {
    const post = await Post.find()

    response.send(post);
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

router.post('/', async (request, response) => {
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
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

router.get('/:id', async (request, response) => {
  const postParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await postParamSchema.validate(request.params)
    const post = await Post.findById(id).exec()

    if (!post) {
      response.status(204).send({ messege: `Post with id ${id} was not found!` })
    }

    response.status(200).send(post)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.delete('/:id', async (request, reponse) => {
  const postParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await postParamSchema.validate(request.params)
    const post = await Post.findByIdAndDelete(id)

    if (!post) {
      response.status(400).send({ messege: `Post with id ${id} was not found!` })
    }

    response.status(204).send()
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.put('/:id', async (request, response) => {
  const postParamSchema = Yup.object({
    id: Yup.string().required()
  })

  const postSchema = Yup.object({
    title: Yup.string().required(),
    content: Yup.string().required(),
    likes: Yup.number()
  })

  try {
    const { id } = await postParamSchema.validate(request.params)
    const post = await postSchema.validate(request.body)

    const postToupdate = await Post.findByIdAndUpdate(id, post).exec()
    const updatePost = await Post.findById(id).exec()

    if (!postToupdate) {
      response.status(204).send({ messege: `Post with id ${id} was not found!` })
    }

    updatePost!.__v += 1;
    await updatePost!.save()

    response.status(200).send(updatePost)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

export default router
