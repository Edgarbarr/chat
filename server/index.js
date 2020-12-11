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

app.listen(3000);
