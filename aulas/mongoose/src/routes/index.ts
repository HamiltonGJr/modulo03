import { Router } from 'express';

import carsRoutes from './cars.routes';
import brandsRoutes from './brands.routes';

const routes = Router()

routes.use('/cars', carsRoutes)
routes.use('/brands', brandsRoutes)

export default routes
