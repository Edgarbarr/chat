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

// /user route - all routes using this controlls have /user first! (eg /register is /user/register)
router
  .route("/")
  .get(controllers.getAllUsers)
  .delete(controllers.removeAllUsers);

// /register will take req.body - res with successful message or error eventually - for now send user
router.route("/register").post(controllers.addUser);

// route /:username for getting and removing users by name
router
  .route("/:username")
  .get(controllers.getUserByName)
  .delete(controllers.removeUserByName);

// route /login take body, finds user by email, and returns the user object
router.route("/login").post(controllers.getUserByEmail);

//change username (see if still holds to unique requirement), change password

module.exports = router;
