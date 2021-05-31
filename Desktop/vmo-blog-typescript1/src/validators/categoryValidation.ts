import {check} from "express-validator/check"

let category = [
  check('categoryName', 'category Name atleast one degits').isLength({ min: 1 }),
  check('categoryName', 'category Name max 200 degits').isLength({ max: 200 }),
  check('description', 'Description max 2000 degits').isLength({ max: 2000 }),
  check('postId', 'Post Id must be number').isNumeric(),
]

module.exports = {
  category: category
}