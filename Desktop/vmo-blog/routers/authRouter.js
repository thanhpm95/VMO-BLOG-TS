import express from "express"

const router = express.Router();

const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authenticate')

import {authValid} from "../validators/index"

router.post('/login', authController.login)

router.post('/register', authValid.register, authController.register)

router.post('/refresh-token', authenticate.authenticate(), authController.refreshToken)


module.exports = router;