import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  ATLAS_URI: process.env.ATLAS_URI || "",
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;
