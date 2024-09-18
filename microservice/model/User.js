import mongoose from 'mongoose';
const ObjectId = Schema.ObjectId;

const userSchema = new mongoose.Schema({
  id: {
   type: ObjectId,
  },
  userName: { type: String, required: true},
  email: {type :String, required: true},
  password: {type : String, required: true},
}); 
export const User = mongoose.model("User",userSchema )