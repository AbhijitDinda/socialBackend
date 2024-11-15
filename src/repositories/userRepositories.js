
import User from '../schema/user.js'

export const createNewUser = async (user)=> {
    try {
        const newUser = User.create(user)
        return newUser;
        
    } catch (error) {
        return error;
    }
}