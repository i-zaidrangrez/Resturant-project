import express from 'express'
import { loginController, registerController} from '../controllers/auth.controller.js'
import { handleValidation } from '../middlewares/validationMiddleware.js'
import { validateRegistration } from '../validation/validation.js'

const router = express.Router()

router.post('/register',validateRegistration ,handleValidation, registerController)
router.post('/login',loginController)

export default router