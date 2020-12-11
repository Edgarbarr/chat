//const User = require("path to models for user")
const models = require("../../database/models/User");

// controllers for user routes
// one controller for each crud operation in users model

// const controllers = {    <----- an example of a controller using promises/ can also use callbacks if you want
//   getAllUsers: (req, res) => {
//     User
//       .getAllUsers()
//       .then((users) => {
//         res.status(200).send(users);
//       })
//       .catch((err) => res.status(400).send(err);
//   },
//    otherController: (req, res) => User.otherModelQuery().then().catch()
// };

const controller = {
  getAllUsers: (req, res) => {
    models
      .getAllUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => console.error(err));
  },
  getUserByName: (req, res) => {
    models
      .getUserByName(req.params.username)
      .then((specific) => {
        res.send(specific);
      })
      .catch((err) => console.error(err));
  },
  getUserByEmail: (req, res) => {
    models
      .getUserByEmail(req.body.email)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => res.send(err));
  },
  addUser: (req, res) => {
    models
      .addUser(req.body)
      .then((newUser) => {
        res.send(newUser);
      })
      .catch((err) => console.error(err));
  },
  changeUsername: (req, res) => {
    models
      .changeUsername(req.params.username, req.body.newUsername)
      .then((newName) => {
        res.send(newName);
      })
      .catch((err) => res.send(err));
  },
  removeAllUsers: (req, res) => {
    models
      .removeAllUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => res.send(err));
  },
  removeUserByName: (req, res) => {
    models
      .removeUserByName(req.params.username)
      .then((oldUser) => {
        res.send(oldUser);
      })
      .catch((err) => res.send(err));
  },
};

module.exports = controller;
