module.exports = app => {
  const users = require("../controllers/movies.controller.js");

  var router = require("express").Router();

  // Create a new Movie
  router.post("/", users.create);

  // Retrieve all Movies
  router.get("/", users.findAll);

  // Retrieve a single Movie with id
  router.get("/:id", users.findOne);

  // Update a Movie with id
  router.put("/:id", users.update);

  // Delete a Movie with id
  router.delete("/:id", users.delete);

  app.use("/api/users", router);
};
