const router = require("express").Router();
const db = require("../../models");
const todoController = require("../../controllers/todoController");

router.route("/")
  .get(todoController.findAll)
  .post(todoController.addTodo)

router.route("/:id")
  .delete(todoController.remove)

module.exports = router;





