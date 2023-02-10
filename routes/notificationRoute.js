const express = require("express");
const {
  addNotificationController,
} = require("../controllers/notification/addNotificationController");
const {
  deleteNotificationController,
} = require("../controllers/Notification/deleteNotificationController");
const {
  getAllNotificationController,
} = require("../controllers/notification/getAllNotificationController");

const router = express.Router();

router.post("/addNotification", addNotificationController);
router.get("/getAllNotification", getAllNotificationController);
router.delete("/deleteNotification/:id", deleteNotificationController);

module.exports = router;
