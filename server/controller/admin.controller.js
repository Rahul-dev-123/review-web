import AdminModal from "../models/admin.model.js";
import { generateToken } from "../utils/token.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  // console.log("data", data);

  if (!(email && password)) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const exist_user = await AdminModal.findOne({ email }).select(["password"]);

  if (!exist_user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const is_valid = await exist_user.comparePassword(password);

  if (!is_valid) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const access_token = await generateToken(exist_user._id);

  return res.status(200).json({
    token: `Bearer ${access_token}`,
  });
};

export const signupController = async (req, res) => {
  const { email, password, first_name, last_name = "" } = req.body;

  // Make sure all fields are filled out
  if (!email || !password || !first_name) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const exist_user = await AdminModal.findOne({ email: email });

  // console.log("existUser", existUser);

  if (exist_user) {
    return res.status(400).json({ message: "Email is already taken" });
  }

  const new_user = await AdminModal.create({
    email,
    password,
    first_name,
    last_name,
  });

  if (!new_user) {
    return res
      .status(400)
      .json({ message: "Invalid registration information" });
  }

  res.status(200).json({ message: "User created!" });
};

// This middleware function checks to see whether or not a user's authentication
// information is included in their request. If it is, then the next() function will be called
// and they will be allowed to proceed to the route they were originally trying to access.
// Otherwise, they will receive a response indicating that they need to log in first.
// export const authenticateJWT = (req, res, next) => {
//   const token = req.cookies.token;

//   // Make sure there is a token
//   if (!token) {
//     return res.status(401).send({ auth: false, message: 'No Token provided.' });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//     } else {
//       // If everything is good, save to request for use in other routes
//       req.userId = decoded.id;
//       next();
//     }
//   })
// }

// // Logout Route - clear out the cookie
// export const logOut = (req, res) => {
//   res.cookie('token', '', { expires: Date.now()});
//   res.send({ message: 'Logged Out!'})
// }
