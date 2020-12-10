//good idea to do models first since you need to import them here
//const User = require("path to models for user") 


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
