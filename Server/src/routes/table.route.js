import express from 'express'
import { createTable, deleteTable, getAllTable, getTable, updateTable } from '../controllers/table.controller.js'
import {authMiddleware} from '../middlewares/authMiddleware.js'
import checkRole from '../middlewares/checkRole.js'
const router = express.Router()

router.post('/table',createTable)
router.get('/scan-qr',getTable)
router.get('/get-all-tables',authMiddleware,checkRole(['admin']),getAllTable)
router.patch('/update',authMiddleware,checkRole(['admin']),updateTable)
router.delete('/delete',authMiddleware,checkRole(['admin']),deleteTable)

export default router