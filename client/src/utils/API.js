/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getTodos: function () {
    return axios.get("/api/");
  },

  deleteTodo: function (id) {
    return axios.delete("/api/" + id);
  },
  // Saves a book to the database
  createTodo: function (todoData) {
    return axios.post("/api/", todoData);
  }
};
