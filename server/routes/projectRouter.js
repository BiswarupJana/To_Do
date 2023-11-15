const express = require("express");
const projectController = require("../controllers/projectController");
const authController = require("../controllers/authController");

const router = express.Router();

// router("/")
//   .get(projectController.getAllProjects)
//   .post(
//     authController.protect,
//     authController.restrictTo("lead", "admin"),
//     projectController.createProject
//   )
//   .delete(
//     authController.protect,
//     authController.restrictTo("lead", "admin"),
//     projectController.deleteProject
//   );

module.exports = router;
