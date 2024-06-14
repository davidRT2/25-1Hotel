var express = require("express");
var router = express.Router();
const {
  createUser,
  getAllUsers,
  deleteUsers,
  restoreUsers,
  updateUser,
  getUserById,
} = require("../controller/UserController");
const authMidlleware = require("../middleware/authMiddleware");
/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

/* 
  Root Level
*/
router.get("/", authMidlleware(["root"]), getAllUsers);
router.put("/:id", authMidlleware(["root"]), deleteUsers);
router.put("/:id", authMidlleware(["root"]), restoreUsers);
/* 
End Of Root
*/
router.get("/:id", getUserById);
router.post("/register", createUser);
router.put("edit/:id", updateUser);
module.exports = router;