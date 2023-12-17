import { CarRepository } from "../repository/RepositoryCar"

export class CarService {
  static async createCar(carro: any) {
    return CarRepository.createCar(carro)
  }

  static async uptade(placa: string) {
    return CarRepository.uptade(placa, { vendido: true })
  }

  static async findByPlaca(placa: string) {
    return CarRepository.findByPlaca(placa)
  }

  static async findAll() {
    return CarRepository.findAll()
  }

  static async findCarrosVendido(isVendido: boolean) {
    return CarRepository.findCarrosVendido(isVendido)
  }
}
