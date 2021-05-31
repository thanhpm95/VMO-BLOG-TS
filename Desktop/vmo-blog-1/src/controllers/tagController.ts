import { validationResult } from "express-validator"
import { tagService, userService, postService } from "../services/index"

import { transErrors, transSuccesss } from "../lang/vi"


module.exports.getAllTags = async (req: any, res: any) =>{
  
  try{
    let tags = await tagService.getAllTags();
    res.json(tags);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.getOneTag = async (req: any, res: any) =>{
  let tagId = req.params.id;
  try{
    let tag = await tagService.getOneTag(tagId);
    // console.log(tags);
    res.json(tag);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.createNewTag = async (req: any, res: any) =>{

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  let loginUser = req.loginUser;
  let tagName = req.body.tagName;
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

    let infotag = {
     tagName: tagName,
     description: description,
     postId: postId
    }

    await tagService.createNewTag(infotag);

    res.json(transSuccesss.tag_created);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.updateTag = async (req: any, res: any) =>{
  
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  
  let loginUser = req.loginUser;
  let tagId = req.params.id;
  let tagName = req.body.tagName;
  let description = req.body.description;
  let postId = req.body.postId;

  // console.log(tagId);

  try{

    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let tag = await tagService.getOneTag(tagId);

    if(!tag){
      return res.json(transErrors.tag_undefined);
    }

    // console.log(tag);

    let post = await postService.getOnePost(postId);

    if(!post){
      return res.json(transErrors.post_undefined);
    }

    // console.log(post);

    if(currentUser.type < 2){
      return res.json(transErrors.have_not_permission)
    }
    
    let newInfoTag = {
      tagName: tagName,
      description: description,
      postId: postId
    }

    // console.log(newInfoTag);

    const result = await tagService.updateTag(tagId, newInfoTag);

    // console.log(result);
  
    return res.json(transSuccesss.tag_updated);
   
  }
  catch(err){
    console.log(err)
  }
}

module.exports.deleteTag = async (req: any, res: any) =>{
    
  let loginUser = req.loginUser;
  let tagId = req.params.id;

  try{
    let currentUser = await userService.getUserByUserName(loginUser.username);

    if(!currentUser){
      return res.json(transErrors.user_undefined);
    }

    let tag = await tagService.getOneTag(tagId);

    if(!tag){
      return res.json(transErrors.tag_undefined);
    }

    if(currentUser.type < 2){
      return res.json(transErrors.have_not_permission)
    }

    await tagService.deleteTag(tagId);

    res.json(transSuccesss.tag_deleted);
   
  }
  catch(err){
    console.log(err)
  }
}