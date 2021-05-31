import express from "express"

const router = express.Router();

const { authController } = require('../controllers/index');

import {authValid} from "../validators/index"

router.post('/login', authController.login)

router.post('/register', authValid.register, authController.register)

router.post('/refresh-token', authController.refreshToken)

export default router;