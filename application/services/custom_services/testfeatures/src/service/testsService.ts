import { Request, Response } from 'express';
import {testsDao} from '../dao/testsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';











let tests = new testsDao();

export class testsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testsService.ts: Delete')
     let  testsId = req.params.id;
     tests.Delete(testsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testsService.ts: Update')
     let  testsData = req.body;
     tests.Update(testsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testsService.ts: GetAllValues')
     
     tests.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testsService.ts: Create')
     let  testsData = req.body;
     tests.Create(testsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testsService.ts: GetNounCreatedBy')
     let  testsData = { created_by: req.query.createdby };
     tests.GetNounCreatedBy(testsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}