import express from "express"

const router = express.Router();

const {categoryController} = require('../controllers/index');
const authenticate = require('../middlewares/authenticate')

import {categoryValid} from "../validators/index"

router.get('/', categoryController.getAllCategorys)

router.get('/:id', categoryController.getOneCategory)

router.post('/', authenticate.authenticate(), categoryValid.category ,categoryController.createNewCategory)

router.patch('/:id', authenticate.authenticate(), categoryValid.category, categoryController.updateCategory)

router.delete('/:id', authenticate.authenticate(), categoryController.deleteCategory)


export default router;