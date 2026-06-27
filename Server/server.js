import express from 'express'
import env from 'dotenv'
import dbConnect from './src/db/db.js'
env.config()

const app = express()
dbConnect()
app.get('/',(req,res)=>{
    res.send('HomePage is Here')
})

app.listen(3000,()=>{
    console.log("server is running")
})