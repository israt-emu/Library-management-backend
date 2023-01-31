const {
  createUser: addUser,
  findUserByEmail,
  deleteUser,
  getAllUser,
  updateUser
} = require("../services/userServices");

// create user
exports.createUser = async (req, res) => {
  try {
    const user = await addUser(req.body);
    console.log("user---->", req.body);
    res.status(200).json({
      status: "success",
      message: "User added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// get  user by email
exports.findUserByEmail = async (req, res) => {
  try {
    const {email} = req.params;
    console.log(email);
    const user = await findUserByEmail(email);
    console.log("user---->", user);
    res.status(200).json({
      status: "success",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// get all user
exports.getAllUser = async (req, res) => {
  try {
    const users = await getAllUser();
    //   console.log("user---->", user);
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// delete user by email
exports.deleteUser = async (req, res) => {
  try {
    const {email} = req.params;
    console.log(email);
    const user = await deleteUser(email);
    console.log("user---->", user);
    res.status(200).json({
      status: "success",
      message: "User Successfully deleted",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

