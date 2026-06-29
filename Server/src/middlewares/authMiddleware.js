export default async function authMiddleware(req,res,next) {
    const token = req.header.authorization
    if(!token){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
    next()
}

