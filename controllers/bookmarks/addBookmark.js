const {addBookmark, saveBookmark} = require("../../services/bookMarkServices");
const {grabFavicon} = require("../../utils/grabFavicon");

exports.addBookmark = async (req, res) => {
  try {
    const {title, group, url, pageLocation, favicon, thumbnail} = req?.body;
    const data = {
      title,
      group,
      url,
      pageLocation,
      favicon,
      thumbnail,
    };

    const bookmark = await addBookmark(data);
    if (bookmark) {
      //taking screenshot and converting base64 image
      res.status(200).json({
        status: "success",
        message: "Bookmark added Successfully",
        bookmark: bookmark,
      });
      const b64Image = await takeScreenShot(url);
      const b64Icon = await grabFavicon(url);
      const savedBookmark = await saveBookmark({bookmark, b64Image, b64Icon});
    } else {
      res.status(200).json({
        status: "failed",
        message: "Unable to add new bookmark",
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
