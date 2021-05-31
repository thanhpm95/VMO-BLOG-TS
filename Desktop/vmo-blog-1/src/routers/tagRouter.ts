import express from "express"

const router = express.Router();

const authenticate = require('../middlewares/authenticate')

const { tagController } = require('../controllers/index')

const { tagValid } = require('../validators/index')

router.get('/', tagController.getAllTags)

router.get('/:id', tagController.getOneTag)

router.post('/', authenticate.authenticate(), tagValid.tag ,tagController.createNewTag)

router.patch('/:id', authenticate.authenticate(), tagValid.tag, tagController.updateTag)

// router.delete('/:id', authenticate.authenticate(), tagController.deleteTag)


export default router;