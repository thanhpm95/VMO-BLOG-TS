import {check} from "express-validator/check"

let updateUserType = [
  check('type', 'Type must in range [1,2,3]').isIn([1,2,3])
]

module.exports = {
  updateUserType: updateUserType
}