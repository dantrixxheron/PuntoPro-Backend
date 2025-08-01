import { Router } from 'express';
import { createCompany, getCompanyById, updateCompany, deleteCompany } from '../controllers/companies.controller.js';

const companiesRoutes = Router();

// Rutas para las compañías
companiesRoutes.get('/:id', getCompanyById);
companiesRoutes.post('/new', createCompany);
companiesRoutes.put('/update/:id', updateCompany);
companiesRoutes.delete('/delete/:id', deleteCompany);

export default companiesRoutes;