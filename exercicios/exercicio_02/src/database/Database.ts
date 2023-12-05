
import { connect, connection } from "mongoose";
import 'dotenv/config'

export const conexao = async () => {
  try {
    connection.on( 'open', () => {
      console.log("!!Conectado ao banco de dados - Projeto Transações!!")
    })

    await connect(process.env.URI as string)
  } catch (error) {
    console.log(error)
  }
}
