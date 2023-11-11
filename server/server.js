const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION!! **  Shutting down ....");
  console.error(err.name, err.message);
  console.error(err.stack); // Include the stack trace
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"))
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  });
const port = process.env.PORT || 5000;
console.log("After app.listen");
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
// console.log("After app.listen");

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION! **  Shutting down ....");
  console.error(err.name, err.message);
  console.error(err.stack); // Include the stack trace
  server.close(() => {
    process.exit(1);
  });
});
