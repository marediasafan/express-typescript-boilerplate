import UserModel from '../models/user';
import {Request, Response} from 'express';

class UserController {

  /**
   * Get specific user
   * @param req The Request
   * @param res The Response
   */
  async get(req: Request, res: Response): Promise<void> {
    if (!req.params.hasOwnProperty('id')) {
      res.status(400);
      res.send({code: 400, type: 'BadRequest', message: 'Required param ID is missing'});
    }

    const id: number = parseInt(req.params.id);
    const users = await UserModel.get(id);

    if (!users) {
      res.status(404);
      res.send({code: 404, type: 'NotFound', message: 'User not found.'});
    }

    res.json(users);
  }

  /**
   * Get list of users
   * @param req The Request
   * @param res The Response
   */
  async getAll(req: Request, res: Response): Promise<void> {
    const users = await UserModel.getAll();
    res.json(users);
  }
}

const user = new UserController();
export default user;