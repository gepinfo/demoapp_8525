import { Request, Response, NextFunction } from "express";
import { testsController } from '../controller/testsController';


export class Routes {
    private tests: testsController = new testsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tests/:id').delete(this.tests.Delete);
app.route('/tests').put(this.tests.Update);
app.route('/tests').get(this.tests.GetAllValues);
app.route('/tests').post(this.tests.Create);
app.route('/tests/userid/created_by').get(this.tests.GetNounCreatedBy);
     }

}