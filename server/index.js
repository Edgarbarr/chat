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
// const validPath = ["/", "/dashboard", "/change-password"];

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
  console.log(socket.id);
  socket.emit("Id", {socket.id});
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("Message", ({ message }) => {
    io.emit("Message", { message });
    console.log(`${message} Chris's server`);
  });
});
http.listen(3000);
