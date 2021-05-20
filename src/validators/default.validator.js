import { body } from "express-validator";

export default [ 
    body('table_name')
        .exists()
        .isString()
];