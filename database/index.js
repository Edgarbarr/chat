// connection to mongodb
const mongoose = require("mongoose");
// mongoose.Promise = global.Promise; <----- this turns everything to promises if we wanted to use promise style instead of callbacks
mongoose.Promise = global.Promise;

//user:pass are open for dev project - would hide with dotenv or something for production
let uri =
  "mongodb+srv://kelson:kelson@cluster0.pbbye.mongodb.net/chat?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, // using this option - true is deprecated
  })
  .then(() => {
    console.log("MongoDB is connected:", uri);
  })
  .catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;
