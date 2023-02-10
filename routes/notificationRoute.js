const express = require("express");
const { addNotificationController } = require("../controllers/notification/addNotificationController");
const { getAllNotificationController } = require("../controllers/notification/getAllNotificationController");

const router = express.Router();

router.post("/addNotification", addNotificationController);
router.get("/getAllNotification", getAllNotificationController);
// router.get("/getAllBooks", getAllBookController);
// router.delete("/deleteNotification/:id", deleteNotificationController);
// router.get("/getSingleBook/:id", getSingleBookController);

module.exports = router;
