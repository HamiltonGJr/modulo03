
import { connect, connection } from 'mongoose'
import 'dotenv/config'

export function initializeDatabase() {
  connection.on( "open", () => {
    console.log('Conectou com o banco de dados!')
  })
  connect(process.env.URI as string)
}