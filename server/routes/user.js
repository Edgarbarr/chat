// routes
/* 
//good to do controllers first since we would import that here
//const controllers = require("path to controllers")
//need to require express here too
//dont forget to export routes to use in server file
good starting routes are 
a route for /,
a route for /login,
a route for /register,
a route for /:id

*/
//can make routes here using express Router function

// const router = express.Router();
/* 
router  <------ example of a route
.route("/")
.get(controllers.getAllUsers)
.delete(controllers.deleteAllUsers)

router
.route(/another-route)
.get(controller.get)
.post(controller.post)
.put(controolers.put)


*/

const router = require("express").Router();
const controllers = require("../controllers/User");

// /user route - all routes using this controlls have /user first! (eg /kelson is /user/kelson)
router
  .route("/")
  .get(controllers.getAllUsers)
  .post(controllers.addUser)
  .delete(controllers.removeAllUsers);

router
  .route("/:username")
  .get(controllers.getUserByName)
  .delete(controllers.removeUserByName);

//delete user, delete users, change username (see if still holds to unique requirement), change password,

module.exports = router;
