const mongoose = require("mongoose");
const Notice = require("../models/Notice");
const {ObjectId} = mongoose.Types;

// add new book
exports.adNoticeServices = async (data) => {
  const notice = await Notice.create(data);
  await notice.save({validateBeforeSave: true});
  return notice;
};

// // find single notice
exports.findSingleNoticeServices = async (id) => {
  const notice = await Notice.findOne({_id: id});
  return notice;
};

// delete requested book
exports.deleteNoticeServices = async (id) => {
  try {
    const notice = await Notice.deleteOne({_id: id});
    return notice;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllNoticeServices = async () => {
  const notices = await Notice.find({}).sort({createdAt: -1});
  return notices;
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

// update notice
exports.editNoticeServices = async (id, updatedInfo) => {
  const existingNotice = await Notice.find({_id: id});
  // console.log(existingRequested, updatedInfo);
  if (existingNotice) {
    const result = await Notice.updateOne({_id: id}, updatedInfo, {
      runValidators: true,
    });

    return result;
  } else {
    return existingNotice;
  }
};
