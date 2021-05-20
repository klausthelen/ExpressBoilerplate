import express from "express";
import { morganMiddleware } from "./middleware/morgan.js";
import router from "./router.js";
import cors from "cors";

import dotenv  from "dotenv";
dotenv.config()

const app = express();
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
