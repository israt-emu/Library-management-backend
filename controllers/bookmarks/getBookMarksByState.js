const {findBookmarksByState} = require("../../services/bookMarkServices");

exports.getBookmarksByState = async (req, res) => {
  try {
    const {state} = req?.body;
    const bookmarks = await findBookmarksByState(state);
    if (bookmarks?.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No bookmark found!",
        bookmarks,
      });
    } else if (bookmarks?.length > 0) {
      return res.status(200).json({
        status: true,
        bookmarks,
      });
    }
  } catch (err) {
    console.log("Error in authenticateUser :::::::::::");
    console.log(err);
    return res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};
