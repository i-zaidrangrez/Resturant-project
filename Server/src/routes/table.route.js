import express from 'express'
import { createTable, getAllTable, getTable } from '../controllers/table.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import checkRole from '../middlewares/checkRole.js'
const router = express.Router()

router.post('/table',createTable)
router.get('/scan-qr',getTable)
router.get('/get-all-tables',authMiddleware,checkRole(['admin']),getAllTable)

export default router