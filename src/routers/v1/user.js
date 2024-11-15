import express from "express";
import {signup} from '../../controller/userController.js'
import {Validate} from '../../validators/zodValidator.js'
import {zodSignupSchema} from '../../validators/zodSignUpSchema.js'
const router = express.Router();
router.post('/signup',Validate(zodSignupSchema), signup);

export default router; 