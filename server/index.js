//all my comments are suggestions yall can do w/e style and folder structure yall prefer
// express server
//we can import the db connection here
// you can import routes here
//an example of using a routes in this style is
// app.use('/user', userRouter); <-- with userRouter being the imported routes/user.js
const express = require("express");
const db = require("../database");
const userRouter = require("./routes/User");
const path = require("path");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.use(express.static(path.join(__dirname, "../client/public")));

io.on('connection', (socket) => {
  console.log('a user connected');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
      console.log('message: ' + msg)
  })
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});

app.listen(3000);
