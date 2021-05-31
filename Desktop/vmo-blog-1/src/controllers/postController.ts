import { validationResult } from "express-validator"
import { postService, userService } from "../services/index"
import { transErrors, transSuccesss } from "../lang/vi"


module.exports.getAllPosts = async (req: any, res: any) =>{
  
  try{
    let posts = await postService.getAllPosts();
    // console.log(posts);
    res.json(posts);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.getOnePost = async (req: any, res: any) =>{
  let postId = req.params.id;
  try{
    let post = await postService.getOnePost(postId);
    // console.log(posts);
    res.json(post);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.createNewPost = async (req: any, res: any) =>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  let loginUser = req.loginUser;
  let title = req.body.title;
  let content = req.body.content;
  let categoryId = req.body.categoryId;

  try{

    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let infoPost = {
      title: title,
      content: content,
      userId: currentUser.id,
      categoryId: categoryId
    }

    await postService.createNewPost(infoPost);

    res.json(transSuccesss.post_created);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.updatePost = async (req: any, res: any) =>{
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  let loginUser = req.loginUser;
  let postId = req.params.id;
  let title = req.body.title;
  let content = req.body.content;

  try{

    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let post = await postService.getOnePost(postId);

    if(!post){
      return res.json(transErrors.post_undefined);
    }

    let userCurrentId = currentUser.id;
    let userPostId = post.userId;

    let typeCurrentId = currentUser.type;

    if(userCurrentId !== userPostId && typeCurrentId < 2){
      return res.json(transErrors.have_not_permission)
    }
    
    let newInfoPost = {
      title: title,
      content: content
    }

    await postService.updatePost(postId, newInfoPost);
    // console.log(posts);
    return res.json(transSuccesss.post_updated);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.deletePost = async (req: any, res: any) =>{
    
  let loginUser = req.loginUser;
  let postId = req.params.id;

  try{
    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let post = await postService.getOnePost(postId);

    if(!post){
      return res.json(transErrors.post_undefined);
    }

    let userCurrentId = currentUser.id;
    let userPostId = post.userId;

    let typeCurrentId = currentUser.type;

    if(userCurrentId !== userPostId && typeCurrentId < 2){
      return res.json(transErrors.have_not_permission)
    }

    await postService.deletePost(postId);

    res.json(transSuccesss.post_deleted);
   
  }
  catch(err){
    console.log(err)
  }
}