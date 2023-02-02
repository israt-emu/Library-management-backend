const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    bookId: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
    },

    description: {
      type: String,
    },
    image: {
      type: String,
    },
    totalStock: {
      type: Number,
      required: true,
    },
    // remainingStock: {
    //   type: Number,
    //   required: true,
    // },
    bookLocation: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
    publications: {
      type: String,
      required: true,
    },
    edition: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["In Stock", "Stock Out"],
    },
    // borrowedBy: [],
    addedBy: {
      type: String,
    },
    totalViews: {
      type: Number,
    },
    totalBorrowed: {
      type: Number,
    },
    pdfLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
