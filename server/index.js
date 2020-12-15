const express = require("express");
const db = require("../database");
const userRouter = require("./routes/user");
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
  socket.emit("connection", socket.id);

  socket.on("disconnect", () => {
  });

  socket.on("Message", (message) => {
    io.emit("Message", message);
  });

  socket.on("admin-user-join", (displayName) => {
    io.emit("admin-userlist-show", displayName);
  });
});
http.listen(3000);
