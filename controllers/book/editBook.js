const {editBookServices} = require("../../services/bookServices");

exports.editBookController = async (req, res) => {
  try {
    const {id} = req?.params;
    const data = req?.body;
    const result = await editBookServices(id, data);
    console.log(result);
    if (result?.modifiedCount == 1) {
      return res.status(200).json({
        status: "success",
        message: "Book Successfully updated",
        book: result,
      });
    }
    if (result?.modifiedCount !== 1) {
      return res.status(400).json({
        status: "Fail",
        message: "Book can not updated ",
        book: result,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
