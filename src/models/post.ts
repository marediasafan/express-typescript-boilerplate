import logger from "../components/logger";
import { Model } from "objection";

class PostModel extends Model {
  static tableName: string = 'posts';

  static getTableName() : string {
    return this.tableName;
  }

  // get list of posts from db
  static async getAllPosts(): Promise<PostModel[]> {
    try {
      return PostModel.query().select('id', 'content', 'createdAt').where({active: 1});
    } catch (ex) {
      logger.error(`Exception thrown for getAllPosts, error: ${ex}`);
      return undefined;
    }
  }


  // get post by ID from db
  static async getPost(post_id: number): Promise<PostModel> {
    try {
      const post: PostModel[] = await PostModel.query().select('id', 'content', 'createdAt', 'updatedAt').where({active: 1, id: post_id})
      return post[0];
    } catch (ex) {
      logger.error(`Exception thrown for getPost, error: ${ex}`);
      return undefined;
    }
  }

  static async getPostReplies(post_id: number): Promise<PostModel[]> {
    try {
      const parent_post: any = await PostModel.getPost(post_id);

      const leftParent = parent_post.left;
      const rightParent = parent_post.right;

      // based on left and right get all the replies using query
      const postReplies = [];  // from select query

      // iterate and write logic to return tree based replies
      
      // sample example output
      // [{
      //   "id": 1,
      //   "content": "Do you prefer cats or dogs?",
      //   "replies": [{
      //     "id": 2,
      //     "content": "I like cats",
      //     "replies": [{
      //       "id": 4,
      //       "content": "Why",
      //       "replies": [{}]
      //     }]
      //     // ... and so on
      //   }]
      // }]

      return [];
    } catch (ex) {
      // console.log(ex);
      logger.error(`Exception thrown for getPost, error: ${ex}`);
      return undefined;
    }
  }
}

export default PostModel;