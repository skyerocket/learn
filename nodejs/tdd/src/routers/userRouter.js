const express = require("express");

const router = express.Router();
const userService = require('../services/userService');
const {check, validationResult} = require('express-validator');

// const validateUsername =  (req,res,next) => {
//     const user = req.body;
//     if (user.username == null) {
//         req.validationErrors= {
//             username: 'username cannot be null'
//         }
//     }
//     next();
// };

// const validateEmail =  (req,res,next) => {
//     const user = req.body;
//     if (user.email == null) {
//         req.validationErrors = {
//             ...req.validationErrors,
//             email: 'email cannot be null'
//         }
//     }
//     next();
// };

router.post(
    "/users", 
    check('username').notEmpty().withMessage('username cannot be null'),
    check('email').notEmpty().withMessage('email cannot be null'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const validationErrors = {};
            errors.array().forEach(error => {
                validationErrors[error.param] = error.msg
            });
            return res.status(400).send({validationErrors})
        }
        // if (req.validationErrors) {
        //     return res.status(400).send({validationErrors: req.validationErrors})
        // }
        const created = await userService.save(req.body);
        if (created) {
            return res.send({ message: "Created" });
        }
});

module.exports = router