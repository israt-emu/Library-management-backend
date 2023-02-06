const {findAllUser, makeAdmin} = require("../../services/userServices");

exports.createAdmin = async (req, res) => {
  try {
    const {email} = req?.body;
    const user = await findUserByEmail(email);
    if (user?._id) {
      const updateUser = await makeAdmin(user);
      if (updateUser?.active) {
        res.status(200).json({
          status: "success",
          updateUser,
        });
      } else {
        res.status(200).json({
          status: "failed",
          message: "Can't make admin",
          updateUser,
        });
      }
    } else {
      res.status(400).json({
        status: "failed",
        message: "User Doesn't exist",
        updateUser,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
