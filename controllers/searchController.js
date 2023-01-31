const {getBookmarksBySearch} = require("../services/bookmarkServices");
const {getStoresBySearch} = require("../services/storeServices");

exports.getSearchedData = async (req, res) => {
  try {
    const {search} = req?.query;
    const bookmarks = await getBookmarksBySearch(search);
    const stores = await getStoresBySearch(search);
    if (bookmarks?.length > 0 || stores?.length > 0) {
      res.status(200).json({
        status: "success",
        data: [...bookmarks, ...stores],
      });
    } else {
      res.status(200).json({
        status: "fail",
        message: "No Matching result found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
