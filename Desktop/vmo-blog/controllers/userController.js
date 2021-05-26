import userServices from "../services/userService"
import {transErrors, transSuccesss} from "../lang/vi"

module.exports.updateUserType = async (req, res) =>{
    let id = req.params.id;
    let loginUser = req.loginUser;
    let newType = req.body.type;


    try{
        let currentUser = await userServices.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.not_login);
        }

        if(currentUser.type < 3){
            return res.json(transErrors.have_not_permission);
        }

        let targetUser = await userServices.getUserById(id);

        if(!targetUser){
            return res.json(transErrors.target_user_undifined);
        }

        if(targetUser.type == newType){
            return res.json(transErrors.same_type);
        }

        if(newType > 3){
            return res.json(transErrors.wrong_new_type);
        }
  
        await userServices.updateUserType(id, newType);

        return res.json(transSuccesss.update_type_success);
    }
    catch(err){
        console.log(err);
    }

}

module.exports.getUserById = async (req, res) =>{
    let id = req.params.id;
    let loginUser = req.loginUser;

    try{
        let currentUser = await userServices.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.not_login);
        }

        if(currentUser.type < 2){
            return res.json(transErrors.have_not_permission);
        }

        let user = await userServices.getUserById(id);

        return res.json(user);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getAllUsers = async (req, res) =>{
    let data = await userServices.getAllUsers()
    // console.log(data)
    return res.json(data);
}