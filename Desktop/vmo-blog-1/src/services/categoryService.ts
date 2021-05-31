import Categorys from "../models/categoryModel"

function getAllCategorys(){
    return Categorys.findAll();
    // console.log(Users)
}

function getOneCategory(categoryId: number){
  return Categorys.findOne({
    where:{
      id: categoryId
    }
  });
  // console.log(Users)
}

function createNewCategory(category: any){
  return Categorys.create(category);
  // console.log(Users)
}

function updateCategory(categoryId: number, category: any){
  return Categorys.update(
    {
      categoryName: category.categoryName,
      description: category.description,
      postId: category.postId
    },
    {
    where:{
      id: categoryId
    }
  });
// console.log(Users)
}

function deleteCategory(categoryId: number){
  return Categorys.destroy({
    where:{
      id: categoryId
    }
  });
// console.log(Users)
}


module.exports = {
  getAllCategorys : getAllCategorys,
  getOneCategory: getOneCategory,
  createNewCategory: createNewCategory,
  updateCategory: updateCategory,
  deleteCategory: deleteCategory
}