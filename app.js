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
const bookRoute = require("./routes/bookRoute.js");
const userRoute = require("./routes/userRoute.js");
const borrowedBookRoute = require("./routes/borrowedBookRoute");
const bookmarkRoute = require("./routes/bookmarkRoute.js");
const requestedBookRoute = require("./routes/requestedBookRoute.js");

// api routes
app.use("/api/v1/book", bookRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/borrowedBook", borrowedBookRoute);
app.use("/api/v1/bookmark", bookmarkRoute);
app.use("/api/v1/requestedBook", requestedBookRoute);

module.exports = app;
