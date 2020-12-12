//const User = require("path to models for user")
const models = require("../../database/models/User");
const argon2 = require("argon2");
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
  // getUserByEmail: (req, res) => {
  //   models
  //     .getUserByEmail(req.body.email)
  //     .then((user) => {
  //       res.send(user);
  //     })
  //     .catch((err) => res.send(err));
  // },
  getUserByEmail: async (req, res) => {
    try {
      let { password, email } = req.body;
      let user = await models.getUserByEmail(email);
      if (!user) {
        throw { type: "email", message: "Email doesn't exist" };
      }
      let { password: hash, username } = user;
      let passwordMatch = await argon2.verify(hash, password);
      if (!passwordMatch) {
        throw { type: "password", message: "Password is incorrect" };
      }
      return res.status(200).send({
        username,
      });
    } catch (err) {
      console.error(err);
      return res.status(404).send(err);
    }
  },
  // addUser: (req, res) => {
  //   models
  //     .addUser(req.body)
  //     .then((newUser) => {
  //       res.send(newUser);
  //     })
  //     .catch((err) => console.error(err));
  // },
  addUser: async (req, res) => {
    let hash = await argon2.hash(req.body.password);
    req.body.password = hash;
    try {
      const user = await models.addUser(req.body);
      return res.status(200).send(user);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
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
