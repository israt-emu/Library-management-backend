const mongoose = require("mongoose");
const Notification = require("../models/Notification");
const { ObjectId } = mongoose.Types;

// add new book
exports.addNotificationServices = async (data) => {
  const notification = await Notification.create(data);
  await notification.save({ validateBeforeSave: true });
  return notification;
};

// // find single book
exports.findSingleNotificationServices = async (id) => {
  const notification = await Notification.findOne({ _id: id });
  console.log(notification);
  return notification;
};
exports.changeStatusNotificationServices = async (id) => {
  const notification = await Notification.findOne({ _id: id });
  notification.read = true;
  notification.save((err, updatedData) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  return notification;
};

// delete requested book
exports.deleteNotificationServices = async (id) => {
  try {
    const notification = await Notification.deleteOne({ _id: id });
    return notification;
  } catch (error) {
    console.log(error.message);
  }
};

// // get all book
exports.getAllNotificationServices = async () => {
  const notification = await Notification.find({});
  return notification;
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
