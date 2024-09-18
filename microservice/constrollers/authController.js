import 'dotenv/config';
import jwt from 'jsonwebtoken';
const loginAuthPost = (req, res) => {
    const body = req.body
    const AuthToken = jwt.sign(body, process.env.TOKEN_JWT_AUTHORIZATION)
    res.json({accessToken : AuthToken}).status(200)
}
const signUpAuthPost = (req, res) => {
    res.send({
        message: "this is signup server"
    }).status(200)
}
export { loginAuthPost, signUpAuthPost }