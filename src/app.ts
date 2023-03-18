import express from 'express';
import productRoute from './router/product.route';
import userRoute from './router/user.route';

const app = express();

// push!!

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
