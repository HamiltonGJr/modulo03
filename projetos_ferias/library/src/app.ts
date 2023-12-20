import express from "express"
import dotenv from "dotenv"
import connectDatabase from "./database/connect"
import router from "./routes/routes";

dotenv.config();

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())

app.use(router)

connectDatabase();


app.listen(port, () => {
  console.log(`Servidor escutando a porta ${port}`);
});