import express from 'express'
import { deActivateUser, deleteUser, loginController, registerController, updateUser} from '../controllers/auth.controller.js'
import { handleValidation } from '../middlewares/validationMiddleware.js'
import { validateRegistration, validateUpdate } from '../validation/validation.js'
import {authMiddleware} from '../middlewares/authMiddleware.js'
import checkRole from '../middlewares/checkRole.js'

const router = express.Router()

router.post('/register',validateRegistration ,handleValidation, registerController)
router.post('/login',loginController)
router.patch('/update',validateUpdate,handleValidation,authMiddleware,checkRole(['customer','admin']),updateUser)
router.patch('/deactivate',authMiddleware,checkRole(['customer','admin']),deActivateUser)
router.delete('/delete',authMiddleware,checkRole(['customer','admin']),deleteUser)


router.get('/menu',authMiddleware,checkRole(['customer','admin']),(req,res)=>{res.send(req.user)})

export default router