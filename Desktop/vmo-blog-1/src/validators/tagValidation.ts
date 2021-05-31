import {check} from "express-validator/check"

let tag = [
  check('tagName', 'tag Name atleast one degits').isLength({ min: 1 }),
  check('tagName', 'tag Name max 200 degits').isLength({ max: 200 }),
  check('description', 'Content max 2000 degits').isLength({ max: 2000 })
]

module.exports = {
  tag: tag
}