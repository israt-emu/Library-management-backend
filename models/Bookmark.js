const mongoose = require("mongoose");
const validator = require("validator");
const bookmarkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    group: {
      type: String,
      default: "null",
      lowercase: true,
    },

    url: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
      lowercase: true,
      required: [true, "URL is required"],
    },
    state: {
      type: String,
      default: "normal",
      enum: ["normal", "archive", "trash"],
    },
    pageLocation: {
      type: String,
    },

    favicon: {
      type: String,
    },

    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
