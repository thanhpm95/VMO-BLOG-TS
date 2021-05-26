import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routers/userRouter"
import authRouter from "./routers/authRouter"



const app = express()

const port = 3002

const db = require('./config/dbConnect');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

db.sequelize.sync();

app.get("/", (req, res) =>{
  res.send("Hello world")
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(port, () =>{
  console.log("Test", port)
})