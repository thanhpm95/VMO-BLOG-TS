import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnect"

interface TagInstance extends Model {
  id: number;
  tagName: string;
  description: string;
  postId: number
}

const Tag = sequelize.define<TagInstance>("Tag", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  tagName: {
    type: DataTypes.STRING,
  },
  description:{
    type: DataTypes.STRING,
  },
  postId:{
    type: DataTypes.INTEGER,
  }
});

export default Tag;
