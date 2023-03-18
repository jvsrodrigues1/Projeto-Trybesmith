import express from 'express';
import 'express-async-errors';
import productRoute from './router/product.route';
import userRoute from './router/user.route';
import orderRoute from './router/order.route';
import loginRoutes from './router/login.route';
import httpErrors from './middlewares/http.middleware';

const app = express();

// push!!!!

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
app.use('/login', loginRoutes);
app.use(httpErrors);

export default app;
