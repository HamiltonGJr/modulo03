import { Car } from "../model/Car"


export class CarRepository {
  static async createCar(carro: any) {
    return Car.create(carro)
  }

  static async uptade(placa: string, carro: any) {
    return Car.findOneAndUpdate({ placa }, carro, { new: true })
  }

  static async findByPlaca(placa: string) {
    return Car.findOne({ placa })
  }

  static async findAll() {
    return Car.find()
  }

  static async findCarrosVendido(isVendido: boolean) {
    return Car.find({ vendido: isVendido })
  }
}
