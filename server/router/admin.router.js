import express from "express";
import {
  loginController,
  signupController,
} from "../controller/admin.controller.js";

const adminRouter = express.Router();

adminRouter.post("/signup", signupController);

adminRouter.post("/login", loginController);

export default adminRouter;
