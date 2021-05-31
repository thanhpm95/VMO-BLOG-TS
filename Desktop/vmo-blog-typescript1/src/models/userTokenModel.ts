import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnect"

interface UserInstance extends Model {
  id: number;
  userId: number;
  token: string
}

const UserToken = sequelize.define<UserInstance>("UserToken", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  token:{
    type: DataTypes.INTEGER,
  }
});

export default UserToken;
