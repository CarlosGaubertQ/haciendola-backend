import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js"
const app = express()

app.use(express.json())

app.use(productRoutes)
app.use(userRoutes)

export default app