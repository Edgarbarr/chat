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
  .put(controllers.changeUsername) // basic functionality, can easily be moved to the appropriate route - thought process is to take a POST from a button, pass that through middleware next to a put on the DB and res.send back the new object
  .delete(controllers.removeUserByName);

// route /login take body, finds user by email, and returns the user object
router.route("/login").post(controllers.getUserByEmail);

//change password

router.route("/authenticate").post(controllers.authenticateUser);

router.route("/confirmation/:token").get(controllers.confirmUserEmail);

router.route("/change-password").post(controllers.sendPasswordEmail);

router.route("/change-password/:token").put(controllers.changePassword);

router.route("/send-confirmation").post(controllers.sendConfirmationEmail);

module.exports = router;
