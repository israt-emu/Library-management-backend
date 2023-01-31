const { updateUser, findUserByEmail } = require("../../services/userServices");
const { isValidPass } = require("../../utils/checkValidPassword");

// update user by email
exports.updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    // console.log(email);
    const { name, newPassword, userEmail, password } = req?.body;
    console.log(req?.body);
    //  //  handle error if updatedEmail is already taken
    // const checkUser = await findUserByEmail(userEmail)
    // console.log("---checkuser",checkUser);
    // if(checkUser?.email){
    //   return res.status(409).json({
    //     status: "fail",
    //     message: "Email Already taken",
    //   });
    // }

    // if given old password doesnot mass with db pass

    const isValid = await isValidPass(email, password);
    console.log("is valid-----", isValid);

    if (!isValid) {
      return res.status(400).json({
        status: "fail",
        message: "Email/password did not matched",
      });
    }
    //  users updated data
    let data = {};
    if (newPassword.length < 3 || newPassword == "") {
      data = { name, userEmail,newPassword:password };
      console.log("---without pass",data);
      const user = await updateUser(email, data);
      // console.log("user response---->", user);

      if (user) {
        return res.status(200).json({
          status: "success",
          message: "User Successfully updated",
          user,
        });
      }
      if (!user) {
        return res.status(500).json({
          status: "fail",
          message: "user can not updated ",
          user,
        });
      }
    }

    if (newPassword.length > 3 && newPassword !="") {
      data = { name, userEmail, newPassword };
      console.log("---with pass",data);
      const user = await updateUser(email, data);
      // console.log("user response---->", user);

      if (user) {
        return res.status(200).json({
          status: "success",
          message: "User Successfully updated",
          user,
        });
      }
      if (!user) {
        return res.status(500).json({
          status: "fail",
          message: "user can not updated ",
          user,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
