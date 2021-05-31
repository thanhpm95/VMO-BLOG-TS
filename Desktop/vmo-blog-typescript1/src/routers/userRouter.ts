import express from "express"

const {userController} = require('../controllers/index');
const authenticate = require('../middlewares/authenticate')

const router = express.Router();

router.get('/', authenticate.authenticate(), userController.getAllUsers)

router.get('/:id', authenticate.authenticate(), userController.getUserById)

router.delete('/:id', authenticate.authenticate(), userController.deleteUser)

router.patch('/type/:id', authenticate.authenticate(), userController.updateUserType)




export default router;