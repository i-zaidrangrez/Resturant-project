import tableModel from "../models/table.model.js";
import crypto from "crypto";
import QRCode from "qrcode";

export async function createTable(req, res) {
 try {
   const { tableNumber, capacity } = req.body;
   if(!tableNumber || !capacity){
     return res.status(400).json({
         message : "Please Provide Table no. and capacity"
     })
   }
 
   const qrSlug = crypto.randomBytes(6).toString("hex");
   if(!qrSlug){
     return res.status(500).json({
         message : "Something Went Wrong! Try Again"
     })
   }
   const qrCodeURL = `http://localhost:5173/scan-qr?qr=${qrSlug}`;
   if(!qrCodeURL){
     return res.status(500).json({
         message : "Something Went Wrong! Try Again"
     })
   }
 
   async function generateQR() {
     try {
       const qrImageRaw = await QRCode.toDataURL(qrCodeURL);
       return qrImageRaw;
     } catch (err) {
       console.error(err);
     }
   }
 
   const qrImage = await generateQR()
   if(!qrImage){
     return res.status(500).json({
         message : "Something Went Wrong! Try Again"
     })
   }
 
   const table = await tableModel.create({
     tableNumber,
     capacity,
     qrSlug,
     qrCodeURL,
     qrImage
   })
   return res.status(201).json({
     message : "Table Created",
     table
   })
 } catch (error) {
  return res.status(500).json({
      message : error
    })
 }
}

export async function getTable(req,res) {
  try {
    const qrSlug = await req.query.qr
    if(!qrSlug){
      return res.status.json({
        message  : "Invalid url"
      })
    }
    const table = await tableModel.findOne({qrSlug , isActive : true})
    if(!table){
      res.status(400).json({
        message : "Invalid Table"
      })
    }
  
    res.status(200).json({
      message : "Table Fetched",
      table,
    })
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}

export async function getAllTable(req,res) {
  try {
    const {admin} = req.user.role
    const tables = await tableModel.find()
    if(!tables){
      return res.status(404).json({
        message: "Not available"
      })
    }
    return res.status(200).json({
      message : "Tables Fetched",
      tables
    })
  } catch (error) {
    return res.status(500).json({
      message : error
    })
  }
}
