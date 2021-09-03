import PostModel from "../models/post";
import { Request, Response } from "express";

class PostsController {

    /**
     * Get list of all posts
     * @param request 
     * @param response 
     */
    static async getAll(request: Request, response: Response): Promise<void> {
        const posts: PostModel[] = await PostModel.getAllPosts();
        response.json({data: posts, total: posts.length});
    }
    
    
    /**
     * Get specific post data
     * @param request 
     * @param response 
     */
    static async get(request: Request, response: Response): Promise<void> {
        if (!request.params.hasOwnProperty('id')) {
            response.status(400);
            response.json({code: 400, message: 'Param Id is required.'});
        }

        const post_id: number = parseInt(request.params.id);
        const post: any = await PostModel.getPost(post_id);

        // get all replies to the post
        const replies = await PostModel.getPostReplies(post_id);
        post['replies'] = replies; 
        response.json({post});
    }
}

export default PostsController;