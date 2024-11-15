export const Validate = (schema) => {
    return async (req, res, next) => {
        try {

            schema.parse(req.body);
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Validation Error",
                errors: error.errors
            })
        }
        
    }
}