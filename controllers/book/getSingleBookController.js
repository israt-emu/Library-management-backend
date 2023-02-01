const { findSingleBookServices } = require("../../services/bookServices");

exports.getSingleBookController = async (req, res) => {
    try {
        const {id:strId}=req?.params
        const id=Number(strId)
        console.log("----req---",req.params,id);
      const book = await findSingleBookServices(id);
      if (!book) {
        return res.status(200).json({
          status: "failed",
          message: "can not find book",
        });
      } 

      return res.status(200).json({
        status: "success",
        book
      });
    } catch (err) {
     
      console.log(err.message);
      return res.status(500).json({
        status: false,
        error: err.message,
      });
    }
  };
  