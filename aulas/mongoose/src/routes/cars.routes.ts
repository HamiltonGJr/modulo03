import { Router, request, response } from 'express';
import * as Yup from 'yup';

import { Car } from '../server';

export const router = Router()

router.get('/', async (request, response) => {
  const cars = await Car.find().populate('brand').exec()
  response.send(cars)
})

router.post('/', async (request, response) => {
  const carSchema = Yup.object({
    model: Yup.string().required(),
    year: Yup.number().required().positive(),
    color: Yup.string(),
    fuel: Yup.string(),
    brand: Yup.string().required()
  })

  try {
    const car = await carSchema.validate(request.body)
    const newCar = await new Car(car).save()
    const carWithBrand = await newCar.populate('brand')

    response.status(201).send(carWithBrand)
  } catch (error) {
    const { errors } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors })
  }
})

router.get('/:id', async (request, response) => {
  const carParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await carParamSchema.validate(request.params)
    const car = await Car.findById(id).populate('brand').exec()

    if (!car) {
      response.status(204).send({ message: `Car with id ${id} was not found!` })
    }

    response.status(200).send(car)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.delete('/:id', async (request, response) => {
  const carParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await carParamSchema.validate(request.params)
    const car = await Car.findByIdAndDelete(id).exec()

    if (!car) {
      response.status(400).send({ message: `Car with id ${id} was not found!` })
    }

    response.status(204).send()
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

router.put('/:id', async (request, response) => {
  const carParamSchema = Yup.object({
    id: Yup.string().required()
  })

  const carSchema = Yup.object({
    model: Yup.string().required(),
    year: Yup.number().required().positive(),
    color: Yup.string(),
    fuel: Yup.string(),
    brand: Yup.string().required()
  })

  try {
    const { id } = await carParamSchema.validate(request.params)
    const car = await carSchema.validate(request.body);
    const carToUpdate = await Car.findByIdAndUpdate(id, car).exec()

    const uptadeCar = await Car.findById(id).exec()

    if (!carToUpdate) {
      response.status(204).send({ message: `Car with id ${id} was not found!` })
    }

    uptadeCar!.__v += 1;
    await uptadeCar!.save()

    response.status(200).send(uptadeCar);
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationErrors: errors, message })
  }
})

router.get('/brand/:brandId', async (request, response) => {
  const carParamSchema = Yup.object({
    id: Yup.string().required()
  })

  try {
    const { id } = await carParamSchema.validate(request.params)
    const car = await Car.findById(id).populate('brand').exec()

    if (!car) {
      response.status(204).send({ message: `Car with id ${id} was not found!` })
    }

    response.status(200).send(car)
  } catch (error) {
    const { errors, message } = error as Yup.ValidationError

    response.status(400).send({ validationError: errors, message })
  }
})

export default router
