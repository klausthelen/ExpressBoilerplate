import express from "express";
import knexConn from "../persistence/knex.js";
const router = express.Router();

router.get("/ping", function (req, res) {
  res.status(200).send("pong")
});

router.post("/entry", function (req, res) {
  knexConn("trial").select("*")
  .then((value) => {
    res.status(200).json(value);
  })
  .catch((error) =>{ console.error(error); });
  
});

export default router;
