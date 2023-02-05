const User = require("../models/User");
const crypto = require("crypto");
const dotenv = require("dotenv").config();

// create user / signUp user
exports.addUser = async (userInfo) => {
  const user = await User.create(userInfo);
  user.setPassword(userInfo?.password);
  await user.save({validateBeforeSave: true});
  return user;
};
//matching password
exports.validatePassword = (password, user) => {
  return user.validPassword(password);
};

// delete user by email
exports.deleteUser = async (email) => {
  const user = await User.deleteOne({email});
  return user;
};

// find user by email
exports.findUserByEmail = async (email) => {
  return await User.findOne({email});
};

// get all users
exports.findAllUser = async () => {
  const users = await User.find({});
  return users;
};

// update user
exports.updateUser = async (email, updatedInfo) => {
  const {name, newPassword, userEmail} = updatedInfo;
  console.log("updatedinof ---------", updatedInfo);
  const updatedpassword = process.env.APP_PASS_PREFIX + newPassword + process.env.APP_PASS_SUFFIX;

  const hash = crypto.createHash("sha256").update(updatedpassword).digest("hex");

  const user = await User.findOne({email});
  user.name = name;
  user.email = userEmail;
  user.hashedPassword = hash;
  await user.save({validateBeforeSave: true});

  // const user = await User.updateOne({email}, updatedInfo, {runValidators: true});
  return user;
};
