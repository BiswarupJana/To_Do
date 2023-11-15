const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, " Must have Project name"],
      unique: true,
      trim: true,
      maxlength: [
        50,
        "Project name must have less of equal then 50 characters",
      ],
      minlength: [
        10,
        "Project name must have less of equal then 50 characters",
      ],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, "Mention duration of the project"],
    },
    summary: {
      type: String,
      trim: true,
      required: [true, "Summary description of the project"],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    deliveryDates: [Date],
    secretProject: {
      type: Boolean,
      default: false,
    },
    assignedEmployees: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Employee",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);


//projects index 
projectSchema.index({startDates: -1});
projectSchema.index({slug: 1});

//DOCUMENT MIDDLEWARE:
projectSchema.pre('save', function(next){
    this.slug = slugify(this.name,{lower: true});
    next()
})

//QUERY MIDDLEWARE
projectSchema.pre(/^find/, function(next){
    this.find({secretProject:{$ne:true}});
    this.start =Date.now();
    next();
});

projectSchema.pre(/^find/, function(next){
    this.populate({
        path: 'assignedEmployees',
        select: ' -__v -passwordChangedAt'
    })
    next();
});

projectSchema.post(/^find/, function(docs, next){
    console.log(`Query took ${Date.now() - this.start} milliseconds!`);
    next();
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
