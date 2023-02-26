import express from "express"
import dotenv from "dotenv"
import { route } from "./router/router.js"

const PORT = process.env.PORT || 5001
const app = express()

dotenv.config()

app.use(express.json())

app.use("/aws", route)

app.listen(PORT, () => {
    console.log("App running at port " + PORT)
})