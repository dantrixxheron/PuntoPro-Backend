import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from "../controllers/products.controller.js";
const productsRoutes = Router();

// Rutas para los productos
productsRoutes.get('/', getAllProducts);
productsRoutes.get('/:id', getProductById);
productsRoutes.post('/new', createProduct);
productsRoutes.put('/update/:id', updateProduct);
productsRoutes.delete('/delete/:id', deleteProduct);

export default productsRoutes;