const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

const storeSchema = mongoose.Schema(
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

    htmlContent: {
      type: String,
      default: "",
    },

    htmlContentHash: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
storeSchema.methods.setHtmlHashContent = function (htmlContent) {
  const hashedContent = crypto.createHash("sha256").update(htmlContent).digest("hex");
  this.htmlContentHash = hashedContent;
};
const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
