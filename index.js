const app = require("./app")
const dotenv = require("dotenv").config();
const db = require("./db/db")
const PORT = process.env.PORT||5000;

// database connection 
db()


// create server 
const server = app.listen(PORT,()=>{
    console.log(`---Server is Listening On PORT ::: ${PORT}`);
})

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Sockets are in");
    socket.on("setup", (userData) => {
      // console.log(userData)
      socket.emit("connected",userData);
    });

    socket.on("newNotification", (data) => {
      console.log("from socket",data)
      io.emit("getNotification",data)
    });
    // socket.on("join chat", (room) => {
    //   socket.join(room);
    //   console.log("User joined room: " + room);
    // });
    // socket.on("new message", (newMessage) => {
    //   var chat = newMessage.chatId;
    //   if (!chat.users) return console.log("chat.users not defined");
  
    //   chat.users.forEach((user) => {
    //     if (user._id === newMessage.sender._id) return;
    //     socket.in(user._id).emit("message received", newMessage);
    //   });
    //   socket.on("typing", (room) => {
    //     socket.in(room).emit("typing");
    //   });
    //   socket.on("stop typing", (room) => {
    //     socket.in(room).emit("stop typing");
    //   });
    // });
    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });