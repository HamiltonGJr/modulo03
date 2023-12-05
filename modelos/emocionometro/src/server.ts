
import express from 'express'
import 'dotenv/config'
import { initializeDatabase } from './database/connection'

const app = express()

initializeDatabase()

app.listen( process.env.PORT, () => console.log( "Servidor esta rodando" ) )
