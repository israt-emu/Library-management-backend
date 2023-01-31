const Store = require("../models/Store");

// create user / signUp user
exports.addStore = async (data) => {
  const store = await Store.create(data);
  store.setHtmlHashContent(data?.htmlContent);
  await store.save({validateBeforeSave: true});
  return store;
};

// get all bookmark
exports.getAllStores = async () => {
  const stores = await Store.find({});
  return stores;
};
// // find single store
// exports.findBookmarkById = async (id) => {
//   const bookmark = await Bookmark.findOne({_id: id});
//   return bookmark;
// };
//find stores by state
exports.findStoresByState = async (state) => {
  const stores = await Store.find({state});
  return stores;
};
//find stores by group
exports.findStoresByGroup = async (group) => {
  const stores = await Store.find({group});
  return stores;
};

// delete store
exports.deleteStoreById = async (id) => {
  const store = await Store.deleteOne({_id: id});
  return store;
};

//get stores by state and group
exports.findStoresByStateAndGroup = async (state, group) => {
  const stores = await Store.find({state, group});
  return stores;
};
//get stores by search text
exports.getStoresBySearch = async (search) => {
  const stores = await Store.find({
    $or: [
      {
        url: {
          $regex: search,
        },
      },
      {
        title: {
          $regex: search,
        },
      },
      {
        group: {
          $regex: search,
        },
      },
    ],
  });
  return stores;
};
//saving store after taking screenshot and getting favicon

exports.saveStore = async ({store, b64Image, b64Icon}) => {
  store.thumbnail = b64Image;
  store.favicon = b64Icon;
  await store.save({validateBeforeSave: true});
  return store;
};
//
// exports.getGroups = async (state) => {
//   const groups = await Bookmark.find({state}).distinct("group");
//   return groups;
// };
// // update bookmark
// exports.updateBookmark = async (id, updatedInfo) => {
//   const bookmark = await this.findBookmarkById(id);
//   const result = await bookmark.updateOne(updatedInfo);
//   const updatedBookmark = await this.findBookmarkById(id);
//   return {result, updatedBookmark};
// };
