const router = require("express").Router();
const userController = require("../../controllers/userController");


// router.route("/").post(userController.create);S
router.post("/users",userController.create);

//add login before usernmae
router.route("/users/login/:username").get(userController.findUserbyUsername);

router.route("/users/:id")
.get(userController.findById)
.put(userController.updateFavorites)
.delete(userController.remove);

router.route("/users/favorites/:id")
.get(userController.getFavorites);

router.route("/favorites/:id").put(userController.RemoveFavorite);

module.exports = router;
