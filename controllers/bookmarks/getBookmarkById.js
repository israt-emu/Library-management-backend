const { findBookmarkById } = require("../../services/bookMarkServices");

exports.getBookmarkById = async (req, res) => {
    try {
        const {id} = req?.body
      const bookmark = await findBookmarkById(id);
      if (!bookmark) {
        return res.status(200).json({
          status: false,
          message: "can not find bookmark",
        });
      } 

      return res.status(200).json({
        status: true,
        bookmark
      });
    } catch (err) {
      console.log("Error in authenticateUser :::::::::::");
      console.log(err);
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  };
  