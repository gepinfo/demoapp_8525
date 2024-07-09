import * as mongoose from 'mongoose';
import testsModel from '../models/daomodels/tests';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class testsDao {
    private tests = testsModel;

    

    constructor() { }
    
    public async Delete(testsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testsDao.ts: Delete');

    

    
    
    
    this.tests.findByIdAndRemove(testsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(testsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testsDao.ts: Update');

    

    
    
    
    this.tests.findOneAndUpdate({ _id: testsData._id }, testsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into testsDao.ts: GetAllValues');

    

    
    
    
    this.tests.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(testsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testsDao.ts: Create');

    let temp = new testsModel(testsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(testsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.tests.aggregate(([
                        { $match: { $and: [{ created_by: testsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from testsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}