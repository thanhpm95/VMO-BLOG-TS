import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnect"

interface UserInstance extends Model {
  id: number;
  username: string;
  password: string;
  fullName: string;
  gender: number;
  type: number
}

const User = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  username: {
    type: DataTypes.STRING,
  },
  password:{
    type: DataTypes.STRING,
  },
  fullName: {
    type: DataTypes.STRING,
  },
  gender:{
    type: DataTypes.STRING,
  },
  type:{
    type: DataTypes.INTEGER,
  }
});

export default User;
