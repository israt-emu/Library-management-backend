const {getAllBookmarks, findBookmarksByStateAndGroup, findBookmarksByState, findBookmarksByGroup, getBookmarksBySearch} = require("../../services/bookMarkServices");

// get all user
exports.getAllBookmark = async (req, res) => {
  try {
    const {state, group, search} = req?.body;
    let bookmarks;
    if (state && group) {
      bookmarks = await findBookmarksByStateAndGroup(state, group);
    } else if (state && !group) {
      bookmarks = await findBookmarksByState(state);
    } else if (!state && group) {
      bookmarks = await findBookmarksByGroup(state);
    } else if (search && !state && !group) {
      bookmarks = await getBookmarksBySearch(search);
    } else {
      bookmarks = await getAllBookmarks();
    }

    if (bookmarks?.length > 0) {
      res.status(200).json({
        status: "success",
        bookmarks,
      });
    } else if (bookmarks?.length === 0) {
      res.status(400).json({
        status: false,
        message: "No bookmark found",
        bookmarks,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
