import 'dotenv/config'; // Ensure environment variables are loaded
import express from 'express';
import cors from 'cors';
import categoriesRoutes from './routes/categories.routes.js';

const app = express();

app.use(cors()); // permiten que otros desarrollos se comuniquen con este servidor
app.use(express.json()); //uso de JSON

app.use('/categories',categoriesRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the PuntoPro API');
});

export default app;