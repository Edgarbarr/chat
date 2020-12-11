const express = require("express");
const db = require("../database");
const userRouter = require("./routes/User");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.json());

app.use("/user", userRouter);

app.use(express.static(path.join(__dirname, "../client/public")));

io.on("connection", (socket) => {
  console.log("a user connected");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(3000);
