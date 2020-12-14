//const User = require("path to models for user")
const models = require("../../database/models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const passwordChange = require("../services/passwordChange");
const emailConfirm = require("../services/emailConfirmation");
require("dotenv").config({ path: path.resolve(__dirname, "../config/.env") });
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
      if (!user.confirmed) {
        emailConfirm(user);
        throw {
          type: "email",
          message:
            "Email isn't confirmed. New confirmation link sent to your email.",
        };
      }
      let { password: hash, username } = user;
      let passwordMatch = await argon2.verify(hash, password);
      if (!passwordMatch) {
        throw { type: "password", message: "Password is incorrect" };
      }
      const pathToKey = path.join(__dirname, "../config", "private.pem");
      const privateKey = fs.readFileSync(pathToKey, "utf8");
      const payload = {
        sub: user.email,
        iat: Math.floor(Date.now / 1000),
      };
      let token = jwt.sign(payload, privateKey, {
        expiresIn: 1440,
        algorithm: "RS256",
      });
      return res.status(200).send({
        token: `Bearer ${token}`,
        expires: "1h",
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
      emailConfirm(user);
      return res.status(200).send(user);
    } catch (err) {
      if ((err.code = "11000")) {
        return res
          .status(400)
          .send({ type: "email", message: "Email is already taken" });
      }
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
  authenticateUser: async (req, res) => {
    const pathToKey = path.join(__dirname, "../config", "pub.pem");
    const publicKey = fs.readFileSync(pathToKey, "utf8");
    try {
      const { sub: email } = jwt.verify(
        req.body.token.split("Bearer ")[1],
        publicKey,
        {
          algorithms: "RS256",
        }
      );

      const user = await models.getUserByEmail(email);
      if (!user)
        throw {
          type: "email",
          message:
            "this error is impossible if this gets thrown somebody is trying to hack us",
        };
      res.status(200).send(user.username);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  },
  confirmUserEmail: async (req, res) => {
    let pathToEmailPublic = path.join(__dirname, "../config", "pub.pem");
    let emailPublicKey = fs.readFileSync(pathToEmailPublic, "utf8");
    try {
      const {
        user: { email },
      } = jwt.verify(req.params.token, emailPublicKey, {
        algorithms: ["RS256"],
      });
      await models.updateUser({ email }, { confirmed: true });
    } catch (e) {
      console.log(e);
    }
    return res.redirect("http://localhost:3000");
  },
  sendPasswordEmail: async (req, res) => {
    try {
      let user = await models.getUserByEmail(req.body.email);
      if (!user) throw { type: "email", message: "Email doesn't exist" };
      passwordChange(user);
    } catch (e) {
      console.log(e);
      return res.status(404).send(e);
    }
    return res.status(200).send("email sent");
  },
  changePassword: async (req, res) => {
    let pathToEmailPublic = path.join(__dirname, "../config", "pub.pem");
    let emailPublicKey = fs.readFileSync(pathToEmailPublic, "utf8");
    try {
      let hash = await argon2.hash(req.body.password);
      const {
        user: { email },
      } = jwt.verify(req.params.token, emailPublicKey, {
        algorithms: ["RS256"],
      });
      await models.updateUser({ email }, { password: hash });
    } catch (e) {
      console.log(e);
    }
    return res.status(200).send("Password Changed");
  },
  sendConfirmationEmail: async (req, res) => {
    emailConfirm(req.body);
    res.send("g2g");
  },
};

module.exports = controller;
