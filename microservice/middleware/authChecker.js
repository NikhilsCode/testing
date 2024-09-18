import jwt from "jsonwebtoken";
import 'dotenv/config';
const authChecker = (req, res, next) => {
    const authorizationToken =  req.headers['authorization'];
    const token = authorizationToken && authorizationToken.split(" ")[1];
    if(token == null) return res.status(401);
    let userData = jwt.verify(token, process.env.TOKEN_JWT_AUTHORIZATION) 
    if(userData == null) return res.status(403);
    next();
}
export default authChecker;