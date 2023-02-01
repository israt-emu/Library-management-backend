const { findSingleBookServices } = require("../../services/bookServices");

exports.getSingleBookController = async (req, res) => {
    try {
        const {bookId}=req?.body
        console.log("----req---",req.body);
      const book = await findSingleBookServices(bookId);
      if (!book) {
        return res.status(200).json({
          status: "failed",
          message: "can not find book",
        });
      } 

      return res.status(200).json({
        status: "success",
        book
      });
    } catch (err) {
     
      console.log(err.message);
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  };
  