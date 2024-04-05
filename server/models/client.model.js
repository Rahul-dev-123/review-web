import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ClientUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    mobile: {
      type: String,
      required: [true, "Mobile is required"],
    },

    link: {
      type: String,
      required: [true, "Link is required"],
    },

    cycle: {
      type: String,
      required: false,
    },

    status: {
      type: String,
      required: false,
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// AdminUserSchema.index({ email: 1 });

export default mongoose.model("Client", ClientUserSchema);
