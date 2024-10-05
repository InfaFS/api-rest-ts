import express from "express";
import cors from "cors";
import "dotenv/config";
const PORT = process.env.PORT || 3001;
import { router } from "./routes";
import db from "./config/mongo";
const app = express();
app.use(cors()); //puede ser consumida por cualquier origen
app.use(express.json()); //muy IMPORTANTE este antes de usar el router, de lo contrario no podra parsear los json
app.use(router);
db().then(() => console.log("DB Connected"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
