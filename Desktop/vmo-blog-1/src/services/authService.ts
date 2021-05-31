import Users from "../models/userModel"
import UserTokens from "../models/userTokenModel"

import bcrypt from "bcrypt"

const saltRounds = 7

function findUserByUserName(username: string){
    return Users.findOne({ where: { username: username } })
    // console.log(Users)
}

function createUser(username: string, password: string, fullName: string, gender: number){

  let salt = bcrypt.genSaltSync(saltRounds);
  let hashPassword = bcrypt.hashSync(password, salt);

  return Users.create({ 
    username: username,
    password: hashPassword,
    fullName: fullName,
    gender: gender,
    type: 1
   })
}

function destroyToken(userId: number){
  return UserTokens.destroy({
    where:{
      userId: userId
    }
  })
}

function insertToken(userId: number, userToken: string){
  return UserTokens.create({
    userId: userId,
    token: userToken
  })
}

function findUserTokenByUser(userId: number){
  return UserTokens.findOne({
    where: { 
      userId: userId 
    }
  })
}

function findUserTokenByToken(token: string){
  return UserTokens.findOne({
    attributes: { exclude: ['password'] },
    where: { 
      token: token 
    }
  })
}


module.exports = {
  findUserByUserName: findUserByUserName,
  createUser: createUser,
  destroyToken: destroyToken,
  insertToken: insertToken,
  findUserTokenByToken: findUserTokenByToken,
  findUserTokenByUser: findUserTokenByUser
}