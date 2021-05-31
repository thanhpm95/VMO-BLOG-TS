import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnect"

interface PostInstance extends Model {
  id: number;
  title: string;
  content: string;
  userId: number,
  categoryId: number
}

const Post = sequelize.define<PostInstance>("Post", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  title: {
    type: DataTypes.STRING,
  },
  content:{
    type: DataTypes.STRING,
  },
  userId:{
    type: DataTypes.INTEGER,
  },
  categoryId:{
    type: DataTypes.INTEGER,
  }
});

export default Post;
