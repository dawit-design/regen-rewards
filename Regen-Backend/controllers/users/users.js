const bcrypt = require("bcrypt");
const User = require("../../models/user/User.js");
const appError = require("../../utils/appError.js");
const session = require("express-session");
const { upload, uploadToCloudinary } = require("../../middlewares/upload.js");
const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.WEB_CLIENT_ID);
// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
//GOOGLE VERIFICATION
const verifyGoogleToken = async (req, res) => {
  const { idToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.WEB_CLIENT_ID, // Specify your client ID
    });
    const payload = ticket.getPayload(); // Extract user data from token
    const { email, name, sub: googleId } = payload;

    // Find or create the user in the database
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, fullName: name, googleId });
    } else {
      user.googleId = googleId;
      await user.save();
    }

    const token = generateToken(user._id);
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(400).json({ error: "Invalid Google token" });
  }
};

//GOOGLE LOGIN
const googleLoginCtrl = async (req, res) => {
  const { idToken } = req.body;

  try {
    const { data: userInfo } = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idToken}`
    );

    const { email, name, sub: googleId } = userInfo;
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email, fullName: name, googleId });
    } else {
      user.googleId = googleId;
      await user.save();
    }

    const token = generateToken(user._id);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Google login failed" });
  }
};

//REGISTER
const registerCtrl = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(appError("All fields are required"));
  }

  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(appError("User already exists"));
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      message: "Successfully Registered",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

//LOGIN

// JWT secret key (make sure you have this in your environment variables)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Login Controller
const loginCtrl = async (req, res, next) => {
  const { email, password } = req.body;

  // Validate input fields
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and Password fields are required" });
  }

  try {
    // Check if the user with the provided email exists
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: userFound._id, email: userFound.email, isAdmin: userFound.isAdmin }, // Payload
      JWT_SECRET, // Secret Key
      { expiresIn: "1h" } // Token expiration
    );

    // Save user info in session (if using session-based auth alongside JWT)
    req.session.userAuth = userFound._id;

    // Send back the response with the token and user data
    res.json({
      message: "Successfully Logged In",
      token, // Include JWT token in the response
      user: {
        id: userFound._id,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
      },
    });

    // Optionally, log the token in the console for debugging
    // console.log("JWT Token Dawit:", token);
  } catch (error) {
    console.error("Error during login:", error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//USER DETAILS
const userDetailsCtrl = async (req, res) => {
  try {
    //get user id from params
    const userId = req.params.id;
    //find the user
    const user = await User.findById(userId);
    res.json({
      status: "successs",
      data: user,
    });
  } catch (error) {
    res.json(error);
  }
};

//USER PROFILE
const userProfileCtrl = async (req, res) => {
  try {
    // Ensure the user is authenticated and the userId is available
    const userId = req.session.userAuth;
    if (!userId) {
      return res.status(401).json({
        status: "error",
        message: "User not authenticated",
      });
    }

    // Find the user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Respond with the user profile
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//PROFILE IMAGE
const profileImageCtrl = async (req, res, next) => {
  try {
    const userId = req.session.userAuth;
    console.log("User ID from session:", userId);

    const userFound = await User.findById(userId);
    console.log("User found:", userFound);
    if (!userFound) {
      return next(new Error("User not found"));
    }

    if (req.file) {
      const filePath = req.file.path;
      console.log("File path for Cloudinary upload:", filePath); // Debug log

      // Upload to Cloudinary
      const cloudinaryResult = await uploadToCloudinary(filePath);

      // Update user profile image URL
      await User.findByIdAndUpdate(
        userId,
        { profileImage: cloudinaryResult.secure_url },
        { new: true }
      );

      // Remove local file if it exists
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      } else {
        console.error("File does not exist:", filePath);
      }

      res.json({
        status: "success",
        data: "You've successfully updated your profile photo",
      });
    } else {
      res.status(400).json({
        status: "error",
        message: "No file uploaded",
      });
    }
  } catch (error) {
    next(new Error(error.message));
  }
};

//PASSWORD UPDATE
const passwordUpdateCtrl = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  try {
    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        status: "error",
        message: "Old and new passwords are required",
      });
    }

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "error",
        message: "Old password is incorrect",
      });
    }

    // Hash and update new password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(
      req.params.id,
      { password: passwordHashed },
      { new: true }
    );

    res.json({
      status: "success",
      data: "Password has been changed successfully",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//USER UPDATE
// USER UPDATE
const userUpdateCtrl = async (req, res, next) => {
  const {
    fullName,
    email,
    profilePicture,
    username,
    dateOfBirth,
    phoneNumber,
    address,
  } = req.body;

  try {
    // Check if email is being updated and if it's already taken
    if (email) {
      const emailTaken = await User.findOne({
        email,
        _id: { $ne: req.params.id },
      }); // Ignore current user
      if (emailTaken) {
        return next(appErr("Email is already taken", 400));
      }
    }

    // Perform the user update
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        email,
        profilePicture,
        username,
        dateOfBirth,
        phoneNumber,
        address: {
          street: address.street,
          city: address.city,
          state: address.state,
          apartment: address.apartment,
          zipCode: address.zipCode,
        },
      },
      {
        new: true, // Return the updated user data
      }
    );

    // Check if the user was found and updated
    if (!user) {
      return next(appErr("User not found", 404));
    }

    // Send a success response with the updated user data
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    // Handle any errors
    return next(appErr(`Failed to update user: ${error.message}`, 500));
  }
};

//LOGOUT
const logoutCtrl = async (req, res) => {
  try {
    res.json({
      status: "successs",
      user: "User Logout",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerCtrl,
  loginCtrl,
  userDetailsCtrl,
  userProfileCtrl,
  profileImageCtrl,
  passwordUpdateCtrl,
  userUpdateCtrl,
  logoutCtrl,
  googleLoginCtrl,
  verifyGoogleToken,
};
