
const express = require("express")

const { client, orderCollection } = require( './database/configDataBase' )
const { MongoOrderRepository } = require( './repository/mongoPedidoRepository' )
const { OrderService } = require( './service/pedidoService' )
const OrderController  = require('./controller/orderController')

const orderRepository = new MongoOrderRepository( orderCollection )
const orderService = new OrderService( orderRepository )
const orderControler = new OrderController( orderService )

client.connect()

const app = express()
app.use(express.json())

app.get('/delivery', async (request, response) => {
  orderControler.findAll(request, response)
})

app.post('/delivery', async (request, response) => {
  orderControler.create(request, response)
})

app.listen(3333, console.log("Conectado na porta 3333"))
