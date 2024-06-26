import 'dotenv/config'
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"
import cors from "cors";
const app = express()

app.use(cors())
app.use(express.json())

app.use(productRoutes)
app.use(userRoutes)

export default app