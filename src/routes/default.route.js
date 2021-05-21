import express from "express";

import {validate} from "../validators/utils/validator.js"
import {insertResolver, getResolver, rawResolver} from "../resolvers/default.resolver.js"
import {insertValidator, getValidator} from "../validators/default.validator.js";


const defaultRouter = express.Router();

defaultRouter.post("/insert", validate(insertValidator), insertResolver);

defaultRouter.get("/get", getResolver);

defaultRouter.get("/get/:id", validate(getValidator), rawResolver);

export default defaultRouter;