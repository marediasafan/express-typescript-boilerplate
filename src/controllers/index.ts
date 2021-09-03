import {Request, Response} from 'express';
import { Model } from 'objection';

class IndexController {

  /**
   * home page request
   * @param req The Request
   * @param res The Response
   */
  home(req: Request, res: Response): void {
    res.send('Welcome to the Demo Application powered by Express');
  }  
  
  /**
   * system health check
   * @param req The Request
   * @param res The Response
   */
  async health(req: Request, res: Response): Promise<void> {
    const result = {
      status: 'healthy',
      message: 'Service is active'
    };

    try {
      const tables: any[] = await Model.knex().raw('SHOW TABLES');
      if (tables.length == 0) {
        result.status = 'unhealthy';
        result.message = `DB Error: No tables found.`
      }
    } catch (ex) {
      result.status = 'unhealthy';
      result.message = `DB Error: ${ex.message}`
    }

    res.json(result);
  }
}

const index = new IndexController();
export default index;