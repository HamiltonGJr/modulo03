
import express from 'express'
import { conexao } from './database/Database'

import 'dotenv/config'

import { Transacao } from './model/Transaction'
import { TransacaoRepository } from './repository/Repository'
import { TransacaoService } from './service/Service'
import { TransacaoController } from './controller/Controller'

const transacaoRepository = new TransacaoRepository( Transacao )
const transacaoService = new TransacaoService( transacaoRepository )
const transacaoController = new TransacaoController( transacaoService )

const app = express()

conexao();

app.use( express.json() )

app.post( '/transacoes', async ( request, response ) => {
  await transacaoController.registroTransacaoController( request, response ) 
})

app.listen( process.env.PORT, () => console.log( "!!Servidor esta rodando - Projeto Transações!!" ) )
