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

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/public/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("connection", socket.id);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("Message", (message) => {
    io.emit("Message", message);
  });

  socket.on("admin-user-join", (displayName) => {
    console.log("passing to userlist");
    io.emit("admin-userlist-show", displayName);
  });
});
http.listen(3000);
