import { validationResult } from "express-validator"
import { categoryService, userService, postService } from "../services/index"

import { transErrors, transSuccesss } from "../lang/vi"


module.exports.getAllCategorys = async (req: any, res: any) =>{
  
  try{
    let categorys = await categoryService.getAllCategorys();
    res.json(categorys);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.getOneCategory = async (req: any, res: any) =>{
  let categoryId = req.params.id;
  try{
    let category = await categoryService.getOneCategory(categoryId);
    // console.log(Categorys);
    res.json(category);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.createNewCategory = async (req: any, res: any) =>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  let loginUser = req.loginUser;
  let categoryName = req.body.categoryName;
  let description = req.body.description;
  let postId = req.body.postId

  try{

    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    if(currentUser.type < 2){
      return res.json(transErrors.have_not_permission);
    }

    let infoCategory = {
     categoryName: categoryName,
     description: description,
     postId: postId
    }

    await categoryService.createNewCategory(infoCategory);

    res.json(transSuccesss.category_created);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.updateCategory = async (req: any, res: any) =>{
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  
  let loginUser = req.loginUser;
  let categoryId = req.params.id;
  let categoryName = req.body.categoryName;
  let description = req.body.description;
  let postId = req.body.postId;

  try{

    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let category = await categoryService.getOneCategory(categoryId);

    if(!category){
      return res.json(transErrors.category_undefined);
    }

    let post = await postService.getOnePost(postId);

    if(!post){
      return res.json(transErrors.post_undefined);
    }


    if(currentUser.type < 2){
      return res.json(transErrors.have_not_permission)
    }
    
    let newInfoCategory = {
      categoryName: categoryName,
      description: description,
      postId: postId
    }

    await categoryService.updateCategory(categoryId, newInfoCategory);
    // console.log(Categorys);
    return res.json(transSuccesss.category_updated);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.deleteCategory = async (req: any, res: any) =>{
    
  let loginUser = req.loginUser;
  let categoryId = req.params.id;

  try{
    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let category = await categoryService.getOneCategory(categoryId);

    if(!category){
      return res.json(transErrors.category_undefined);
    }

    if(currentUser.type < 2){
      return res.json(transErrors.have_not_permission)
    }

    await categoryService.deleteCategory(categoryId);

    res.json(transSuccesss.category_deleted);
   
  }
  catch(err){
    console.log(err)
  }
}