import logger from "../components/logger";
import { Model } from "objection";

/**
 * A model for User controller
 */
 class UserModel extends Model {

  static tableName: string = 'users';

  static get (id: number) : Promise<UserModel | undefined> {
    try {
      return UserModel.query().findById(id);
    } catch (ex) {
      logger.error(`Get by User Id Exception thrown: ${ex.message}`);
      return undefined;
    }
  }

  static getAll () : Promise<UserModel[] | undefined> {
    try {
      return UserModel.query();
    } catch (ex) {
      logger.error(`Get All User Exception thrown: ${ex.message}`);
      return undefined;
    }
  }
}
  
export default UserModel;
export {UserModel};
  