
import { connect, connection } from 'mongoose'
import 'dotenv/config'

export async function Conexao() {
  try {
    connection.on( 'open', () => {
      console.log("!!Conectado ao banco de dados - Controle de Estoque!!")
    })
    
    await connect(process.env.URI as string)
  } catch( error ) {
    console.log( error )
  } 
}
