const Project = require("./../models/projectModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handleFactory");
const AppError = require("../utils/appError");

exports.getAllProjects = factory.getAll(Project);
exports.getProject = factory.getOne(Project);
exports.createProject = factory.createOne(Project);
exports.updateProject = factory.updateOne(Project);
exports.deleteProject = factory.deleteOne(Project);
