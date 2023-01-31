const express = require("express");
const cors = require("cors");
const app = express();
//
// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Server is listening</h1>");
});

// import routes
const userRoute = require("./routes/userRoute.js");
const bookmarkRoute = require("./routes/bookmarkRoute.js");
const storeRoute = require("./routes/storeRoute.js");
const searchRoute = require("./routes/searchRoute");

// api routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/bookmark", bookmarkRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/search", searchRoute);

module.exports = app;
