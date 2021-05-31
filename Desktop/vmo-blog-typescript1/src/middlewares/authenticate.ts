import jwt from "jsonwebtoken"
import {transErrors} from "../lang/vi"

const config = require("../config/config.json")


const tokenSecretKey = config.development.token.secret_access_token;

export function authenticate() {
  return (req: any, res: any, next: any) => {
      try {
          const token = req.headers.authorization || '';

        //   console.log(token)
          try{
            const user = jwt.verify(token, tokenSecretKey)
            // console.log(user)
            req.loginUser = user;
            return next();
          }
          catch(err){
              return res.json(transErrors.authen_error)
          }     
      } catch (err) {
          console.log(err);
      }
  };
}
