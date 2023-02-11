const { findSingleArticleServices } = require("../../services/articleServices");

exports.getSingleArticleController = async (req, res) => {
  try {
    const { id } = req?.params;
    console.log("----req---", req.params, id);
    const article = await findSingleArticleServices(id);
    if (!article) {
      return res.status(200).json({
        status: "failed",
        message: "can not find Article",
      });
    }

    return res.status(200).json({
      status: "success",
      article,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: false,
      error: err.message,
    });
  }
};
