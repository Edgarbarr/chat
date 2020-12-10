// good idea to do db connection first since this needs it

/* 
get user by field, <----- some basic crud operations we would need for user. 
get user by id,
get users by field,
post user,
update user,
delete user by id,
delete all users
*/

// if you used mongoose then it would need a schema and to create the model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("user", userSchema);

const models = {
  getAllUsers: () => User.find(),
};

module.exports = models;
// const userSchema = mongoose.Schema({
//   id: Number,
//   username: {   <---- say you wanna add more than just type, you can make an object. mongoose docs has more
//     type: String,
//     required: true,
//   },
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// const models = {      <----- example of a model queries, this is what you export to use in controllers
//     getAllUsers: () => User.find(),
//     anotherModel: (id) => User.somethingelse({id})
// }
