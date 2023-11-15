const express = require("express");
const projectController = require("../controllers/projectController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(
    authController.protect,
    authController.restrictTo("lead", "admin"),
    projectController.createProject
  );
router
  .route("/:id")
  .get(projectController.getProject)
  .patch(
    authController.protect,
    authController.restrictTo("admin", "lead"),
    projectController.updateProject
  )
  .delete(
    authController.protect,
    authController.restrictTo("lead", "admin"),
    projectController.deleteProject
  );

module.exports = router;
