import express from "express"

const router = express.Router();

const { postController } = require('../controllers/index');
const authenticate = require('../middlewares/authenticate')

import {postValid} from "../validators/index"


router.get('/', postController.getAllPosts)

router.get('/:id', postController.getOnePost)

router.post('/', authenticate.authenticate(), postValid.post ,postController.createNewPost)

router.patch('/:id', authenticate.authenticate(), postValid.post, postController.updatePost)

router.delete('/:id', authenticate.authenticate(), postController.deletePost)


export default router;