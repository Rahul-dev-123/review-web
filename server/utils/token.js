import config from "./config.js";
import jwt from "jsonwebtoken";

export const generateToken = async (id) => {
  const token = jwt.sign(
    {
      id,
    },
    config.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

// TODO // /////////////////////////// Verify if the user is authenticated or not

// export const checkToken = async () => {

// }
