import express from "express";
import {
  createClientCotroller,
  getClientDetailController,
  getClientListController,
  updateClientController,
} from "../controller/client.controller.js";

const clientRouter = express.Router();

clientRouter.post("/create", createClientCotroller);

clientRouter.get("/get-lists", getClientListController);

clientRouter
  .route("/:client_id")
  .get(getClientDetailController)
  .put(updateClientController);

// clientRouter.post("/login", loginController);

export default clientRouter;
