const {updateBookmark, findBookmarkById} = require("../../services/bookMarkServices");

// update user by email
exports.updateBookmark = async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const {result, updatedBookmark} = await updateBookmark(id, data);
    if (result?.modifiedCount == 1) {
      return res.status(200).json({
        status: "success",
        message: "Bookmark Successfully updated",
        bookmark: updatedBookmark,
      });
    }
    if (result?.modifiedCount !== 1) {
      return res.status(400).json({
        status: "Fail",
        message: "Bookmark can not updated ",
        bookmark: result,
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
