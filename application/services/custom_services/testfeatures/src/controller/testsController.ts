import { Request, Response } from 'express';
import { testsService } from '../service/testsService';
import { CustomLogger } from '../config/Logger'
let tests = new testsService();

export class testsController {
    
    constructor() { }
    
    public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tests.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testsController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testsController.ts: Delete');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tests.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testsController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testsController.ts: Update');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tests.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testsController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testsController.ts: GetAllValues');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tests.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testsController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testsController.ts: Create');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    tests.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testsController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testsController.ts: GetNounCreatedBy');
    })}


}