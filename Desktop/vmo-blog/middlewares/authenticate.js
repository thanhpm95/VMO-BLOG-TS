import jwt from "jsonwebtoken"

const SECRET_ACCESS_TOKEN = '123456'
// const SECRET_REFRESH_ACCESS_TOKEN = '123456'

export function authenticate() {
  return (req, res, next) => {
      try {
          const token = req.headers.authorization || '';

        //   console.log(token)
          try{
            const user = jwt.verify(token, SECRET_ACCESS_TOKEN)
            // console.log(user)
            req.loginUser = user;
            return next();
          }
          catch(err){
              return res.json("Lỗi Xác Thực")
          }     
      } catch (err) {
          console.log(err);
      }
  };
}