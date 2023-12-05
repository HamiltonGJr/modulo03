
import express, { request, response } from "express"

const app = express()

app.use( express.json() )

app.post( '/orders', async ( request, response ) => {
  console.log(request.body)
})

app.listen(3333, () => console.log("Server is running!"))
