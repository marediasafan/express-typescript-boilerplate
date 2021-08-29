import {Request, Response} from 'express';

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
  health(req: Request, res: Response): void {
    res.json({status: 'active', message: 'All services are operational'});
  }
}

const index = new IndexController();
export default index;