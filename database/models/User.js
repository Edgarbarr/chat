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
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, unique: true, required: true, sparse: true },
  confirmed: {
    type: Boolean,
    required: true,
    default: "false",
  },
});

const User = mongoose.model("user", userSchema);

const models = {
  getAllUsers: () => User.find().sort({ username: 1 }),
  getUserByName: async (username) => {
    const specific = await User.findOne({ username });
    return specific;
  },
  // getUserByEmail: async (email) => {
  //   const specific = await User.findOne({ email });
  //   return specific;
  // },
  getUserByEmail: (email) => User.findOne({ email }),
  // addUser: async (body) => {
  //   let newName = body.name;
  //   newName = new User({
  //     username: body.username,
  //     password: body.password,
  //     email: body.email,
  //   });

  //   const doc = await newName.save();
  //   console.log(doc);
  //   return doc;
  // },
  addUser: ({ username, email, password }) =>
    User.create({ username, email, password }),
  changeUsername: async (username, newUsername) => {
    const tempUser = await User.findOne({ username: username });
    tempUser.username = newUsername;
    const doc = await tempUser.save();
    return doc;
  },
  updateUser: (query, update) => User.findOneAndUpdate(query, update),
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

// const models = {      <----- example of a model queries, this is what you export to use in controllers
//     getAllUsers: () => User.find(),
//     anotherModel: (id) => User.somethingelse({id})
// }
