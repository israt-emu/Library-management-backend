const mongoose = require("mongoose");

const borrowedBookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bookId: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
    },
    borrowerId: {
      type: String,
      required: true,
    },
    borrowerName: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const BorrowedBook = mongoose.model("BorrowedBook", borrowedBookSchema);
module.exports = BorrowedBook;
