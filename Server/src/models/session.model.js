import mongoose from 'mongoose'
import { type } from 'os'

const sessionSchema = mongoose.Schema({
    sessionToken : {
        type : String,
        default : null
    },
    deviceId  : {
        type : String,
        default : null
    },
    expiresAt:{
        type : Date
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    ip : {
        type : String
    },
    userAgent : {
        type : String
    },
    tableNumber : {
        type : Number
    },
    qrCodeUrl : {
        type : String
    },
    convertedSession : {
        type : Boolean,
        default : false
    },
    lastActivity : {
        type : Date
    }

})

const sessionModel = mongoose.model('session' , sessionSchema)
export default sessionModel