
import mongoose, { Schema } from 'mongoose';
import { Brand } from './model/Brand'
import { Car } from './model/Car'

const uri = "mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/?retryWrites=true&w=majority";

(async () => {
    try{
      await mongoose.connect(uri)

      // const fiat = await new Brand({
      //   title: "Fiat",
      //   description: "Fabrica Italiana de Automoveis",
      // })  

      // const volkswagem = await new Brand({
      //   title: "Volkswagem",
      //   description: "Fabrica Italiana de Automoveis",
      // })

      // const carro01 = await new Car({
      //   model: "Uno",
      //   year: 2023,
      //   color: "Branco",
      //   fuel: "Gasolina",
      //   brand: '65667718ddf67a8eef613d47'
      // })

      // const carro02 = await new Car({
      //   model: "Teste",
      //   year: 1900,
      //   color: "Preto",
      //   fuel: "Alcool",
      //   brand: '65667718ddf67a8eef613d49'
      // })


      // const carros = await Car.find().populate('brand').exec()
      // console.log( carros )

      // const carro01 = await new Car({
      //   model: 'Fiat Uno',
      //   year: 2000,
      //   fuel: "gasolina",
      //   color: "Cinza"
      // }).save()


      // const carro02 = await new Car({
      //   model: "Porshe 911",
      //   color: "Verde",
      //   year: 2018,
      // }).save()

      // const carros = await Car.find()

      // const updateCamaro = await Car.updateOne( { model: "Chevrolet" }, {
      //   year: 2012,
      //   fuel: "Gasolina"
      // })

      // console.log( carro01 )

      console.log('Connectado ao Banco de Dados!')
    } catch( error ) {
      console.log( `ERROR: ${error}` )
    }
})()
