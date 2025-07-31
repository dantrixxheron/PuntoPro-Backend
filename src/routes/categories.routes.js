import {Router} from 'express';
import { createCategory, getAllCategories, updateCategory, deleteCategory } from '../controllers/categories.controller.js';

const categoriesRoutes = Router();

// Rutas para las categorias
categoriesRoutes.get('/', getAllCategories);
categoriesRoutes.post('/new', createCategory);
categoriesRoutes.put('/update/:id', updateCategory);
categoriesRoutes.delete('/delete/:id', deleteCategory);

export default categoriesRoutes;