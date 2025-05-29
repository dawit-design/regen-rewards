const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  googleId: { type: String, unique: true },
  facebookId: { type: String, unique: true },
  profilePicture: { type: String },
  username: { type: String },
  dateOfBirth: { type: String },
  phoneNumber: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    apartment: { type: String },
    zipCode: { type: String },
  },
  creationDate: { type: Date, default: Date.now },
  totalRewardPoints: { type: Number, default: 0 }, // Add this line to track the user's total reward points
});

// Hash password before saving
// UserSchema.pre("save", async function (next) {
//   if (this.password && this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

// Compile the schema to form a model
const User = mongoose.model("User", UserSchema);
module.exports = User;
