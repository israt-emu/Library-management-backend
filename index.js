const app = require("./app");
const dotenv = require("dotenv").config();
const db = require("./db/db");
const http = require("http");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {
  allowEIO3: true,
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("a user connected");
});

// database connection
db();

// create server
// app.listen(PORT, () => {
//   console.log(`---Server is Listening On PORT ::: ${PORT}`);
// });

server.listen(8000, () => {
  console.log("listening on *:8000");
});
