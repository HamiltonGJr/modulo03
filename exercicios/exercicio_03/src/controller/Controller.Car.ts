import { Request, Response } from 'express'
import { CarService } from "../service/Service.Car";

export class CarController {
  async criarCarro(req: Request, res: Response) {
    try {
      const carro = await CarService.createCar(req.body)
      res.json(carro)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async atualizarVendido(req: Request, res: Response) {
    try {
      const { placa } = req.params

      const carro = await CarService.uptade(placa)

      res.json(carro)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarPorPlaca(req: Request, res: Response) {
    try {
      const { placa } = req.params

      const carro = await CarService.findByPlaca(placa)

      res.json(carro)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async buscarTodos(req: Request, res: Response) {
    try {
      const carros = await CarService.findAll()

      res.json(carros)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async vendidos(req: Request, res: Response) {
    try {
      const { vendido } = req.params

      const carrosVendidos = await CarService.findCarrosVendido(vendido === 'true')

      res.json(carrosVendidos)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
