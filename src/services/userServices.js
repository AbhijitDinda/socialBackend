
import { createNewUser } from '../repositories/userRepositories.js'
export const signUpUserService = async (User) => {
    try {
        const newUser = createNewUser(User);
        return newUser;
    } catch (error) {
        if (error.name === "MongoServerError" && error.code === 11000) {
            throw {
                status: 400,
                message: "User with the same email or username already exists"
            }
        }
        throw error;
    }
}
