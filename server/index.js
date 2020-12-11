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
const validPath = ["/", "/dashboard"];

app.get("/*", function (req, res) {
  if (validPath.includes(req.originalUrl)) {
    res.sendFile(
      path.join(__dirname, "../client/public/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  } else {
    res.sendFile(path.join(__dirname, "./nicetry.html"), function (err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  }
});

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
