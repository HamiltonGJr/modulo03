import { Router } from 'express';
import * as Yup from 'yup';

import { Brand } from '../server';

const router = Router()

router.get('/', async (request, response) => {
  const brands = await Brand.find()
  response.send(brands)
})

router.post('/', async (request, response) => {
  const brandSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string()
  })

  try {
    const brand = await brandSchema.validate(request.body);
    const newBrand = await new Brand(brand).save();

    response.status(201).send(newBrand);

  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

router.get('/:id', async (request, response) => {
  const brandParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await brandParamSchema.validate(request.params)
    const car = await Brand.findById(id)

    if (!car) {
      response.status(204).send({ message: `Brand with id ${id} was not found!` })
    }

    response.status(200).send(car)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.delete('/:id', async (request, response) => {
  const brandParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await brandParamSchema.validate(request.params)
    const car = await Brand.findByIdAndDelete(id).exec()

    if (!car) {
      response.status(400).send({ message: `Brand with id ${id} was not found!` })
    }

    response.status(204).send(car)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.put('/:id', async (request, response) => {
  const brandParamSchema = Yup.object({
    id: Yup.string().required()
  })

  const brandSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string()
  })

  try {
    const { id } = await brandParamSchema.validate(request.params)
    const brand = await brandSchema.validate(request.body);
    const brandToUpdate = await Brand.findByIdAndUpdate(id, brand).exec()

    const uptadeBrand = await Brand.findById(id).exec()

    if (!brandToUpdate) {
      response.status(204).send({ message: `Car with id ${id} was not found!` })
    }

    uptadeBrand!.__v += 1;
    await uptadeBrand!.save()

    response.status(200).send(uptadeBrand);

  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

export default router
