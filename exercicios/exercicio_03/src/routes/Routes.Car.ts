import { Router } from 'express'
import { CarController } from '../controller/Controller.Car'

const router = Router()

const carroController = new CarController()

router.post('/', async (req, res) => carroController.criarCarro(req, res))

router.put('/carro/:placa', async (req, res) => carroController.atualizarVendido(req, res))

router.get('/carro/:placa', async (req, res) => carroController.buscarPorPlaca(req, res))

router.get('/carro', async (req, res) => carroController.buscarTodos(req, res))

router.get('/carro/:vendido', async (req, res) => carroController.vendidos(req, res))

export default router
