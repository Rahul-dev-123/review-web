import mongoose from "mongoose";
import ClientModel from "../models/client.model.js";

export const createClientCotroller = async (req, res) => {
  const { name, email, mobile, link } = req.body;

  if (!name || !email || !mobile || !link) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const client_exist = await ClientModel.findOne({ email });

    if (client_exist) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const new_client = await ClientModel.create({
      email,
      mobile,
      name,
      link,
    });

    if (!new_client) {
      return res.status(400).json({ message: "Invalid information" });
    }

    res.status(200).json({ message: "Client created Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

export const getClientListController = async (req, res) => {
  try {
    const { cp, query } = req.query;
    // console.log("data", data);
    const client_list = await ClientModel.find(
      {},
      { name: 1, email: 1, mobile: 1, link: 1 }
    )
      .skip((Number(cp) - 1) * 10)
      .limit(10);

    res.status(200).json({ data: client_list });
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

export const getClientDetailController = async (req, res) => {
  try {
    const { client_id } = req.params;
    // console.log("data", data);
    const client_detail = await ClientModel.findById(client_id, {
      name: 1,
      email: 1,
      mobile: 1,
      link: 1,
      cycle: 1,
      status: 1,
      _id: 0,
    });

    if (!client_detail) {
      return res.status(400).json({ message: "Invalid Client  ID" });
    }

    res.status(200).json({ data: client_detail });
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

export const updateClientController = async (req, res) => {
  try {
    const { client_id } = req.params;

    await ClientModel.findByIdAndUpdate(client_id, req.body);

    res.status(200).json({ message: "Client updated successfully." });
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "Something went wrong" });
  }
};
