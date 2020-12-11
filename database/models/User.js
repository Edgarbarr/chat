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
const {
  db,
} = require("../../../../JS-practice/node-demo/mongoose-zellwk/database/models/Character");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true, sparse: true },
});

const User = mongoose.model("user", userSchema);

const models = {
  getAllUsers: () => User.find().sort({ username: 1 }),
  getUserByName: async (username) => {
    const specific = await User.findOne({ username });
    return specific;
  },
  getUserByEmail: async (email) => {
    const specific = await User.findOne({ email });
    return specific;
  },
  addUser: async (body) => {
    let newName = body.name;
    newName = new User({
      username: body.username,
      password: body.password,
      email: body.email,
    });

    const doc = await newName.save();
    console.log(doc);
    return doc;
  },
  removeAllUsers: async () => {
    await User.deleteMany({});
  },
  removeUserByName: async (username) => {
    const oldUser = User.findOneAndDelete({ username: username });
    return oldUser;
  },
};

//model for a helper function when we need to run more complciated logic on a request
// async function findUsers(username) {
//   const specific = await User.findOne({ username: username });
//   const all = await User.find().sort({ username: 1 });
//   console.log(`${specific.name} found: ${specific} \n All Characters: ${all}`);
//   return specific;
// }

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
