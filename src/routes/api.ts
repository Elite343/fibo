import { Router } from 'express';
import fiboRouter from './fibo-router';

// Base-router
const baseRouter = Router();
baseRouter.use('/fibonacci', fiboRouter);

export default baseRouter;
