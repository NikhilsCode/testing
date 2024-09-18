import { Router } from "express";
const postRouter = Router();
const post = [
    { 
        post:"1",
        title:"Hello",
    },
    { 
        post:"2",
        title:"Whast app",
    },
    { 
        post:"3",
        title:"nothing",
    },

]
postRouter.get('/', (req, res) => {
    res.send(post).status(200).end;
})
export default postRouter;