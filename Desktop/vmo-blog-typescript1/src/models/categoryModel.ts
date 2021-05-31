import { Model, DataTypes } from "sequelize";
import sequelize from "../config/dbConnect"

interface CategoryInstance extends Model {
  id: number;
  categoryName: string;
  description: string;
  postId: number
}

const Category = sequelize.define<CategoryInstance>("Category", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  categoryName: {
    type: DataTypes.STRING,
  },
  description:{
    type: DataTypes.STRING,
  },
  postId:{
    type: DataTypes.INTEGER,
  }
});

export default Category;
