
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const testsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   mail: { type: String }
})

const testsModel = mongoose.model('tests', testsSchema, 'tests');
export default testsModel;
