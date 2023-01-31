const {getGroups} = require("../../services/bookMarkServices");

exports.getBookmarksGroup = async (req, res) => {
  try {
    const {state} = req?.query;
    const groups = await getGroups(state);
    if (groups?.length === 0) {
      return res.status(200).json({
        status: false,
        message: "No groups found!",
      });
    } else if (groups?.length > 0) {
      return res.status(200).json({
        status: true,
        groups,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};
