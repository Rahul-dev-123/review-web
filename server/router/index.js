import express from "express";

import adminRouter from "./admin.router.js";
import clientRouter from "./client.router.js";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use("/admin", adminRouter);

router.use("/client", clientRouter);

export default router;
