const {deleteStoreById} = require("../../services/storeServices");

// delete bookmark by Id
exports.deleteStore = async (req, res) => {
  try {
    const {id} = req?.body;
    const store = await deleteStoreById(id);
    if (store?.deletedCount !== 0) {
      return res.status(200).json({
        status: "success",
        message: "Store deleted Successfully",
      });
    } else {
      return res.status(400).json({
        status: "failed",
        message: "Couldn't delete Store !",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
