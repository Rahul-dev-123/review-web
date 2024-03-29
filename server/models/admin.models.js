import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const AdminUserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
    },
    last_name: {
      type: String,
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
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 5,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

AdminUserSchema.index({ email: 1 });

// middleware to hash password using bycryptjs
AdminUserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  if (this.password) {
    this.password = await bcrypt.hash(this.password, salt);
  }
  if (this.email) {
    this.email = this.email.toLocaleLowerCase();
  }

  return next();
});

// middleware to match passwords
AdminUserSchema.methods["comparePassword"] = async function (enteredPassword) {
  try {
    const user = this;

    // console.log("user, enteredPassword", user, enteredPassword);
    return await bcrypt.compare(enteredPassword, user.password);
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export default mongoose.model("Admin", AdminUserSchema);
