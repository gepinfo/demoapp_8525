
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const testSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   user_name: { type: String },
   first_name: { type: String }
})

const testModel = mongoose.model('test', testSchema, 'test');
export default testModel;
