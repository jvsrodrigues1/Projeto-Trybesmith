import express from 'express';
import productRoute from './router/product.route';

const app = express();

// push!!

app.use(express.json());
app.use('/products', productRoute);

export default app;
