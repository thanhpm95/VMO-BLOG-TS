import express from "express"

const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate')

const router = express.Router();

router.get('/', authenticate.authenticate(), userController.getAllUsers)

router.get('/:id', authenticate.authenticate(), userController.getUserById)

router.patch('/:id', authenticate.authenticate(), userController.updateUserType)


module.exports = router;