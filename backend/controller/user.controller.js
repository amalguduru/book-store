import User from "../model/user.model.js";
import brcyptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await brcyptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await brcyptjs.compare(password, user.password);
    if (!user || !isMatch) {
      res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.status(201).json({
        message: "Login successful",
        user: {
          _id: user.id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
