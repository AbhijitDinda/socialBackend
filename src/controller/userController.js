
import {signUpUserService} from '../services/userServices.js'
export async function signup(req,res){
    
    try {
        const user = signUpUserService(req.body)
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {
        if(error.status){
            return res.status(error.status).json({
                success: false,
                message: error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
    
}