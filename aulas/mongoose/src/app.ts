import mongoose, { model } from 'mongoose'
import { Car } from './models/Car'
import { brandSchema } from './models/Brand'

const uri = 'mongodb+srv://Hamil2708:0413262772621340@projeto01.w0uofae.mongodb.net/mongoose';

(async () => {
  try {
    await mongoose.connect(uri)
    console.log('!!Conectado ao Banco de Dados!!')

    const Brand = model('brand', brandSchema)

    // CADASTRAR ALGUMA MARCA
    // const newBrand = await new Brand({
    //   title: 'VOLKSWAGEN',
    //   description: 'Fabrica Alemã de Automoveis'
    // }).save()
    // console.log(newBrand)

    // LISTAR AS MARCAS
    // const marcas = await Brand.find()
    // console.log(marcas)


    // CADASTRAR ALGUM FUSCA
    // const newFusca = await new Car({
    //   model: 'Gol',
    //   color: 'Prata',
    //   year: 1995,
    //   fuel: 'Gasolina',
    //   brand: '65751aa9f4ad19a000e6ef71'
    // }).save()
    // console.log(newFusca)

    // ATUALIZAR ALGUMA INFORMAÇÃO 
    // const updateFusca = await Car.updateOne(
    //   { model: 'VW Fusca' },
    //   { year: 1985 }
    // )
    // console.log(`Fusca AUALIZADO: ${updateFusca}`)

    // LISTAR OS FUSCAS
    const fuscas = await Car.find().populate('brand').exec()
    console.log(fuscas)
  } catch (error) {
    console.log(`ERRO! ${error}`)
  }
})()
