import { validationResult } from "express-validator";

export const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    // console.log(`Validator ${errors.errors[0].msg}`)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: errors.errors[0].msg
        });
    }

    next();
};