import Tags from "../models/tagModel"

function getAllTags(){
    return Tags.findAll();
    // console.log(Users)
}

function getOneTag(tagId: number){
  return Tags.findOne({
    where:{
      id: tagId
    }
  });
  // console.log(Users)
}

function createNewTag(tag: any){
  return Tags.create(tag);
  // console.log(Users)
}

function updateTag(tagId: number, tag: any){
  // console.log(tagId);
  return Tags.update(
    {
      tagName: tag.tagName,
      description: tag.description,
      postId: tag.postId
    },
    {
    where:{
      id: tagId
    }
  });
// console.log(Users)
}

function deleteTag(tagId: number){
  return Tags.destroy({
    where:{
      id: tagId
    }
  });
// console.log(Users)
}


module.exports = {
  getAllTags : getAllTags,
  getOneTag: getOneTag,
  createNewTag: createNewTag,
  updateTag: updateTag,
  deleteTag: deleteTag
}