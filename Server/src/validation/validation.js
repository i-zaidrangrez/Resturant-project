import { body } from "express-validator";

export const validateRegistration = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .matches(/^[a-zA-Z0-9\s]+$/).withMessage("Name should only contain letters")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
  body("email")
    .notEmpty()
    .withMessage("email is Required")
    .toLowerCase()
    .withMessage("Please Enter Email in Lowercase")
    .isEmail()
    .withMessage("email is invalid")
    .normalizeEmail(),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 , max: 12 })
    .withMessage("password length must be 6 to 12"),
  body("phone")
    .notEmpty()
    .withMessage("Phone no.is Required")
    .isNumeric()
    .withMessage("Phone no. should contain only numeric values")
    .isLength({min : 10 , max :10})
    .withMessage("Phone Number should Contain 10 numbers"),
];


