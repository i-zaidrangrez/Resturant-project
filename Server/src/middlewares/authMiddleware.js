import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'
import sessionModel from '../models/session.model.js'

export async function authMiddleware(req,res,next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.json({Message  : "You need to login first"})
        }
        const decoded = jwt.verify(token , process.env.JWT_ACCESS_SECRET)
        const user = await userModel.findById(decoded.id).select('-passwordHash -refreshToken')
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
}

export async function sessionVerification(params) {
    try {
        const sessionToken = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.json({Message  : "You need to login first"})
        }
        const session = await sessionModel.findOne({sessionToken})
        req.guest = session
        next()
    } catch (error) {
        console.log(error)
    }
}

