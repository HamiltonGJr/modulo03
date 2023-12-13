import { Post } from "../models/Post";

export class PostService {

  async listPost() {
    try {
      const post = await Post.find()

      return post
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }

  async createPost(title: string, content: string, likes: number) {
    try {
      const post = { title, content, likes }

      const newPost = await new Post(post).save()

      return newPost
    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }
}