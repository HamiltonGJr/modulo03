import mongoose, { model } from 'mongoose'

import express, { request, response } from 'express'
import * as Yup from 'yup'

import { Car } from './models/Car'
import { brandSchema } from './models/Brand'

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/mongoose';

(async () => {
  try {
    await mongoose.connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const app = express()
    const port = 3333
    app.use(express.json())

    const Brand = model('brand', brandSchema)

    // CARS
    app.get('/cars', async (request, response) => {
      const cars = await Car.find().populate('brand').exec()
      response.send(cars)
    })

    app.post('/cars', async (request, response) => {
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

    // BRANDS
    app.get('/brands', async (request, response) => {
      const brands = await Brand.find()
      response.send(brands)
    })

    app.post('/brands', async (request, response) => {
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

    app.listen(port, () => {
      console.log(`!!O app de exemplo esta ouvindo a porta ${port}!!`)
    })
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
