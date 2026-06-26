import express from 'express'
const app = express()
app.get('/',(req,res)=>{
    res.send('HomePage is Here')
})

app.listen(3000,()=>{
    console.log("server is running")
})