const mongoose = require("mongoose");
const Article = require("../models/Article");
const { ObjectId } = mongoose.Types;

// add new book
exports.addArticleServices = async (data) => {
  const article = await Article.create(data);
  await article.save({ validateBeforeSave: true });
  return article;
};

// // find single book
exports.findSingleArticleServices = async (id) => {
  const article = await Article.findOne({ _id: id });
  console.log(article);
  return article;
};

// delete requested book
exports.deleteArticleServices = async (id) => {
  try {
    const article = await Article.deleteOne({ _id: id });
    return article;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllArticleServices = async () => {
  const articles = await Article.find({});
  return articles;
};
//updating stock after borrow a book
// exports.editRequestedBookServices = async ({ book, data }) => {
//   const stock = book?.totalStock;
//   console.log(stock);
//   if (stock > 0 && state === "borrow") {
//     book.totalStock = stock - 1;
//   } else if (state === "return") {
//     book.totalStock = stock + 1;
//   }
//   await book.save({ validateBeforeSave: true });
//   return book;
// };
// update requestedbook
exports.editRequestedBookServices = async (id, updatedInfo) => {
  const existingRequested = await RequestedBook.find({ _id: id });
  console.log(existingRequested, updatedInfo);
  if (existingRequested) {
    const result = await RequestedBook.updateOne({ id }, updatedInfo, {
      runValidators: true,
    });

    return result;
  } else {
    return existingRequested;
  }
};
