import express from "express";
import bdState from "./resolvers/default.resolver.js"
import * as defaultValidator from "./validators/default.validator.js";
import {validationResult } from "express-validator";

const router = express.Router();
const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    res.status(400).json({ errors: errors.array() });
  };
};

router.get("/ping", function (req, res) {
  res.status(200).send("pong")
});

router.post("/default", validate(defaultValidator.default), bdState);


export default router;
