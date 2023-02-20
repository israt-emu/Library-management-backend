const User = require("../models/User");
const crypto = require("crypto");
const dotenv = require("dotenv").config();

// create user / signUp user
exports.addUser = async (userInfo) => {
  const user = await User.create(userInfo);
  user.setPassword(userInfo?.password);
  await user.save({ validateBeforeSave: true });
  return user;
};
//matching password
exports.validatePassword = (password, user) => {
  return user.validPassword(password);
};

// delete user by email
exports.deleteUserService = async (email) => {
  const user = await User.deleteOne({ email });
  return user;
};

// find user by email
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
// find user by email
exports.findSingleUser = async (email) => {
  console.log(email);
  return await User.findOne({ email });
};

// get all users
exports.findAllUser = async () => {
  const users = await User.find({});
  return users;
};
// get all filtered users
exports.findAllFilteredUser = async ({ role, status, search }) => {
  let users;
  if (status === "" && role === "" && search === "") {
    users = await User.find({});
  } //
  else if (role !== "" && status === "" && search === "") {
    users = await User.find({ role });
  } //
  else if (role === "" && status !== "" && search === "") {
    users = await User.find({ status });
  } //
  else if (role !== "" && status !== "" && search === "") {
    users = await User.find({ role, status });
  } //
  else if (role !== "" && status === "" && search !== "") {
    users = await User.find({
      role,
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          email: {
            $regex: search,
          },
        },
        {
          role: {
            $regex: search,
          },
        },
        {
          session: {
            $regex: search,
          },
        },
        {
          designation: {
            $regex: search,
          },
        },
        {
          contactNumber: {
            $regex: search,
          },
        },
      ],
    });
  } //
  else if (role === "" && status !== "" && search !== "") {
    users = await User.find({
      status,
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          email: {
            $regex: search,
          },
        },
        {
          role: {
            $regex: search,
          },
        },
        {
          session: {
            $regex: search,
          },
        },
        {
          designation: {
            $regex: search,
          },
        },
        {
          contactNumber: {
            $regex: search,
          },
        },
      ],
    });
  } //
  else if (role === "" && status === "" && search !== "") {
    users = await User.find({
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          email: {
            $regex: search,
          },
        },
        {
          role: {
            $regex: search,
          },
        },
        {
          session: {
            $regex: search,
          },
        },
        {
          designation: {
            $regex: search,
          },
        },
        {
          contactNumber: {
            $regex: search,
          },
        },
      ],
    });
  } //
  else {
    users = await User.find({
      role,
      status,
      $or: [
        {
          name: {
            $regex: search,
          },
        },
        {
          email: {
            $regex: search,
          },
        },
        {
          role: {
            $regex: search,
          },
        },
        {
          session: {
            $regex: search,
          },
        },
        {
          designation: {
            $regex: search,
          },
        },
        {
          contactNumber: {
            $regex: search,
          },
        },
      ],
    });
  }

  return users;
};
//
exports.makeOrDeleteAdmin = async (user) => {
  if (user?.admin) {
    user.admin = false;
  } else {
    user.admin = true;
  }
  await user.save({ validateBeforeSave: true });
  return user;
};
//
exports.statusUpdateService = async (user) => {
  if (user?.status === "active") {
    user.status = "block";
  } else {
    user.status = "active";
  }
  await user.save({ validateBeforeSave: true });
  return user;
};

// update user
exports.updateUser = async (email, updatedInfo) => {
  console.log("updatedinof ---------", updatedInfo);

  const result = await User.findOneAndUpdate({ email: email }, updatedInfo, {
    new: true,
    runValidators: true,
  });

  // const user = await User.updateOne({email}, updatedInfo, {runValidators: true});
  return result;
};
