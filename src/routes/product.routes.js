import { Router } from "express";
import { getProducts , createProduct, updateProduct, deleteProduct, getProduct} from "../controllers/product.controller.js";
const router = Router()

router.get('/product', getProducts)
router.post('/product', createProduct)
router.put('/product/:handle', updateProduct)
router.delete('/product/:handle',deleteProduct )
router.get('/product/:handle', getProduct)

export default router