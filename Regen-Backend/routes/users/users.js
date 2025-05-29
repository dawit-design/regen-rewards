const express = require("express");
const {
  registerCtrl,
  loginCtrl,
  userProfileCtrl,
  userDetailsCtrl,
  profileImageCtrl,
  passwordUpdateCtrl,
  userUpdateCtrl,
  logoutCtrl,
  googleLoginCtrl,
  verifyGoogleToken,
  updateUserPoints
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected");
const { upload, uploadToCloudinary } = require('../../middlewares/upload'); 
const userRoutes = express.Router();

// Google Token Verification
userRoutes.post('/verify-google-token', verifyGoogleToken);

//POST/API/V1/USERS/GOOGLE
userRoutes.post("./google", googleLoginCtrl);

//POST/API/V1//USERS/REGISTER
userRoutes.post("/register", registerCtrl);

//POST/API/V1/USERS/LOGIN
userRoutes.post("/login", loginCtrl);

//GET/API/V1/USERS/profile/
userRoutes.get("/profile",  userProfileCtrl);

//GET/API/V1/USERS/:id
userRoutes.get("/:id", userDetailsCtrl);

// Route for uploading profile image
userRoutes.put('/upload-profile-image', upload.single('profileImage'), profileImageCtrl);

//PUT/API/V1/USERS/profile-photo-upload
// userRoutes.put(
//   "/profile-photo-upload/",
//   protected,
//   upload.single("profile"),
//   profileImageCtrl
// );

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/update-password/:id", passwordUpdateCtrl);

//PUT/API/V1/USERS/update-password/:id
userRoutes.put("/update-user/:id", userUpdateCtrl);

//GET/API/V1/USERS/logout/:id
userRoutes.get("/logout/:id", logoutCtrl);

//update points
// userRoutes.post('/update-points', updateUserPoints)

module.exports = userRoutes;
