const {deleteBookmark} = require("../../services/bookMarkServices");

// delete bookmark by Id
exports.deleteBookmark = async (req, res) => {
  try {
    const id=(req.params.id).trim()
    const bookmark = await deleteBookmark(id);
    if (bookmark?.deletedCount !== 0) {
      return res.status(200).json({
        status: "success",
        message: "Bookmark Successfully deleted",
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Bookmark not deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
