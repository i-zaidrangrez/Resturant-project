import express from "express";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken, generateRefreshToken } from "../utils/tokens.js";

export async function registerController(req, res) {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "All fields are Required",
      });
    }
    const isAlreadyExist = await userModel.findOne({ email });
    if (isAlreadyExist) {
      return res.status(400).json({
        message: "User Already Exist Please Login",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      passwordHash,
      phone,
    });
    const refreshToken = generateRefreshToken({id : user._id})
    user.refreshToken = refreshToken;
    user.refreshTokenExpiryTime = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    );
    await user.save();
    const accessToken = generateAccessToken({id: user._id})
    res.cookie("accessToken", accessToken);

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        email,
        name,
        phone,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are Required",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User Does Not Exist Please Register",
      });
    }
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password is Incorrect",
      });
    }
    const refreshToken = generateRefreshToken({id : user._id,name : user.name})
    user.refreshToken = refreshToken
    user.refreshTokenExpiryTime = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000,
    );
    user.lastLogin = new Date(Date.now())
    await user.save()
    const accessToken = generateAccessToken({id : user._id , name: user.name})
    res.cookie("accessToken", accessToken);
    return res.status(200).json({
      message: "Login SuccessFully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}
