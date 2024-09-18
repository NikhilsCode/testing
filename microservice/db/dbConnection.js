import mongoose from 'mongoose';
import {UserDB} from '../asset/contant.js'
const  connectDB = async ( )=> {
try {
      const connectionInstance =         mongoose.connect(`${process.env.MONGODB_URL}/${UserDB}`)
      console.log("Data base is connected")
}
catch (e) {
    console.error(e);
}
}
export default connectDB;