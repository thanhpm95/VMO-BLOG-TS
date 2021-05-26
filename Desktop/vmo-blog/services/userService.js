import Users from "../models/userModel"

function getAllUsers(){
    return Users.findAll();
    // console.log(Users)
}

function getUserById(id){
    return Users.findOne({
        where:{
            id
        },
        attributes: { exclude: ['password'] }
    })
}

function getUserByUserName(username){
    return Users.findOne({
        where:{
            username
        }
    })
}

function updateUserType(id, type){
    return Users.update({
        type
        },{
            where:{
                id
            }
        }
    )
}



module.exports = {
    getAllUsers : getAllUsers,
    getUserById : getUserById,
    getUserByUserName: getUserByUserName,
    updateUserType: updateUserType
}