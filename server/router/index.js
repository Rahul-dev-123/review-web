import express from "express";
import {
  loginController,
  signupController,
} from "../controller/admin.controller.js";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.post("/signup", signupController);

router.use("/login", loginController);

export default router;
