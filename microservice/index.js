import 'dotenv/config';
import express from 'express';
import cors from 'cors'
import router from "./routers/index.js"
import connectDB from "./db/dbConnection.js"
const PORT = 4000;
connectDB()
const app = express();
app.use(cors());
app.use(express.json())
app.use(router);

app.listen(PORT || 4000, () => {
    console.log("server is listing on port 4000")
})
