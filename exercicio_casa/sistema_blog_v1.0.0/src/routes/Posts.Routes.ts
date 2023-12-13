import { Router } from 'express';

import { PostController } from '../controllers/Post.Controller'
import { PostService } from '../services/Post.Service';

const router = Router()

const postService = new PostService()
const postController = new PostController(postService)

router.get('/', postController.listPost.bind(postController))

router.post('/', postController.createPost.bind(postController))

router.get('/:id', postController.listPostById.bind(postController))

router.delete('/:id', postController.deletePost.bind(postController))

router.put('/:id', postController.updatePost.bind(postController))

export default router
