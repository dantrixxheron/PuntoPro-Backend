import 'dotenv/config'; // Ensure environment variables are loaded
import express from 'express';
import cors from 'cors';
import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/products.routes.js';
import companiesRoutes from './routes/companies.routes.js';

const app = express();

app.use(cors()); // permiten que otros desarrollos se comuniquen con este servidor
app.use(express.json()); //uso de JSON

app.get('/', (req, res) => {
    res.send('Welcome to the PuntoPro API');
});
app.use('/categories',categoriesRoutes);
app.use('/products',productsRoutes);
app.use('/companies', companiesRoutes);

export default app;