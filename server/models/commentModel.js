const mongoose = require("mongoose");
const Project = require("./projectModel");
const slugify = require("slugify");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      require: [true, "Comment can not be empty"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    employee: {
      type: mongoose.Schema.ObjectId,
      ref: "Employee",
      require: [true, "Review must belong to a user"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "employee",
    select: "name photo",
  });
  next();
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
