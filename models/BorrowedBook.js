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
    dueDate: {
      type:String
    },
  },

  {
    timestamps: true,
  }
);

const BorrowedBook = mongoose.model("BorrowedBook", borrowedBookSchema);
module.exports = BorrowedBook;
