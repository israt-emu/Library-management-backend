const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    authorName: {
      type: String,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
