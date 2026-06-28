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
  accountType : {
    type :  String,
    enum  :['guest','registered'],
    default : 'registered'
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
  loyaltyPoints:{
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
    default : null
  }
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
