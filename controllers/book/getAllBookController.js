const { getAllBooksServices } = require("../../services/bookServices");

exports.getAllBookController = async (req, res) => {
  try {

    const books = await getAllBooksServices();
    if (books) {
      res.status(200).json({
        status: "success",
        books: books,
      });
    } else {
      res.status(400).json({
        status: "failed",
        message: "Unable to get books",
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
