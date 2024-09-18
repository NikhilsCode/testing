import { Router } from "express";
const authrouter = Router();
import { loginAuthPost, signUpAuthPost } from "../constrollers/authController.js"
import authChecker from "../middleware/authChecker.js"

authrouter.post("/login",loginAuthPost)
authrouter.post("/signup",signUpAuthPost)


export default authrouter;