const {addStore, saveStore} = require("../../services/storeServices");
const fetch = require("node-fetch");
exports.addStore = async (req, res) => {
  try {
    const {title, group, url, pageLocation, favicon, thumbnail} = req?.body;
    if (url && title) {
      //getting html content
      const response = await fetch(`${url}`);
      const data = {
        title,
        group,
        url,
        pageLocation,
        favicon,
        thumbnail,
    
      };
      const store = await addStore(data);
      if (store) {
        console.log(store);
        res.status(200).json({
          status: "success",
          message: "Store added Successfully",
          store: store,
        });
        const b64Image = await takeScreenShot(url);
        const b64Icon = await grabFavicon(url);
        const savedStore = await saveStore({store, b64Image, b64Icon});
      } else {
        res.status(200).json({
          status: "failed",
          message: "Unable to add new store",
        });
      }
    } else {
      res.status(200).json({
        status: "failed",
        message: "Please fill up the field required",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
