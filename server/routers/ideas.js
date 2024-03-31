const expres = require('express');
const ideaRouter = expres.Router();

const { IDEAS } = require("../constants");
const { response } = require("../utils");
const {
  getAllFromDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  addToDatabase,
} = require('../db');

ideaRouter.param('id', (req, res, next, id) => {
  req.id = id;

  next();
})

ideaRouter.get("/", (req, res, next) => {
  const ideas = getAllFromDatabase(IDEAS);

  ideas && res.send(ideas);
});

ideaRouter.post("/", (req, res, next) => {
  const newIdea = addToDatabase(IDEAS, req.body);

  newIdea && res.send(newIdea);
})

ideaRouter.get("/:id", (req, res, next) => {
  const idea = getFromDatabaseById(IDEAS, req.id);

  idea && res.send(idea);
})

ideaRouter.put("/:id", (req, res, next) => {
  const idea = updateInstanceInDatabase(IDEAS, req.body);

  idea && res.send(idea);
})

module.exports = ideaRouter;