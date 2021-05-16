import express from "express";
import { morganMiddleware } from "./middleware/morgan.js";
import router from "./routes/router.js";
import cors from "cors";

const app = express();
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
