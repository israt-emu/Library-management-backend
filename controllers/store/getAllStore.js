const {getAllStores, findStoresByStateAndGroup, findStoresByState, findStoresByGroup, getStoresBySearch} = require("../../services/storeServices");

// get all user
exports.getAllStore = async (req, res) => {
  try {
    const {state, group, search} = req?.body;
    let stores;
    if (state && group) {
      bookmarks = await findStoresByStateAndGroup(state, group);
    } else if (state && !group) {
      bookmarks = await findStoresByState(state);
    } else if (!state && group) {
      bookmarks = await findStoresByGroup(state);
    } else if (search && !state && !group) {
      bookmarks = await getStoresBySearch(search);
    } else {
      stores = await getAllStores();
    }

    if (stores?.length > 0) {
      res.status(200).json({
        status: "success",
        stores,
      });
    } else if (stores?.length === 0) {
      res.status(400).json({
        status: false,
        message: "No Store found",
        stores,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
