import * as Yup from 'yup'
import { Request, Response } from 'express';

import { Post } from "../models/Post";
import { PostService } from '../services/Post.Service'

export class PostController {
  service: PostService

  constructor(service: PostService) {
    this.service = service
  }

  async listPost(request: Request, response: Response) {
    try {
      const post = await this.service.listPost()

      response.send(post);
    } catch (error) {
      const { errors, message } = error as Yup.ValidationError

      response.status(400).send({ validationErrors: errors, message })
    }
  }

  async createPost(request: Request, response: Response) {
    const postSchema = Yup.object({
      title: Yup.string().required(),
      content: Yup.string().required(),
      likes: Yup.number().required()
    })

    try {
      const post = await postSchema.validate(request.body)

      const { title, content, likes } = post

      const newPost = await this.service.createPost(title, content, likes)

      response.status(201).send(newPost)
    } catch (error) {
      const { errors, message } = error as Yup.ValidationError

      response.status(400).send({ validationErrors: errors, message })
    }
  }

  async listPostById(request: Request, response: Response) {
    const postParamSchema = Yup.object({
      id: Yup.string().required()
    })

    try {
      const { id } = await postParamSchema.validate(request.params)
      const post = await Post.findById(id).exec()

      if (!post) {
        response.send({ messege: `Post with id ${id} was not found!` })
      }

      response.status(200).send(post)
    } catch (error) {
      const { errors, message } = error as Yup.ValidationError

      response.status(400).send({ validationError: errors, message })
    }
  }

  async deletePost(request: Request, response: Response) {
    const postParamSchema = Yup.object({
      id: Yup.string().required()
    })

    try {
      const { id } = await postParamSchema.validate(request.params)
      const post = await Post.findByIdAndDelete(id)

      if (!post) {
        response.send({ messege: `Post with id ${id} was not found!` })
      }

      response.status(204).send()
    } catch (error) {
      const { errors, message } = error as Yup.ValidationError

      response.status(400).send({ validationError: errors, message })
    }
  }

  async updatePost(request: Request, response: Response) {
    const postParamSchema = Yup.object({
      id: Yup.string().required()
    })

    const postSchema = Yup.object({
      title: Yup.string().required(),
      content: Yup.string().required(),
      likes: Yup.number()
    })

    try {
      const { id } = await postParamSchema.validate(request.params)
      const post = await postSchema.validate(request.body)

      const postToupdate = await Post.findByIdAndUpdate(id, post).exec()
      const updatePost = await Post.findById(id).exec()

      if (!postToupdate) {
        response.send({ messege: `Post with id ${id} was not found!` })
      }

      updatePost!.__v += 1;
      await updatePost!.save()

      response.status(200).send(updatePost)
    } catch (error) {
      const { errors, message } = error as Yup.ValidationError

      response.status(400).send({ validationError: errors, message })
    }
  }
}
