const express = require("express");
const router = express.Router();
const userController = require('../controller/index');

router.use(express.static("public"));

router.get("/", userController.getBookingPage);

router.get("/users", userController.getUsers);

router.get("/deleteUser/:id", userController.deleteUser);

router.post("/addUser", userController.addUser);

module.exports = router;