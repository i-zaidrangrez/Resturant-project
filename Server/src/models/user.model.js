import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
  totalOrder: {
    type: Number,
  },
  totalSpend: {
    type: Number,
  },
  loyalityPoints:{
    type : Number
  },
  passwordHash: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  refreshToken: {
    type: String,
  },
  refreshTokenExpiryTime : {
    type: Date
  },
  lastLogin : {
    type: Date,
    default : Date.now()
  }
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
