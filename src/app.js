import express from "express";
import { morganMiddleware } from "./middleware/morgan.js";
import cors from "cors";
import dotenv  from "dotenv";

import router from "./router.js"

const app = express();
dotenv.config()

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
