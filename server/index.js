import express from "express";
import cors from "cors";
import router from "./router/index.js";
import connectToDb from "./utils/database.js";
import config from "./utils/config.js";
const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PATCH", "PUT", "FETCH"],
  allowedHeaders: ["Content-Type", "authorization"],
};

app.use(cors(corsOpts));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/", router);

app.listen(config.PORT, async () => {
  console.log(`port connect on ${config.PORT}`);
  await connectToDb();
});
