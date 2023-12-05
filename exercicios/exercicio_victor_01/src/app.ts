
import express  from 'express'
import { Conexao } from './database/configDatabase'

import 'dotenv/config'

import { Estoque } from './model/Estoque'
import { EstoqueRepository } from './repository/repositoryEstoque'
import { EstoqueService } from './service/serviceEstoque'
import { EstoqueController } from './controller/controllerEstoque'

const estoqueRepository = new EstoqueRepository( Estoque )
const estoqueService = new EstoqueService( estoqueRepository )
const estoqueController = new EstoqueController( estoqueService )

const app = express()
app.use( express.json() )

Conexao()

app.post( '/estoque',async ( resquest, response ) => {
  await estoqueController.registroEstoqueController( resquest, response )
})

app.listen( process.env.PORT, () => console.log( '!!Servidor esta rodando - Projeto Transações!!' ))
