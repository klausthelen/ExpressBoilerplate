import express from "express";
import { morganMiddleware } from "./middleware/morgan.js";
import router from "./router.js";
import cors from "cors";

const app = express();
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
