import  express  from "express";
 
import { getOneProduct, getProducts } from "../controllers/productController.js";


const router = express.Router();

//TODOS LOS PRODUCTOS
router.get('/products/all', getProducts)

//UN PRODUCTO
router.get('/products/:id', getOneProduct)

export default router