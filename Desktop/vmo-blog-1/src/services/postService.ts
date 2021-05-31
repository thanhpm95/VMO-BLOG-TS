import Posts from "../models/postModel"

function getAllPosts(){
    return Posts.findAll();
    // console.log(Users)
}

function getOnePost(postId: number){
  return Posts.findOne({
    where:{
      id: postId
    }
  });
  // console.log(Users)
}

function createNewPost(post: any){
  return Posts.create(post);
  // console.log(Users)
}

function updatePost(postId: number, post: any){
  return Posts.update(
    {
      title: post.title,
      content: post.content
    },
    {
    where:{
      id: postId
    }
  });
// console.log(Users)
}

function deletePost(postId: number){
  return Posts.destroy({
    where:{
      id: postId
    }
  });
// console.log(Users)
}


module.exports = {
  getAllPosts : getAllPosts,
  getOnePost: getOnePost,
  createNewPost: createNewPost,
  updatePost: updatePost,
  deletePost: deletePost
}