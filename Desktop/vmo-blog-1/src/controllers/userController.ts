import { userService } from "../services/index"
import { transErrors, transSuccesss } from "../lang/vi"

module.exports.updateUserType = async (req: any, res: any) =>{
    let id = req.params.id;
    let loginUser = req.loginUser;
    let newType = req.body.type;


    try{
        let currentUser = await userService.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.not_login);
        }

        if(currentUser.type < 3){
            return res.json(transErrors.have_not_permission);
        }

        let targetUser = await userService.getUserById(id);

        if(!targetUser){
            return res.json(transErrors.target_user_undefined);
        }

        if(targetUser.type == newType){
            return res.json(transErrors.same_type);
        }

        if(newType > 3){
            return res.json(transErrors.wrong_new_type);
        }
  
        await userService.updateUserType(id, newType);

        return res.json(transSuccesss.update_type_success);
    }
    catch(err){
        console.log(err);
    }

}

module.exports.getUserById = async (req: any, res: any) =>{
    let id = req.params.id;
    let loginUser = req.loginUser;

    try{
        let currentUser = await userService.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.user_undefined);
        }

        if(currentUser.type < 2){
            return res.json(transErrors.have_not_permission);
        }

        let user = await userService.getUserById(id);

        return res.json(user);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.getAllUsers = async (req: any, res: any) =>{
    let loginUser = req.loginUser;

    try{
        let currentUser = await userService.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.user_undefined);
        }

        let data = await userService.getAllUsers()
        return res.json(data);

    }
    catch(err){
        console.log(err);
    }
}

module.exports.deleteUser = async (req: any, res: any) =>{
    let id = req.params.id;
    let loginUser = req.loginUser;
  
    try{
        let currentUser = await userService.getUserByUserName(loginUser.username);

        if(!currentUser){
           return res.json(transErrors.not_login);
        }

        if(currentUser.type < 3){
            return res.json(transErrors.have_not_permission);
        }

        let targetUser = await userService.getUserById(id);

        if(!targetUser){
            return res.json(transErrors.target_user_undefined);
        }

        await userService.deleteUser(id);

        return res.json(transSuccesss.delete_success);
    }
    catch(err){
        console.log(err);
    }

}