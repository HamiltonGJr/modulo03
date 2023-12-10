import { Router, request, response } from 'express';
import * as Yup from 'yup';

import { User } from '../index'

const router = Router()

router.get('/', async (request, response) => {
  try {
    const user = await User.find().populate('post').exec()

    response.send(user);
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

router.post('/', async (request, response) => {
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
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.get('/:id', async (request, response) => {
  const userParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await userParamSchema.validate(request.params)
    const user = await User.findById(id).populate('post').exec()

    if (!user) {
      response.status(204).send({ messege: `User with id ${id} was not found!` })
    }

    response.status(200).send(user)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.delete('/:id', async (request, response) => {
  const userParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await userParamSchema.validate(request.params)
    const user = await User.findByIdAndDelete(id)

    if (!user) {
      response.status(400).send({ messege: `User with id ${id} was not found!` })
    }

    response.status(204).send()
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.put('/:id', async (request, response) => {
  const userParamSchema = Yup.object({
    id: Yup.string().required()
  })

  const userSchema = Yup.object({
    fullname: Yup.string().required(),
    nickname: Yup.string().required(),
    email: Yup.string(),
    password: Yup.number().required(),
    post: Yup.string()
  })

  try {
    const { id } = await userParamSchema.validate(request.params)
    const user = await userSchema.validate(request.body)

    const userToUpdate = await User.findByIdAndUpdate(id, user).exec()
    const updateUser = await User.findById(id).exec()

    if (!userToUpdate) {
      response.status(204).send({ messege: `User with id ${id} was not found!` })
    }

    updateUser!.__v += 1;
    await updateUser!.save()

    response.status(200).send(updateUser)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

export default router
