import { Router } from 'express';

import userRoutes from './Users.Routes';
import postRoutes from './Posts.Routes';

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)

export default routes
