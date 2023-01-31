const express = require("express");
const cors = require("cors");
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Server is listening</h1>");
});
app.get("/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "first post",
    },
    {
      id: 2,
      title: "second post",
    },
    {
      id: 3,
      title: "third post",
    },
    {
      id: 4,
      title: "fourth post",
    },
  ];
  res.json(posts);
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
