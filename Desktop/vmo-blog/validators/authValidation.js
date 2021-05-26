import {check} from "express-validator/check"

let register = [
    check('username', 'username does not Empty').not().isEmpty(),
    check('username', 'username more than 6 degits').isLength({ min: 6 }),
    check('password', 'password does not Empty').not().isEmpty(),
    check('password', 'password more than 6 degits').isLength({ min: 6 }),
    check('type', 'Type must Empty').isEmpty(),
    check('fullName', 'full name more than 6 degits').isLength({ min: 6 }),
    check('gender', 'Gender must 0-fermale or 1-male').isIn([0,1])
]

let login = [
    check('username', 'username does not Empty').not().isEmpty(),
    check('username', 'username more than 6 degits').isLength({ min: 6 }),
    check('password', 'password does not Empty').not().isEmpty(),
    check('password', 'password more than 6 degits').isLength({ min: 6 })  
]

module.exports = {
    register: register,
    login: login
}