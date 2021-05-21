import express from "express";

import defaultRouter from "./routes/default.route.js"

const router = express.Router();

router.get("/ping", function (req, res) {  
  res.status(200).send("pong")
});

router.use("/default", defaultRouter);

export default router;
