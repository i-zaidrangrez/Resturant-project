import sessionModel from "../models/session.model.js"
import tableModel from "../models/table.model.js"
import crypto from 'crypto'

export const session = async (req,res) => {
    try {
        const {deviceId , qrSlug} = req.body
        const table = await tableModel.findOne({qrSlug})
        const tableNumber = table.tableNumber
        const sessionToken = crypto.randomBytes(32).toString('hex')
        const ip = req.ip
        const userAgent = req.headers["user-agent"]
        const qrCodeUrl = table.qrCodeUrl
        const expiresAt = Date.now()+24*60*60*1000
    
        const session = await sessionModel.create({
            deviceId,
            qrSlug,
            tableNumber,
            sessionToken,
            ip,
            userAgent,
            qrCodeUrl,
            expiresAt
        })
    
        return res.status(200).json({
            message : "session Created",
            session
        })
    } catch (error) {
        return res.status(500).json({
            error:error
        })
    }
}