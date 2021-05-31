import Users from "../models/userModel"

function getAllUsers(){
    return Users.findAll(
        {
            attributes: { exclude: ['password'] }
        }
    );
    // console.log(Users)
}

function getUserById(id: number){
    return Users.findOne({
        where:{
            id
        },
        attributes: { exclude: ['password'] }
    })
}

function getUserByUserName(username: string){
    return Users.findOne({
        where:{
            username
        }
    })
}

function updateUserType(id: number, type: number){
    return Users.update({
        type
        },{
            where:{
                id
            }
        }
    )
}


function deleteUser(id: number){
    return Users.destroy({
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
    updateUserType: updateUserType,
    deleteUser: deleteUser
}