import { Router } from "express";
import authRouter from "./auth.js"
import postRouter from "./post.js";
const router =  Router();
router.use("/auth", authRouter);
router.use("/post", postRouter);


export default router;