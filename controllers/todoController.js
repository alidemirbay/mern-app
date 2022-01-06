
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Todo
      .find(req.query)
      .then(todos => res.json(todos))
      .catch(err => res.status(422).end());

  },
  remove: function (req, res) {
    db.Todo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addTodo: function (req, res) {
    db.Todo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

}