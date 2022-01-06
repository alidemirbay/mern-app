const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/todoApp"
);

const todoSeed = [
  { todo: "read" },
  { todo: "code" },
  { todo: "eat" }
];

db.Todo.deleteMany({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
