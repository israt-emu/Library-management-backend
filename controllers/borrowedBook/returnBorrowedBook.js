const {findSingleBookServices} = require("../../services/bookServices");
const {returnBorrowedBook} = require("../../services/borrowedBookServices");

exports.returnBorrowedBookController = async (req, res) => {
  try {
    const {id: strId} = req?.params;
    const id = Number(strId);
    const book = await findSingleBookServices(id);
    const deletedBook = await returnBorrowedBook(id);
    if (deletedBook?.deletedCount !== 0) {
      const updateBookStock = await updateBookStockServices({book, state: "return"});
      return res.status(200).json({
        status: "success",
        message: "This Borrowed book is returned successfully...",
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Sorry! We are having a trouble..",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
