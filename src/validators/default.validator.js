import { body, query, param } from "express-validator";

export const insertValidator = [ 
    body('title')
        .exists()
        .isString()
];

export const getValidator = [ 
    param('id')
        .exists()
        .isNumeric()
];