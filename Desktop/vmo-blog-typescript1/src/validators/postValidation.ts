import {check} from "express-validator/check"

let post = [
  check('title', 'Titile atleast one degits').isLength({ min: 1 }),
  check('title', 'Title max 200 degits').isLength({ max: 200 }),
  check('content', 'Content max 2000 degits').isLength({ max: 2000 }),
  check('userId', 'user Id must be number').isNumeric(),
]

module.exports = {
  post: post
}