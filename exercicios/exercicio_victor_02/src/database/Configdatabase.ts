
import 'dotenv/config'

import { connect, connection } from 'mongoose'

export const conexao = async () => {
  try {
    connection.on('open', () => {
      console.log('!Conectado ao banco de dados - Projeto User!')
    })

    await connect(process.env.URI as string)
  } catch (error) {
    console.log(error)
  }
}
