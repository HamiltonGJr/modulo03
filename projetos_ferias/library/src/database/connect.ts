import { connect, connection } from 'mongoose'

async function conectDatabase() {
  connection.on("open", () => {
    console.log("Conectado ao MongoDB")
  })

  await connect(process.env.MONGO_URI as string)
}

export default conectDatabase
