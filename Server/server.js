// Imports 
import express, { Router } from 'express'
import cors from 'cors'
import env from 'dotenv'
import dbConnect from './src/db/db.js'
import router from './src/routes/auth.route.js'
import cookieParser from 'cookie-parser'
env.config()

const app = express()

// middlewares 
app.use(express.json())
app.use(cors({
    origin  : 'http://localhost:5173',
    credentials : true
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
dbConnect()

// Routes 
app.use('/auth/v1',router)
app.get('/',(req,res)=>{
    res.send('HomePage is Here')
})


// Server 
app.listen(3000,()=>{
    console.log("server is running")
})